const fs = require('fs');
const path = require('path');

const openapiPath = path.resolve(__dirname, '..', 'etc', 'iwa-api-docs.json');
const collectionPath = path.resolve(__dirname, '..', 'etc', 'IWA-API-Local.postman_collection.json');

function loadJson(p) { return JSON.parse(fs.readFileSync(p, 'utf8')); }

const openapi = loadJson(openapiPath);
const baseCollection = loadJson(collectionPath);

// Build folders grouped by OpenAPI tag (fall back to first path segment)
const existingItems = baseCollection.item || [];
// preserve only Authentication folder if present
const preservedAuth = existingItems.find(it => it.name === 'Authentication');

const tagMap = {}; // tag -> { name, item[] }
const paths = openapi.paths || {};
// Helpers to generate example JSON from schemas
const components = openapi.components || {};

function resolveRef(ref) {
  // ref like '#/components/schemas/MySchema'
  if (!ref || !ref.startsWith('#/')) return null;
  const parts = ref.replace(/^#\//, '').split('/');
  let cur = openapi;
  for (const p of parts) {
    cur = cur && cur[p];
  }
  return cur;
}

function exampleFromSchema(schema, seen = new Set()) {
  if (!schema) return null;
  if (schema.example !== undefined) return schema.example;
  if (schema.$ref) {
    if (seen.has(schema.$ref)) return {};
    seen.add(schema.$ref);
    const resolved = resolveRef(schema.$ref);
    return exampleFromSchema(resolved, seen);
  }
  if (schema.allOf && Array.isArray(schema.allOf)) {
    const merged = {};
    for (const s of schema.allOf) Object.assign(merged, exampleFromSchema(s, seen) || {});
    return merged;
  }
  if (schema.oneOf && Array.isArray(schema.oneOf)) return exampleFromSchema(schema.oneOf[0], seen);
  if (schema.anyOf && Array.isArray(schema.anyOf)) return exampleFromSchema(schema.anyOf[0], seen);

  const type = schema.type;
  if (!type) {
    // fallback to object
    if (schema.properties) return exampleFromSchema({ type: 'object', properties: schema.properties }, seen);
    return {};
  }

  if (type === 'object') {
    const out = {};
    const props = schema.properties || {};
    for (const [k, propSchema] of Object.entries(props)) {
      out[k] = exampleFromSchema(propSchema, seen) || null;
    }
    if (schema.additionalProperties && typeof schema.additionalProperties === 'object') {
      // include one example additional property
      out['x_additionalProp'] = exampleFromSchema(schema.additionalProperties, seen) || null;
    }
    return out;
  }
  if (type === 'array') {
    const itemSchema = schema.items || {};
    return [exampleFromSchema(itemSchema, seen) || null];
  }
  if (type === 'string') {
    if (schema.enum && schema.enum.length) return schema.enum[0];
    if (schema.format === 'date-time') return new Date().toISOString();
    if (schema.format === 'uuid') return '00000000-0000-0000-0000-000000000000';
    if (schema.format === 'email') return 'user@example.com';
    return schema.default !== undefined ? schema.default : (schema.example !== undefined ? schema.example : 'string');
  }
  if (type === 'integer' || type === 'number') return schema.default !== undefined ? schema.default : 0;
  if (type === 'boolean') return schema.default !== undefined ? schema.default : false;
  return null;
}

for (const [route, methods] of Object.entries(paths)) {
  for (const [method, op] of Object.entries(methods)) {
    const tags = op.tags && op.tags.length ? op.tags : [route.split('/')[1] || 'api'];
    const tag = tags[0] || 'api';
    if (!tagMap[tag]) tagMap[tag] = { name: tag, item: [] };

    const name = (op.summary || op.operationId || `${method.toUpperCase()} ${route}`).trim();
    const rawUrl = '{{base_url}}' + route.replace(/\{([^}]+)\}/g, (m, p) => `{{${p}}}`);
    const pathParts = route.split('/').filter(Boolean).map(p => p.replace(/\{([^}]+)\}/g, (m, name) => `{{${name}}}`));

    const req = {
      name,
      request: {
        method: method.toUpperCase(),
        header: [],
        url: { raw: rawUrl, host: ['{{base_url}}'], path: pathParts }
      }
    };

    if (op.parameters) {
      const q = op.parameters.filter(p => p.in === 'query');
      if (q && q.length) req.request.url.query = q.map(p => ({ key: p.name, value: p.example || '' }));
      const pparams = op.parameters.filter(p => p.in === 'path');
      if (pparams && pparams.length) {
        // add collection variables for path params with example or placeholder
        for (const pparam of pparams) {
          const key = pparam.name;
          if (!baseCollection.variable) baseCollection.variable = [];
          if (!baseCollection.variable.find(v => v.key === key)) {
            baseCollection.variable.push({ key, value: pparam.example || '', type: 'string' });
          }
        }
      }
    }

    if (['post','put','patch'].includes(method)) {
      req.request.header.push({ key: 'Content-Type', value: 'application/json' });
      // try to create an example body from requestBody schema
      let example = null;
      try {
        const rb = op.requestBody;
        if (rb && rb.content && rb.content['application/json'] && rb.content['application/json'].schema) {
          const schema = rb.content['application/json'].schema;
          example = exampleFromSchema(schema);
        }
      } catch (e) {
        console.log('Error building example body for', route, method, e);
      }
      req.request.body = { mode: 'raw', raw: example ? JSON.stringify(example, null, 2) : '{}', options: { raw: { language: 'json' } } };
    }

    tagMap[tag].item.push(req);
  }
}

// Build ordered items: Authentication (preserved) then folders sorted by tag name
const folders = Object.keys(tagMap).sort().map(k => tagMap[k]);
baseCollection.item = [];
if (preservedAuth) baseCollection.item.push(preservedAuth);
baseCollection.item = baseCollection.item.concat(folders);

fs.writeFileSync(collectionPath, JSON.stringify(baseCollection, null, 2), 'utf8');
console.log('Updated collection with OpenAPI paths grouped by tag.');