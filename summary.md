# Fortify on Demand Release Report

## [IWA-Java [KAL] - main](https://ams.fortify.com/redirect/Releases/1307159)

Report generated on: 2024-12-03 11:12

### Security Policy
**Rating:** &bigstar;&star;&star;&star;&star;
**Status:** Fail

### Issue Counts
| Type            | Last Scan Date   | Critical | High     | Medium   | Low      |
| --------------- | ---------------- | -------- | -------- | -------- | -------- |
| **Static**      | 2024-12-03 08:52 |       36 |       15 |        0 |        0 |
| **Dynamic**     | 2024-11-07 09:39 |        2 |        2 |        2 |       15 |
| **Mobile**      | N/A              |        0 |        0 |        0 |        0 |
| **Open Source** | 2024-12-03 08:52 |        7 |       44 |       25 |        1 |
| **Total**       |                  |       45 |       61 |       27 |       16 |

### Existing Issues

* Critical (Static) - Mass Assignment: Request Parameters Bound into Persisted Objects:    
[src/main/java/com/microfocus/example/entity/User.java:46](https://ams.fortify.com/redirect/Issues/2678be34-a647-4df2-a747-a2c58c128c78)

Summary:
<Paragraph>The class in <b class="vuln-data">User.java</b> is both a database persistent entity and a dynamically bound request object. Allowing database persistent entities to be auto-populated by request parameters will let an attacker create unintended database records in association entities or update unintended fields in the entity object.<AltParagraph> Allowing database persistent entities to be auto-populated by request parameters will let an attacker create unintended records in association entities or update unintended fields in the entity object.</AltParagraph></Paragraph>
* Critical (Static) - Weak Encryption:    
[src/main/java/com/microfocus/example/utils/EncryptedPasswordUtils.java:76](https://ams.fortify.com/redirect/Issues/35ed2bba-e745-4228-a5b8-d2f0487e8123)

Summary:
<Paragraph>The call to <b class="vuln-data">getInstance()</b> at <b class="vuln-data">EncryptedPasswordUtils.java</b> line <b class="vuln-data">76</b> uses a weak encryption algorithm that cannot guarantee the confidentiality of sensitive data.<AltParagraph>The identified call uses a weak encryption algorithm that cannot guarantee the confidentiality of sensitive data.</AltParagraph></Paragraph>
* Critical (Static) - Path Manipulation:    
[src/main/java/com/microfocus/example/service/FileSystemStorageService.java:143](https://ams.fortify.com/redirect/Issues/a1522528-9791-42b0-a60a-eafe16d22486)

Summary:
<Paragraph>Attackers can control the file system path argument to <b class="vuln-data">resolve()</b> at <b class="vuln-data">FileSystemStorageService.java</b> line <b class="vuln-data">143</b>, which allows them to access or modify otherwise protected files.<AltParagraph>Allowing user input to control paths used in file system operations could enable an attacker to access or modify otherwise protected system resources.</AltParagraph></Paragraph>
* Critical (Static) - Privacy Violation:    
[src/main/java/com/microfocus/example/api/controllers/ApiUserController.java:123](https://ams.fortify.com/redirect/Issues/878612ea-9559-4dfa-9329-403c876f447b)

Summary:
<Paragraph>The method <b class="vuln-data">createUser()</b> in <b class="vuln-data">ApiUserController.java</b> mishandles confidential information, which can compromise user privacy and is often illegal.<AltParagraph>Mishandling private information, such as customer passwords or social security numbers, can compromise user privacy and is often illegal. </AltParagraph></Paragraph>
* Critical (Static) - HTML5: Missing Framing Protection:    
[src/main/java/com/microfocus/example/config/WebSecurityConfiguration.java:149](https://ams.fortify.com/redirect/Issues/616483a7-f521-44c7-a25a-e7f0f3a9b81b)

Summary:
The application does not restrict browsers from letting third-party sites render its content.
* Critical (Static) - Path Manipulation:    
[src/main/java/com/microfocus/example/service/FileSystemStorageService.java:54](https://ams.fortify.com/redirect/Issues/337216f3-5006-44af-a8e0-8d99ac68e78a)

Summary:
<Paragraph>Attackers can control the file system path argument to <b class="vuln-data">get()</b> at <b class="vuln-data">FileSystemStorageService.java</b> line <b class="vuln-data">54</b>, which allows them to access or modify otherwise protected files.<AltParagraph>Allowing user input to control paths used in file system operations could enable an attacker to access or modify otherwise protected system resources.</AltParagraph></Paragraph>
* Critical (Static) - Privacy Violation:    
[src/main/java/com/microfocus/example/api/controllers/ApiUserController.java:123](https://ams.fortify.com/redirect/Issues/abfd7074-2c05-46be-9ee9-77b257fbccca)

Summary:
<Paragraph>The method <b class="vuln-data">createUser()</b> in <b class="vuln-data">ApiUserController.java</b> mishandles confidential information, which can compromise user privacy and is often illegal.<AltParagraph>Mishandling private information, such as customer passwords or social security numbers, can compromise user privacy and is often illegal. </AltParagraph></Paragraph>
* Critical (Static) - Privacy Violation:    
[src/main/java/com/microfocus/example/utils/EmailUtils.java:77](https://ams.fortify.com/redirect/Issues/a75b6ad1-77c3-4283-85fb-67ca0255ff13)

Summary:
<Paragraph>The method <b class="vuln-data">setEmailPassword()</b> in <b class="vuln-data">EmailUtils.java</b> mishandles confidential information, which can compromise user privacy and is often illegal.<AltParagraph>Mishandling private information, such as customer passwords or social security numbers, can compromise user privacy and is often illegal. </AltParagraph></Paragraph>
* Critical (Static) - HTML5: Missing Content Security Policy:    
[src/main/java/com/microfocus/example/config/WebSecurityConfiguration.java:111](https://ams.fortify.com/redirect/Issues/bee0ae98-1586-442b-8465-16fccb5f2cc5)

Summary:
Content Security Policy (CSP) is not configured.
* Critical (Static) - JSON Injection:    
[src/main/java/com/microfocus/example/utils/UserUtils.java:119](https://ams.fortify.com/redirect/Issues/0c484c0d-6f12-4bf3-9b20-751c38b998a1)

Summary:
<Paragraph>On line <b class="vuln-data">119</b> of <b class="vuln-data">UserUtils.java</b>, the method <b class="vuln-data">registerUser()</b> writes unvalidated input into JSON. This call might allow an attacker to inject arbitrary elements or attributes into the JSON entity.<AltParagraph>The method writes unvalidated input into JSON. This call might allow an attacker to inject arbitrary elements or attributes into the JSON entity.</AltParagraph></Paragraph>
* Critical (Static) - XML External Entity Injection:    
[src/main/java/com/microfocus/example/web/controllers/UserController.java:890](https://ams.fortify.com/redirect/Issues/8e8d3c7a-4e72-46a6-8cec-e1734e4456ed)

Summary:
<Paragraph>XML parser configured in <b class="vuln-data">UserController.java</b>:<b class="vuln-data">890</b> does not prevent nor limit external entities resolution. This can expose the parser to an XML External Entities attack<AltParagraph>Using XML parsers that are not configured to prevent or limit external entities resolution can expose the parser to an XML External Entities attack</AltParagraph>.</Paragraph>
* Critical (Static) - Privacy Violation:    
[src/main/java/com/microfocus/example/api/controllers/ApiUserController.java:123](https://ams.fortify.com/redirect/Issues/c96dfd40-1cb3-4c98-8f19-6468bc861d0c)

Summary:
<Paragraph>The method <b class="vuln-data">createUser()</b> in <b class="vuln-data">ApiUserController.java</b> mishandles confidential information, which can compromise user privacy and is often illegal.<AltParagraph>Mishandling private information, such as customer passwords or social security numbers, can compromise user privacy and is often illegal. </AltParagraph></Paragraph>
* Critical (Static) - HTML5: Missing Content Security Policy:    
[src/main/java/com/microfocus/example/config/WebSecurityConfiguration.java:145](https://ams.fortify.com/redirect/Issues/bebb70f5-1abd-47ee-ab97-0188435e0136)

Summary:
Content Security Policy (CSP) is not configured.
* Critical (Static) - Weak Encryption:    
[src/main/java/com/microfocus/example/utils/EncryptedPasswordUtils.java:47](https://ams.fortify.com/redirect/Issues/21c491e3-be6a-4fef-b718-9136738de0cf)

Summary:
<Paragraph>The call to <b class="vuln-data">getInstance()</b> at <b class="vuln-data">EncryptedPasswordUtils.java</b> line <b class="vuln-data">47</b> uses a weak encryption algorithm that cannot guarantee the confidentiality of sensitive data.<AltParagraph>The identified call uses a weak encryption algorithm that cannot guarantee the confidentiality of sensitive data.</AltParagraph></Paragraph>
* Critical (Static) - Path Manipulation:    
[src/main/java/com/microfocus/example/service/FileSystemStorageService.java:78](https://ams.fortify.com/redirect/Issues/2268e467-c4eb-4a49-8f03-c025a478e82b)

Summary:
<Paragraph>Attackers can control the file system path argument to <b class="vuln-data">get()</b> at <b class="vuln-data">FileSystemStorageService.java</b> line <b class="vuln-data">78</b>, which allows them to access or modify otherwise protected files.<AltParagraph>Allowing user input to control paths used in file system operations could enable an attacker to access or modify otherwise protected system resources.</AltParagraph></Paragraph>
* Critical (Static) - Weak Encryption: Insecure Mode of Operation:    
[src/main/java/com/microfocus/example/utils/EncryptedPasswordUtils.java:76](https://ams.fortify.com/redirect/Issues/f16b6f82-b44a-4dbb-8ba6-f8923a4a1c51)

Summary:
<Paragraph>The function <b class="vuln-data">matches()</b> in <b class="vuln-data">EncryptedPasswordUtils.java</b> uses a cryptographic encryption algorithm with an insecure mode of operation on line <b class="vuln-data">76</b>.<AltParagraph>Do not use cryptographic encryption algorithms with an insecure mode of operation.</AltParagraph></Paragraph>
* Critical (Static) - Path Manipulation:    
[src/main/java/com/microfocus/example/service/FileSystemStorageService.java:143](https://ams.fortify.com/redirect/Issues/e0cc0fab-57eb-4b2c-b73d-1aa84751b51c)

Summary:
<Paragraph>Attackers can control the file system path argument to <b class="vuln-data">resolve()</b> at <b class="vuln-data">FileSystemStorageService.java</b> line <b class="vuln-data">143</b>, which allows them to access or modify otherwise protected files.<AltParagraph>Allowing user input to control paths used in file system operations could enable an attacker to access or modify otherwise protected system resources.</AltParagraph></Paragraph>
* Critical (Static) - XML External Entity Injection:    
[src/main/java/com/microfocus/example/web/controllers/UserController.java:905](https://ams.fortify.com/redirect/Issues/5e4a6294-6324-4eb7-ba7a-ec20dfadbc84)

Summary:
<Paragraph>XML parser configured in <b class="vuln-data">UserController.java</b>:<b class="vuln-data">905</b> does not prevent nor limit external entities resolution. This can expose the parser to an XML External Entities attack<AltParagraph>Using XML parsers that are not configured to prevent or limit external entities resolution can expose the parser to an XML External Entities attack</AltParagraph>.</Paragraph>
* Critical (Static) - Insecure Transport: Mail Transmission:    
[src/main/java/com/microfocus/example/utils/EmailUtils.java:101](https://ams.fortify.com/redirect/Issues/e9e711c4-7f75-48b9-9614-4735e1060118)

Summary:
<Paragraph>The method <b class="vuln-data">sendEmail()</b> in <b class="vuln-data">EmailUtils.java</b> establishes an unencrypted connection to a mail server allowing an attacker to carry out a man-in-the-middle attack and read all the mail transmissions.<AltParagraph>Establishing an unencrypted connection to a mail server allows an attacker to carry out a man-in-the-middle attack and read all the mail transmissions.</AltParagraph></Paragraph>
* Critical (Static) - Path Manipulation:    
[src/main/java/com/microfocus/example/service/FileSystemStorageService.java:143](https://ams.fortify.com/redirect/Issues/a51a5b3e-19c9-4772-b26d-460eb292b6cc)

Summary:
<Paragraph>Attackers can control the file system path argument to <b class="vuln-data">resolve()</b> at <b class="vuln-data">FileSystemStorageService.java</b> line <b class="vuln-data">143</b>, which allows them to access or modify otherwise protected files.<AltParagraph>Allowing user input to control paths used in file system operations could enable an attacker to access or modify otherwise protected system resources.</AltParagraph></Paragraph>
* Critical (Static) - Weak Encryption: Insecure Mode of Operation:    
[src/main/java/com/microfocus/example/utils/EncryptedPasswordUtils.java:61](https://ams.fortify.com/redirect/Issues/6fe22078-174b-44aa-bb9f-877534c1fc0d)

Summary:
<Paragraph>The function <b class="vuln-data">decryptPassword()</b> in <b class="vuln-data">EncryptedPasswordUtils.java</b> uses a cryptographic encryption algorithm with an insecure mode of operation on line <b class="vuln-data">61</b>.<AltParagraph>Do not use cryptographic encryption algorithms with an insecure mode of operation.</AltParagraph></Paragraph>
* Critical (Static) - Mass Assignment: Request Parameters Bound into Persisted Objects:    
[src/main/java/com/microfocus/example/entity/Authority.java:37](https://ams.fortify.com/redirect/Issues/44a50ac8-b4ab-4936-921b-fe088b472950)

Summary:
<Paragraph>The class in <b class="vuln-data">Authority.java</b> is both a database persistent entity and a dynamically bound request object. Allowing database persistent entities to be auto-populated by request parameters will let an attacker create unintended database records in association entities or update unintended fields in the entity object.<AltParagraph> Allowing database persistent entities to be auto-populated by request parameters will let an attacker create unintended records in association entities or update unintended fields in the entity object.</AltParagraph></Paragraph>
* Critical (Static) - Privacy Violation:    
[src/main/java/com/microfocus/example/utils/EmailUtils.java:77](https://ams.fortify.com/redirect/Issues/07089f03-ad5a-41b7-b6b7-336eb3abb59f)

Summary:
<Paragraph>The method <b class="vuln-data">setEmailPassword()</b> in <b class="vuln-data">EmailUtils.java</b> mishandles confidential information, which can compromise user privacy and is often illegal.<AltParagraph>Mishandling private information, such as customer passwords or social security numbers, can compromise user privacy and is often illegal. </AltParagraph></Paragraph>
* Critical (Static) - Path Manipulation:    
[src/main/java/com/microfocus/example/service/FileSystemStorageService.java:54](https://ams.fortify.com/redirect/Issues/04381671-9466-42ea-a055-dd0c66f8dfe9)

Summary:
<Paragraph>Attackers can control the file system path argument to <b class="vuln-data">get()</b> at <b class="vuln-data">FileSystemStorageService.java</b> line <b class="vuln-data">54</b>, which allows them to access or modify otherwise protected files.<AltParagraph>Allowing user input to control paths used in file system operations could enable an attacker to access or modify otherwise protected system resources.</AltParagraph></Paragraph>
* Critical (Static) - Open Redirect:    
[src/main/java/com/microfocus/example/web/controllers/DefaultController.java:218](https://ams.fortify.com/redirect/Issues/39383793-1628-4293-9bb5-e13f2c99cef1)

Summary:
<Paragraph>The file <b class="vuln-data">DefaultController.java</b> passes unvalidated data to an HTTP redirect function on line <b class="vuln-data">218</b>. Allowing unvalidated input to control the URL used in a redirect can aid phishing attacks.<AltParagraph>Allowing unvalidated input to control the URL used in a redirect can aid phishing attacks.</AltParagraph></Paragraph>
* Critical (Static) - Path Manipulation:    
[src/main/java/com/microfocus/example/service/FileSystemStorageService.java:143](https://ams.fortify.com/redirect/Issues/89a9f1e7-65ae-4c41-b839-f945c969263b)

Summary:
<Paragraph>Attackers can control the file system path argument to <b class="vuln-data">resolve()</b> at <b class="vuln-data">FileSystemStorageService.java</b> line <b class="vuln-data">143</b>, which allows them to access or modify otherwise protected files.<AltParagraph>Allowing user input to control paths used in file system operations could enable an attacker to access or modify otherwise protected system resources.</AltParagraph></Paragraph>
* Critical (Static) - Path Manipulation:    
[src/main/java/com/microfocus/example/service/FileSystemStorageService.java:159](https://ams.fortify.com/redirect/Issues/b2f35e79-acbe-4289-bd0f-18718dd07492)

Summary:
<Paragraph>Attackers can control the file system path argument to <b class="vuln-data">get()</b> at <b class="vuln-data">FileSystemStorageService.java</b> line <b class="vuln-data">159</b>, which allows them to access or modify otherwise protected files.<AltParagraph>Allowing user input to control paths used in file system operations could enable an attacker to access or modify otherwise protected system resources.</AltParagraph></Paragraph>
* Critical (Static) - Path Manipulation:    
[src/main/java/com/microfocus/example/web/controllers/ProductController.java:146](https://ams.fortify.com/redirect/Issues/ac5bd3a3-2b61-4eef-8c89-b6e1a5c13b51)

Summary:
<Paragraph>Attackers can control the file system path argument to <b class="vuln-data">get()</b> at <b class="vuln-data">ProductController.java</b> line <b class="vuln-data">146</b>, which allows them to access or modify otherwise protected files.<AltParagraph>Allowing user input to control paths used in file system operations could enable an attacker to access or modify otherwise protected system resources.</AltParagraph></Paragraph>
* Critical (Static) - Insecure SSL: Server Identity Verification Disabled:    
[src/main/java/com/microfocus/example/utils/EmailUtils.java:101](https://ams.fortify.com/redirect/Issues/3498efe8-6e3c-4ed0-a4de-1f5e837cf6bc)

Summary:
<Paragraph>The connection established via <b class="vuln-data">send()</b> in <b class="vuln-data">EmailUtils.java</b> does not verify the server certificate when making an SSL connection. This leaves the application vulnerable to a man-in-the-middle attack.<AltParagraph>Server identity verification is disabled when making SSL connections.</AltParagraph></Paragraph>
* Critical (Static) - Path Manipulation:    
[src/main/java/com/microfocus/example/service/FileSystemStorageService.java:159](https://ams.fortify.com/redirect/Issues/b0956b4d-c32a-4858-8fbe-f0c33d1ea794)

Summary:
<Paragraph>Attackers can control the file system path argument to <b class="vuln-data">get()</b> at <b class="vuln-data">FileSystemStorageService.java</b> line <b class="vuln-data">159</b>, which allows them to access or modify otherwise protected files.<AltParagraph>Allowing user input to control paths used in file system operations could enable an attacker to access or modify otherwise protected system resources.</AltParagraph></Paragraph>
* Critical (Static) - Weak Encryption: Insecure Mode of Operation:    
[src/main/java/com/microfocus/example/utils/EncryptedPasswordUtils.java:47](https://ams.fortify.com/redirect/Issues/62887132-93ee-4cd1-80c2-dd4a05ca73f4)

Summary:
<Paragraph>The function <b class="vuln-data">encryptPassword()</b> in <b class="vuln-data">EncryptedPasswordUtils.java</b> uses a cryptographic encryption algorithm with an insecure mode of operation on line <b class="vuln-data">47</b>.<AltParagraph>Do not use cryptographic encryption algorithms with an insecure mode of operation.</AltParagraph></Paragraph>
* Critical (Static) - Weak Encryption:    
[src/main/java/com/microfocus/example/utils/EncryptedPasswordUtils.java:42](https://ams.fortify.com/redirect/Issues/1cfd669f-c0ba-4919-9365-946c62abc93d)

Summary:
<Paragraph>The call to <b class="vuln-data">SecretKeySpec()</b> at <b class="vuln-data">EncryptedPasswordUtils.java</b> line <b class="vuln-data">42</b> uses a weak encryption algorithm that cannot guarantee the confidentiality of sensitive data.<AltParagraph>The identified call uses a weak encryption algorithm that cannot guarantee the confidentiality of sensitive data.</AltParagraph></Paragraph>
* Critical (Static) - Path Manipulation:    
[src/main/java/com/microfocus/example/service/FileSystemStorageService.java:159](https://ams.fortify.com/redirect/Issues/e4cd6456-7450-4728-8373-d8e4f216f1a3)

Summary:
<Paragraph>Attackers can control the file system path argument to <b class="vuln-data">get()</b> at <b class="vuln-data">FileSystemStorageService.java</b> line <b class="vuln-data">159</b>, which allows them to access or modify otherwise protected files.<AltParagraph>Allowing user input to control paths used in file system operations could enable an attacker to access or modify otherwise protected system resources.</AltParagraph></Paragraph>
* Critical (Static) - Weak Encryption:    
[src/main/java/com/microfocus/example/utils/EncryptedPasswordUtils.java:61](https://ams.fortify.com/redirect/Issues/0da4b4e6-3da6-45cc-b822-a2c97f79b707)

Summary:
<Paragraph>The call to <b class="vuln-data">getInstance()</b> at <b class="vuln-data">EncryptedPasswordUtils.java</b> line <b class="vuln-data">61</b> uses a weak encryption algorithm that cannot guarantee the confidentiality of sensitive data.<AltParagraph>The identified call uses a weak encryption algorithm that cannot guarantee the confidentiality of sensitive data.</AltParagraph></Paragraph>
* Critical (Static) - SQL Injection:    
[src/main/java/com/microfocus/example/repository/ProductRepository.java:95](https://ams.fortify.com/redirect/Issues/da592c2d-04a5-48b6-b3b1-dcefb412b382)

Summary:
<Paragraph>On line <b class="vuln-data">95</b> of <b class="vuln-data">ProductRepository.java</b>, the method <b class="vuln-data">findByCode()</b> invokes a SQL query built with input that comes from an untrusted source. This call could allow an attacker to modify the statement's meaning or to execute arbitrary SQL commands.<AltParagraph>Constructing a dynamic SQL statement with input from an untrusted source might allow an attacker to modify the statement's meaning or execute arbitrary SQL commands. </AltParagraph></Paragraph>
* Critical (Static) - Cross-Site Scripting: Reflected:    
[src/main/java/com/microfocus/example/web/controllers/ProductController.java:97](https://ams.fortify.com/redirect/Issues/68a01143-bcb9-4f9c-ba06-4ca104c6617b)

Summary:
<Paragraph>The method <b class="vuln-data">getKeywordsContent()</b> in <b class="vuln-data">ProductController.java</b> sends unvalidated data to a web browser on line <b class="vuln-data">97</b>, which can result in the browser executing malicious code.<AltParagraph>Sending unvalidated data to a web browser can result in the browser executing malicious code.</AltParagraph></Paragraph>
* High (Static) - Header Manipulation:    
[src/main/java/com/microfocus/example/web/controllers/UserController.java:793](https://ams.fortify.com/redirect/Issues/b7a2bbe5-6b9a-49be-8c27-621974c452b5)

Summary:
<Paragraph>The method <b class="vuln-data">serveFile()</b> in <b class="vuln-data">UserController.java</b> includes unvalidated data in an HTTP response header on line <b class="vuln-data">793</b>. This enables attacks such as cache-poisoning, cross-site scripting, cross-user defacement, page hijacking, cookie manipulation or open redirect.<AltParagraph>Including unvalidated data in an HTTP response header can enable cache-poisoning, cross-site scripting, cross-user defacement, page hijacking, cookie manipulation or open redirect.</AltParagraph></Paragraph>
* High (Static) - System Information Leak: External:    
[src/main/java/com/microfocus/example/config/handlers/BasicAuthenticationEntryPointCustom.java:68](https://ams.fortify.com/redirect/Issues/268ae3fc-699f-4bcd-a078-3fc428f68803)

Summary:
<Paragraph>The function <b class="vuln-data">commence()</b> in <b class="vuln-data">BasicAuthenticationEntryPointCustom.java</b> reveals system data or debug information by calling <b class="vuln-data">println()</b> on line <b class="vuln-data">68</b>. The information revealed by <b class="vuln-data">println()</b> could help an adversary form a plan of attack.<AltParagraph>Revealing system data or debugging information helps an adversary learn about the system and form a plan of attack.</AltParagraph></Paragraph>
* High (Static) - Password Management: Hardcoded Password:    
[src/main/resources/application.yml:41](https://ams.fortify.com/redirect/Issues/f04c697d-0258-4e72-af46-7e8a01db5748)

Summary:
Hardcoded passwords can compromise system security in a way that is difficult to remedy.
* High (Static) - Race Condition: Singleton Member Field:    
[src/main/java/com/microfocus/example/web/controllers/admin/AdminDefaultController.java:165](https://ams.fortify.com/redirect/Issues/89161c0d-4c36-4f6c-a492-acb17cce7486)

Summary:
<Paragraph>The class <b class="vuln-data">AdminDefaultController</b> is a singleton, so the member field <b class="vuln-data">thRCECMD</b> is shared between users. The result is that one user could see another user's data.<AltParagraph>Servlet member fields might allow one user to see another user's data.</AltParagraph></Paragraph>
* High (Static) - Unreleased Resource: Streams:    
[src/main/java/com/microfocus/example/utils/UserUtils.java:161](https://ams.fortify.com/redirect/Issues/26c5458d-3aed-4ea7-94f9-2a8b232bd97a)

Summary:
<Paragraph>The function <b class="vuln-data">deserializeUser()</b> in <b class="vuln-data">UserUtils.java</b> sometimes fails to release a system resource allocated by <b class="vuln-data">FileInputStream()</b> on line <b class="vuln-data">160</b>.<AltParagraph>The program can potentially fail to release a system resource.</AltParagraph></Paragraph>
* High (Static) - Unreleased Resource: Streams:    
[src/main/java/com/microfocus/example/utils/UserUtils.java:153](https://ams.fortify.com/redirect/Issues/f1fc0028-2805-41ec-ac6c-65b35e072eae)

Summary:
<Paragraph>The function <b class="vuln-data">serializeUser()</b> in <b class="vuln-data">UserUtils.java</b> sometimes fails to release a system resource allocated by <b class="vuln-data">FileOutputStream()</b> on line <b class="vuln-data">152</b>.<AltParagraph>The program can potentially fail to release a system resource.</AltParagraph></Paragraph>
* High (Static) - Mass Assignment: Sensitive Field Exposure:    
[src/main/java/com/microfocus/example/entity/User.java:192](https://ams.fortify.com/redirect/Issues/6549a45c-2558-4736-9e40-b2f85d26f998)

Summary:
<Paragraph>A sensitive field defined in <b class="vuln-data">User.java</b> on line <b class="vuln-data">192</b> is exposed to the model binder.<AltParagraph>A sensitive field is exposed to the model binder.</AltParagraph></Paragraph>
* High (Static) - Password Management: Hardcoded Password:    
[src/main/resources/application-test.yml:67](https://ams.fortify.com/redirect/Issues/58fc1cc5-a5ef-4c06-8a6f-2d4671819185)

Summary:
Hardcoded passwords can compromise system security in a way that is difficult to remedy.
* High (Static) - Header Manipulation:    
[src/main/java/com/microfocus/example/web/controllers/UserController.java:947](https://ams.fortify.com/redirect/Issues/ca0157bc-9527-4bf2-951e-1c5963bb84db)

Summary:
<Paragraph>The method <b class="vuln-data">serveUnverifiedFile()</b> in <b class="vuln-data">UserController.java</b> includes unvalidated data in an HTTP response header on line <b class="vuln-data">947</b>. This enables attacks such as cache-poisoning, cross-site scripting, cross-user defacement, page hijacking, cookie manipulation or open redirect.<AltParagraph>Including unvalidated data in an HTTP response header can enable cache-poisoning, cross-site scripting, cross-user defacement, page hijacking, cookie manipulation or open redirect.</AltParagraph></Paragraph>
* High (Static) - Unreleased Resource: Streams:    
[src/main/java/com/microfocus/example/utils/UserUtils.java:82](https://ams.fortify.com/redirect/Issues/d0a80a91-27ae-4603-9da6-0154aefb3646)

Summary:
<Paragraph>The function <b class="vuln-data">registerUser()</b> in <b class="vuln-data">UserUtils.java</b> sometimes fails to release a system resource allocated by <b class="vuln-data">FileReader()</b> on line <b class="vuln-data">82</b>.<AltParagraph>The program can potentially fail to release a system resource.</AltParagraph></Paragraph>
* High (Static) - Header Manipulation:    
[src/main/java/com/microfocus/example/web/controllers/ProductController.java:179](https://ams.fortify.com/redirect/Issues/14a4c9d6-017c-4ee9-a62a-9889c304bf0c)

Summary:
<Paragraph>The method <b class="vuln-data">downloadFile()</b> in <b class="vuln-data">ProductController.java</b> includes unvalidated data in an HTTP response header on line <b class="vuln-data">179</b>. This enables attacks such as cache-poisoning, cross-site scripting, cross-user defacement, page hijacking, cookie manipulation or open redirect.<AltParagraph>Including unvalidated data in an HTTP response header can enable cache-poisoning, cross-site scripting, cross-user defacement, page hijacking, cookie manipulation or open redirect.</AltParagraph></Paragraph>
* High (Static) - System Information Leak: External:    
[src/main/java/com/microfocus/example/config/handlers/AuthenticationEntryPointJwt.java:69](https://ams.fortify.com/redirect/Issues/7578f015-7cdb-4ecf-a3d2-d8e29b5ea40b)

Summary:
<Paragraph>The function <b class="vuln-data">commence()</b> in <b class="vuln-data">AuthenticationEntryPointJwt.java</b> reveals system data or debug information by calling <b class="vuln-data">println()</b> on line <b class="vuln-data">69</b>. The information revealed by <b class="vuln-data">println()</b> could help an adversary form a plan of attack.<AltParagraph>Revealing system data or debugging information helps an adversary learn about the system and form a plan of attack.</AltParagraph></Paragraph>
* High (Static) - Dockerfile Misconfiguration: Default User Privilege:    
[Dockerfile:1](https://ams.fortify.com/redirect/Issues/c628483e-3bf8-48c0-ba2b-e533621bc560)

Summary:
The Dockerfile does not specify a USER, so it defaults to running with a root user.
* High (Static) - Header Manipulation:    
[src/main/java/com/microfocus/example/web/controllers/UserController.java:865](https://ams.fortify.com/redirect/Issues/6fc8caa0-c87d-49cb-b104-2cb0a453dd8f)

Summary:
<Paragraph>The method <b class="vuln-data">serveXMLFile()</b> in <b class="vuln-data">UserController.java</b> includes unvalidated data in an HTTP response header on line <b class="vuln-data">865</b>. This enables attacks such as cache-poisoning, cross-site scripting, cross-user defacement, page hijacking, cookie manipulation or open redirect.<AltParagraph>Including unvalidated data in an HTTP response header can enable cache-poisoning, cross-site scripting, cross-user defacement, page hijacking, cookie manipulation or open redirect.</AltParagraph></Paragraph>
* High (Static) - System Information Leak: External:    
[src/main/java/com/microfocus/example/config/handlers/ApiAccessDeniedHandler.java:66](https://ams.fortify.com/redirect/Issues/ee03bee4-0445-4a2d-be7d-d1da93707481)

Summary:
<Paragraph>The function <b class="vuln-data">handle()</b> in <b class="vuln-data">ApiAccessDeniedHandler.java</b> reveals system data or debug information by calling <b class="vuln-data">println()</b> on line <b class="vuln-data">66</b>. The information revealed by <b class="vuln-data">println()</b> could help an adversary form a plan of attack.<AltParagraph>Revealing system data or debugging information helps an adversary learn about the system and form a plan of attack.</AltParagraph></Paragraph>

### New Issues

* Critical (Dynamic) - Insecure Deployment: HTTP Request Smuggling:    
[https://iwa.onfortify.com:443/swagger-ui/328496index.html?url=@%7B/v3/api-docs%7D](https://ams.fortify.com/redirect/Issues/c3ca5880-f48d-4511-8a95-f7d46e1b07fe)

Summary:
<br />
WebInspect has detected the application to be vulnerable to an HTTP Request Smuggling attack.  <br /><br />
HTTP Request Smuggling vulnerabilities arise due to the discrepancy in parsing of non-compliant HTTP headers by the front-end and back-end servers. By supplying a request that is interpreted as being of different lengths by different servers, an attacker can poison the back-end TCP/TLS socket and prepend arbitrary data to the next request or smuggle additional requests to the back-end server without the front-end server being aware of it. <br /><br />
There are numerous ways in which a malicious user can accomplish an HTTP Request Smuggling attack. In this instance, an incoming HTTP request that contains both Content-Length and Transfer-Encoding headers is interpreted differently by the front-end server and the back-end server. One honors the Content-Length header and the other the Transfer-Encoding header to determine the length of the request. This can render the application vulnerable to smuggling attacks.<br /><br />The attack vector used indicates that the front-end server honors the Content-Length header and the back-end server honors the Transfer-Encoding header.<br /><br />

WebInspect was able to confirm this vulnerability. WebInspect performed the attack by sending two requests on the same TCP/IP connection with the server. The first request with HTTP headers <pre><code>
Content-Length: 36<br />Transfer-Encoding: chunked
</code></pre> and request body <pre><code>0

POST /mal formed ZZZZ/9.7
Q: W</code></pre> was crafted so that the server put part of the request body in a queue. This was prepended to the subsequent HTTP request and caused an error on the server.
* Critical (Dynamic) - Cross-Site Scripting: Reflected:    
[https://iwa.onfortify.com:443/products?keywords=12345%3c%73%43%72%49%70%54%3e%61%6c%65%72%74%28%34%35%33%32%38%29%3c%2f%73%43%72%49%70%54%3e](https://ams.fortify.com/redirect/Issues/4501fd05-700f-4ee8-ae76-174e65a07707)

Summary:
<hp-img src="xss.rgc" /><br />Cross-Site Scripting vulnerability found in Get parameter keywords.  The following attack uses plain encoding:<br><br>&lt;sCrIpT&gt;&lt;/sCrIpT&gt;<br><br/><br/>A Cross-Site Scripting (XSS) vulnerability was detected in the web application. Cross-Site Scripting occurs when dynamically generated web pages display user input, such as login information, that is not properly validated, allowing an attacker to embed malicious scripts into the generated page and then execute the script on the machine of any user that views the site. In this instance, the web application was vulnerable to an automatic payload, meaning the user simply has to visit a page to make the malicious scripts execute. If successful, Cross-Site Scripting vulnerabilities can be exploited to manipulate or steal cookies, create requests that can be mistaken for those of a valid user, compromise confidential information, or execute malicious code on end user systems. Recommendations include implementing secure programming techniques that ensure proper filtration of user-supplied data, and encoding all user supplied data to prevent inserted scripts being sent to end users in a format that can be executed.
* High (Dynamic) - Cross-Frame Scripting:    
[https://iwa.onfortify.com:443/login](https://ams.fortify.com/redirect/Issues/102b725e-9ab8-4fa5-9edb-3bcac0b9a783)

Summary:
<br />A Cross-Frame Scripting (XFS) vulnerability can allow an attacker to load the vulnerable application inside an HTML iframe tag on a malicious page. The attacker could use this weakness to devise a Clickjacking attack to conduct phishing, frame sniffing, social engineering or Cross-Site Request Forgery attacks.
<br /><br /><b>Clickjacking</b><br />
The goal of a Clickjacking attack is to deceive the victim (user) into interacting with UI elements of the attacker’s choice on the target web site without their knowledge and then executing privileged functionality on the victim’s behalf. To achieve this goal, the attacker must exploit the XFS vulnerability to load the attack target inside an iframe tag, hide it using Cascading Style Sheets (CSS) and overlay the phishing content on the malicious page. By placing the UI elements on the phishing page so they overlap with those on the page targeted in the attack, the attacker can ensure that the victim must interact with the UI elements on the target page not visible to the victim.<br /><br />
WebInspect has detected a page which potentially handles sensitive information using an HTML form with a password input field and is missing XFS protection. <br /><i><br/>An effective frame-busting technique was not observed while loading this page inside a frame.<br/>This response while protected by a valid X-Frame-Options does not contain a valid Content-Security-Policy(CSP) frame-ancestors directive. Consider adding CSP as it now replaces X-Frame-Options and is supported in most modern browswers.</i>
* High (Dynamic) - Web Server Misconfiguration: Unprotected File:    
[https://iwa.onfortify.com:443/swagger-ui/index.html.gz](https://ams.fortify.com/redirect/Issues/a6674965-82bf-45f1-aa79-a7263c5c72fe)

Summary:
Webinspect has detected an archive file with the .gz extension on the target server. The severity of the threats posed by the web-accessible backup files depends on the sensitivity of the information stored in original document. Based on that information, an attacker can gain sensitive information about the site architecture, database and network access credential details, encryption keys, and so forth from these files. The attacker can use information obtained to craft precise targeted attacks, which may not otherwise be feasible, against the application. 
* Medium (Dynamic) - Cookie Security: Cookie not Sent Over SSL:    
[https://iwa.onfortify.com:443/](https://ams.fortify.com/redirect/Issues/1d5de2bc-91e5-41b6-a5d3-68b2164fe958)

Summary:
This policy states that any area of the website or web application that contains sensitive information or access to privileged functionality such as remote site administration requires that all cookies are sent via SSL during an SSL session.  The URL: https://iwa.onfortify.com:443/ has failed this policy.  If a cookie is marked with the "secure" attribute, it will only be transmitted if the communications channel with the host is a secure one. Currently this means that secure cookies will only be sent to HTTPS (HTTP over SSL) servers.  If secure is not specified, a cookie is considered safe to be sent in the clear over unsecured channels.

<br />
* Medium (Dynamic) - Cross-Frame Scripting:    
[https://iwa.onfortify.com:443/](https://ams.fortify.com/redirect/Issues/76902059-1ace-4d09-9d94-2c5b5e8ea7b1)

Summary:
<br />A Cross-Frame Scripting (XFS) vulnerability can allow an attacker to load the vulnerable application inside an HTML iframe tag on a malicious page. The attacker could use this weakness to devise a Clickjacking attack to conduct phishing, frame sniffing, social engineering or Cross-Site Request Forgery attacks.
<br /><br /><b>Clickjacking</b><br />
The goal of a Clickjacking attack is to deceive the victim (user) into interacting with UI elements of the attacker’s choice on the target web site without their knowledge and then executing privileged functionality on the victim’s behalf. To achieve this goal, the attacker must exploit the XFS vulnerability to load the attack target inside an iframe tag, hide it using Cascading Style Sheets (CSS) and overlay the phishing content on the malicious page. By placing the UI elements on the phishing page so they overlap with those on the page targeted in the attack, the attacker can ensure that the victim must interact with the UI elements on the target page not visible to the victim.<br /><br />
WebInspect has detected a response containing one or more forms that accept user input but is missing XFS protection.<br /><i><br/>An effective frame-busting technique was not observed while loading this page inside a frame.<br/>This response while protected by a valid X-Frame-Options does not contain a valid Content-Security-Policy(CSP) frame-ancestors directive. Consider adding CSP as it now replaces X-Frame-Options and is supported in most modern browswers.</i>
* Low (Dynamic) - Web Server Misconfiguration: Unprotected Directory:    
[https://iwa.onfortify.com:443/_derived/](https://ams.fortify.com/redirect/Issues/7e1e495e-91ef-43ba-9ca1-e1231e8ede95)

Summary:
FrontPage-related directories were found during a Directory Enumeration scan.  FrontPage allows remote users to upload and modify web site content.  Historically, attackers seek out FrontPage sites since FrontPage is often misconfigured to not require authentication.  FrontPage components have also contained multiple vulnerabilities in the past.  Recommendations include reviewing the FrontPage configuration, and removing FrontPage if it is not being used.
* Low (Dynamic) - Web Server Misconfiguration: Unprotected Directory:    
[https://iwa.onfortify.com:443/_fpclass/](https://ams.fortify.com/redirect/Issues/22df192f-a5a7-4f8a-a67a-59e959b2cc28)

Summary:
FrontPage-related directories were found during a Directory Enumeration scan.  FrontPage allows remote users to upload and modify web site content.  Historically, attackers seek out FrontPage sites since FrontPage is often misconfigured to not require authentication.  FrontPage components have also contained multiple vulnerabilities in the past.  Recommendations include reviewing the FrontPage configuration, and removing FrontPage if it is not being used.
* Low (Dynamic) - Web Server Misconfiguration: Unprotected Directory:    
[https://iwa.onfortify.com:443/products/](https://ams.fortify.com/redirect/Issues/20751df9-dc95-44f6-8d5a-3c853c671fce)

Summary:
Directory Enumeration vulnerabilities were discovered within your web application. Risks associated with an attacker discovering a directory on your application server depend upon what type of directory is discovered, and what types of files are contained within it.  The primary threat, other than accessing files containing sensitive information, is that an attacker can utilize the information discovered in that directory to perform other types of attacks.  Recommendations include restricting access to important directories or files by adopting a "need to know" requirement for both the document and server root, and turning off features such as Automatic Directory Listings that provide information that could be utilized by an attacker when formulating or conducting an attack. 
* Low (Dynamic) - Web Server Misconfiguration: Unprotected Directory:    
[https://iwa.onfortify.com:443/services/](https://ams.fortify.com/redirect/Issues/b52434c1-e376-4807-80bc-ec1d3b25e38d)

Summary:
Directory Enumeration vulnerabilities were discovered within your web application. Risks associated with an attacker discovering a directory on your application server depend upon what type of directory is discovered, and what types of files are contained within it.  The primary threat, other than accessing files containing sensitive information, is that an attacker can utilize the information discovered in that directory to perform other types of attacks.  Recommendations include restricting access to important directories or files by adopting a "need to know" requirement for both the document and server root, and turning off features such as Automatic Directory Listings that provide information that could be utilized by an attacker when formulating or conducting an attack. 
* Low (Dynamic) - Insecure Transport: HSTS not Set:    
[https://iwa.onfortify.com:443/js/app.js](https://ams.fortify.com/redirect/Issues/57d3819c-cbd6-4234-bb6a-ac8a923eee96)

Summary:
<br />Http Strict Transport Security  (HSTS) policy enables web applications to enforce web browsers to restrict communication with the server over an encrypted SSL/TLS connection for a set period. Policy is declared via special Strict Transport Security response header. Encrypted connection protects sensitive user and session data from attackers eavesdropping on network connection. 
<br /> 
Consider following attack scenarios:
<br /><ul><li>Users often omit the URI scheme i.e. https:// when typing a URL in location bar to access a website. Also third party websites can link to the site using the “http” scheme instead of "”https”. This could result in an initial connection to a HTTPS-enabled site over an unencrypted channel. An eavesdropping attacker can hijack this unencrypted connection and replace the intended use of HTTPS protocol with HTTP in an attack known as SSLStrip, granting unauthorized access to all subsequent traffic. </li><li>Websites often transfer non-sensitive resources such as help documents over an unencrypted HTTP connection. Any cookies without a secure flag are sent along with such requests potentially disclosing sensitive user and session data to eavesdropper.</li><li>Man-in-the-Middle attacks that exploit user tendencies to override invalid certification warnings, e.g. SSLSniff. </li></ul><br />
For web sites configured with an accurate HSTS policy, browsers automatically upgrade any HTTP connections to HTTPS. Furthermore, browsers prevent users from overriding any host certificate warnings. HSTS offers an effective defense against above attack scenarios.
* Low (Dynamic) - Cookie Security: Missing SameSite Attribute:    
[https://iwa.onfortify.com:443/](https://ams.fortify.com/redirect/Issues/5d69784a-0e48-4271-b451-6caeb5cf2dd6)

Summary:
The SameSite attribute protects cookies from Cross-Site  Request Forgery (CSRF) attacks. The browser automatically appends cookies to every HTTP request made to the site that sets the cookie.  Cookies might store sensitive data like session ID and authorization token or site data that is shared between different requests to the same site during a session. An attacker can perform an impersonation attack by generating a request to the authenticated site from a third-party site page loaded on the client machine because the browser automatically appended the cookie to the request.  <br />

The SameSite attribute on a cookie allows sites to control that behaviour and prevents browsers from appending the cookie to request if the request is generated from a third-party site page load. The SameSite attribute can have the following three values: 
<ul><li>Strict: When set to Strict, cookies are only sent along with requests upon top level navigation .</li><li>Lax: When set to Lax, cookies are sent with top level navigation from the same host as well as GET requests originated to the host from third-party sites  (for example, in iframe, link, href, and so on and the form tag with GET method only).</li><li>None: Cookies are sent in all requests made to the site within the path and domain scope set for the cookie. Requests generated due to form submissions using the POST method are also allowed to send cookies with request.</li></ul>

Please note that cookies that have the SameSite attribute with the value of None must be set with the Secure attribute otherwise the browser rejects the cookies. Additionally, a few specific browser versions reject the SameSite cookie with the None value for example, Chrome versions 51 to 66, versions of the UC Browser on Android prior to version 12.13.2, versions of Safari and embedded browsers on macOS 10.14, and all browsers on iOS 12 reject cookies set with SameSite=None. A suggested workaround for this issue is to set an alternate cookie with a prefix or suffix such as <i>Legacy</i> appended to cookiename .  Sites can look for this legacy cookie if it does not find a cookie that was set with SameSite=None.
* Low (Dynamic) - HTML5: Overly Permissive CORS Policy:    
[https://iwa.onfortify.com:443/api/v3/site/subscribe-user](https://ams.fortify.com/redirect/Issues/68a6a4d3-c964-4957-9fd8-1742216844f6)

Summary:
A resource on the target website has been found to be shared across websites using CORS with an open access control policy.  <br /><br />
Cross-Origin Resource Sharing, commonly referred to as CORS, is a technology that allows a domain to define a policy for its resources to be accessed by a web page hosted on a different domain using cross domain XML HTTP Requests (XHR). Historically, the browser restricts cross domain XHR requests to abide by the same origin policy.  At its basic form, the same origin policy sets the script execution scope to the resources available on the current domain and prohibits any communication to domains outside this scope.   While CORS is supported on all major browsers, it also requires that the domain correctly defines the CORS policy in order to have its resources shared with another domain. These restrictions are managed by access policies typically included in specialized response headers, such as:
<ul><li>Access-Control-Allow-Origin</li><li>Access-Control-Allow-Headers</li><li>Access-Control-Allow-Methods</li></ul>
A domain includes a list of domains that are allowed to make cross domain requests to shared resources in Access-Control-Allow-Origin header. This header can have either list of domains or a wildcard character (“*”) to allow all access. Having a wildcard is considered overly permissive policy.
* Low (Dynamic) - HTML5: CORS Unsafe Methods Allowed:    
[https://iwa.onfortify.com:443/api/v3/site/subscribe-user](https://ams.fortify.com/redirect/Issues/82cf7e70-8584-4f63-aa7d-58df183f7f0e)

Summary:
A   resource on the target domain has been found to be shared using CORS. The Access-Control-Allow-Methods header, as reflected in the preflight response for the requested resource, indicates that it allows unsafe HTTP methods. An attacker can use HTTP methods such as PUT or DELETE to make unexpected modifications to shared resource and pose a security threat to the overall site security. A user agent rejects any request for this resource with an HTTP method other than the ones that are listed in the Access-Control-Allow-Methods response header.
<br /><br />

Cross-Origin Resource Sharing, commonly referred to as CORS, is a technology that allows a domain to define a policy for its resources to be accessed by a web page hosted on a different domain using cross domain XML HTTP Requests (XHR). Historically, the browser restricts cross domain XHR requests to abide by the same origin policy. At its basic form, the same origin policy sets the script execution scope to the resources available on the current domain and prohibits any communication to domains outside this scope. Therefore, execution and incorporation of remote methods and functions hosted on domains outside of the current domain are effectively prohibited. While CORS is supported on all major browsers, it also requires that the domain correctly defines the CORS policy in order to have its resources shared with another domain. These restrictions are managed by access policies typically included in specialized response headers, such as:  <br /><br /><ul><li>Access-Control-Allow-Origin</li><li>Access-Control-Allow-Headers</li><li>Access-Control-Allow-Methods</li></ul>
* Low (Dynamic) - Web Server Misconfiguration: Server Error Message:    
[https://iwa.onfortify.com:443/products?keywords='](https://ams.fortify.com/redirect/Issues/9871fd29-841f-4612-9c84-8b0d3f485c02)

Summary:
A server error response was detected.  The server could be experiencing errors due to a misbehaving application, a misconfiguration, or a malicious value sent during the auditing process.  While error responses in and of themselves are not dangerous, per se, the error responses give attackers insight into how the application handles error conditions.  Errors that can be remotely triggered by an attacker can also potentially lead to a denial of service attack or other more severe vulnerability. Recommendations include designing and adding consistent error handling mechanisms which are capable of handling any user input to your web application, providing meaningful  detail to end-users, and preventing error messages that might provide information useful to an attacker from being  displayed.
* Low (Dynamic) - Cache Management: Web Cache Poisoning:    
[https://iwa.onfortify.com:443/api/v3/products?limit=&cacheBuster=WEBINSPECT1278776097](https://ams.fortify.com/redirect/Issues/17cfde40-beb5-44ea-8235-0e8d029a1e06)

Summary:
<br />WebInspect has detected a web cache poisoning instance by fat GET requests. Fat GET requests are requests that contain parameters as request body. Web cache poisoning exploits the behaviour of the web server causing a malicious response to be served to legitimate requests. 
In this type of web cache poisoning, the cache key is derived from the original query parameters passed in the request line. However, the value of the query parameter used by the server is the duplicate value sent as part of the request body. This altered response is cached and served to the users with legitimate requests. 

<br /><br/>WebInspect has detected that the cache can be poisoned. The <b>limit</b> was passed in the request body and it is observed that the initial response differed from the later response for the same query. This indicates that the cache might be poisoned. 
* Low (Dynamic) - HTML5: Overly Permissive CORS Policy:    
[https://iwa.onfortify.com:443/api/v3/products?limit=](https://ams.fortify.com/redirect/Issues/d392730e-dfaa-4604-bb20-ed0ba681380d)

Summary:
A resource on the target website has been found to be shared across websites using CORS with an open access control policy.  <br /><br />
Cross-Origin Resource Sharing, commonly referred to as CORS, is a technology that allows a domain to define a policy for its resources to be accessed by a web page hosted on a different domain using cross domain XML HTTP Requests (XHR). Historically, the browser restricts cross domain XHR requests to abide by the same origin policy.  At its basic form, the same origin policy sets the script execution scope to the resources available on the current domain and prohibits any communication to domains outside this scope.   While CORS is supported on all major browsers, it also requires that the domain correctly defines the CORS policy in order to have its resources shared with another domain. These restrictions are managed by access policies typically included in specialized response headers, such as:
<ul><li>Access-Control-Allow-Origin</li><li>Access-Control-Allow-Headers</li><li>Access-Control-Allow-Methods</li></ul>
A domain includes a list of domains that are allowed to make cross domain requests to shared resources in Access-Control-Allow-Origin header. This header can have either list of domains or a wildcard character (“*”) to allow all access. Having a wildcard is considered overly permissive policy.
* Low (Dynamic) - HTML5: CORS Unsafe Methods Allowed:    
[https://iwa.onfortify.com:443/api/v3/products?limit=](https://ams.fortify.com/redirect/Issues/e1a99d9b-a23d-4951-b875-139dad5f7835)

Summary:
A   resource on the target domain has been found to be shared using CORS. The Access-Control-Allow-Methods header, as reflected in the preflight response for the requested resource, indicates that it allows unsafe HTTP methods. An attacker can use HTTP methods such as PUT or DELETE to make unexpected modifications to shared resource and pose a security threat to the overall site security. A user agent rejects any request for this resource with an HTTP method other than the ones that are listed in the Access-Control-Allow-Methods response header.
<br /><br />

Cross-Origin Resource Sharing, commonly referred to as CORS, is a technology that allows a domain to define a policy for its resources to be accessed by a web page hosted on a different domain using cross domain XML HTTP Requests (XHR). Historically, the browser restricts cross domain XHR requests to abide by the same origin policy. At its basic form, the same origin policy sets the script execution scope to the resources available on the current domain and prohibits any communication to domains outside this scope. Therefore, execution and incorporation of remote methods and functions hosted on domains outside of the current domain are effectively prohibited. While CORS is supported on all major browsers, it also requires that the domain correctly defines the CORS policy in order to have its resources shared with another domain. These restrictions are managed by access policies typically included in specialized response headers, such as:  <br /><br /><ul><li>Access-Control-Allow-Origin</li><li>Access-Control-Allow-Headers</li><li>Access-Control-Allow-Methods</li></ul>
* Low (Dynamic) - HTML5: Overly Permissive CORS Policy:    
[https://iwa.onfortify.com:443/api/](https://ams.fortify.com/redirect/Issues/98ff875f-984b-45a9-93d3-1179b5151310)

Summary:
A resource on the target website has been found to be shared across websites using CORS with an open access control policy.  <br /><br />
Cross-Origin Resource Sharing, commonly referred to as CORS, is a technology that allows a domain to define a policy for its resources to be accessed by a web page hosted on a different domain using cross domain XML HTTP Requests (XHR). Historically, the browser restricts cross domain XHR requests to abide by the same origin policy.  At its basic form, the same origin policy sets the script execution scope to the resources available on the current domain and prohibits any communication to domains outside this scope.   While CORS is supported on all major browsers, it also requires that the domain correctly defines the CORS policy in order to have its resources shared with another domain. These restrictions are managed by access policies typically included in specialized response headers, such as:
<ul><li>Access-Control-Allow-Origin</li><li>Access-Control-Allow-Headers</li><li>Access-Control-Allow-Methods</li></ul>
A domain includes a list of domains that are allowed to make cross domain requests to shared resources in Access-Control-Allow-Origin header. This header can have either list of domains or a wildcard character (“*”) to allow all access. Having a wildcard is considered overly permissive policy.
* Low (Dynamic) - HTML5: CORS Unsafe Methods Allowed:    
[https://iwa.onfortify.com:443/api/](https://ams.fortify.com/redirect/Issues/a9a0c660-0c86-49a0-8b35-c7bb2248e1c4)

Summary:
A   resource on the target domain has been found to be shared using CORS. The Access-Control-Allow-Methods header, as reflected in the preflight response for the requested resource, indicates that it allows unsafe HTTP methods. An attacker can use HTTP methods such as PUT or DELETE to make unexpected modifications to shared resource and pose a security threat to the overall site security. A user agent rejects any request for this resource with an HTTP method other than the ones that are listed in the Access-Control-Allow-Methods response header.
<br /><br />

Cross-Origin Resource Sharing, commonly referred to as CORS, is a technology that allows a domain to define a policy for its resources to be accessed by a web page hosted on a different domain using cross domain XML HTTP Requests (XHR). Historically, the browser restricts cross domain XHR requests to abide by the same origin policy. At its basic form, the same origin policy sets the script execution scope to the resources available on the current domain and prohibits any communication to domains outside this scope. Therefore, execution and incorporation of remote methods and functions hosted on domains outside of the current domain are effectively prohibited. While CORS is supported on all major browsers, it also requires that the domain correctly defines the CORS policy in order to have its resources shared with another domain. These restrictions are managed by access policies typically included in specialized response headers, such as:  <br /><br /><ul><li>Access-Control-Allow-Origin</li><li>Access-Control-Allow-Headers</li><li>Access-Control-Allow-Methods</li></ul>
* Low (Dynamic) - Web Server Misconfiguration: Server Error Message:    
[https://iwa.onfortify.com:443/products?keywords=%25%7b(%23attr%5b%27com.opensymphony.xwork2.util.ValueStack.ValueStack%27%5d.context%5b%27com.opensymphony.xwork2.dispatcher.HttpServletResponse%27%5d.getWriter().printf(%27WI_FP%3a%27%2c0).printf(%2780360f89%27%2c1).printf(%27%3aCVE20190230%27%2c2).flush())%7d](https://ams.fortify.com/redirect/Issues/6bfd68f7-91bd-4bf9-9817-f0173a263eaf)

Summary:
A server error response was detected.  The server could be experiencing errors due to a misbehaving application, a misconfiguration, or a malicious value sent during the auditing process.  While error responses in and of themselves are not dangerous, per se, the error responses give attackers insight into how the application handles error conditions.  Errors that can be remotely triggered by an attacker can also potentially lead to a denial of service attack or other more severe vulnerability. Recommendations include designing and adding consistent error handling mechanisms which are capable of handling any user input to your web application, providing meaningful  detail to end-users, and preventing error messages that might provide information useful to an attacker from being  displayed.
* Best Practice (Dynamic) - Privacy Violation: Autocomplete:    
[https://iwa.onfortify.com:443/css/star-rating-theme.min.css](https://ams.fortify.com/redirect/Issues/6491ce90-7211-4a91-a940-c2350416741a)

Summary:
Most recent browsers have features that will save form field content entered by users and then automatically complete form entry the next time the fields are encountered. This feature is enabled by default and could leak sensitive information since it is stored on the hard drive of the user. The risk of this issue is greatly increased if users are accessing the application from a shared environment. Recommendations include setting autocomplete to "off" on all your forms.
* Best Practice (Dynamic) - Privacy Violation: Autocomplete:    
[https://iwa.onfortify.com:443/](https://ams.fortify.com/redirect/Issues/360bd738-5fdc-42ad-b847-5599419eed93)

Summary:
Most recent browsers have features that will save form field content entered by users and then automatically complete form entry the next time the fields are encountered. This feature is enabled by default and could leak sensitive information since it is stored on the hard drive of the user. The risk of this issue is greatly increased if users are accessing the application from a shared environment. Recommendations include setting autocomplete to "off" on all your forms.
* Best Practice (Dynamic) - Web Server Misconfiguration: Insecure Content-Type Setting:    
[https://iwa.onfortify.com:443/api/v3/products?limit=](https://ams.fortify.com/redirect/Issues/d201fa8f-e471-4847-91d4-c29777117dd7)

Summary:
<br />The Content-Type HTTP response header or the HTML meta tag provides a mechanism for the server to specify an appropriate character encoding for the response content to be rendered in the web browser. Proper specification of the character encoding through the charset parameter in the Content-Type field reduces the likelihood of misinterpretation of the characters in the response content and ensure reliable rendering of the web page.
Failure to ensure enforcement of the desired character encoding could result in client-side attacks like Cross-Site Scripting.
* Best Practice (Dynamic) - Privacy Violation: Autocomplete:    
[https://iwa.onfortify.com:443/products](https://ams.fortify.com/redirect/Issues/0e50bc10-6bad-4309-a286-0980904281c7)

Summary:
Most recent browsers have features that will save form field content entered by users and then automatically complete form entry the next time the fields are encountered. This feature is enabled by default and could leak sensitive information since it is stored on the hard drive of the user. The risk of this issue is greatly increased if users are accessing the application from a shared environment. Recommendations include setting autocomplete to "off" on all your forms.
* Best Practice (Dynamic) - Privacy Violation: Autocomplete:    
[https://iwa.onfortify.com:443/prescriptions](https://ams.fortify.com/redirect/Issues/ee815c82-915f-45d5-bb23-b1947b358b41)

Summary:
Most recent browsers have features that will save form field content entered by users and then automatically complete form entry the next time the fields are encountered. This feature is enabled by default and could leak sensitive information since it is stored on the hard drive of the user. The risk of this issue is greatly increased if users are accessing the application from a shared environment. Recommendations include setting autocomplete to "off" on all your forms.
* Best Practice (Dynamic) - Privacy Violation: Autocomplete:    
[https://iwa.onfortify.com:443/services](https://ams.fortify.com/redirect/Issues/a0132ed7-80f9-4b90-83ba-c2dceafd3a5f)

Summary:
Most recent browsers have features that will save form field content entered by users and then automatically complete form entry the next time the fields are encountered. This feature is enabled by default and could leak sensitive information since it is stored on the hard drive of the user. The risk of this issue is greatly increased if users are accessing the application from a shared environment. Recommendations include setting autocomplete to "off" on all your forms.
* Best Practice (Dynamic) - Privacy Violation: Autocomplete:    
[https://iwa.onfortify.com:443/advice](https://ams.fortify.com/redirect/Issues/aa53d6fc-529b-4196-ab15-a6fa15757bcd)

Summary:
Most recent browsers have features that will save form field content entered by users and then automatically complete form entry the next time the fields are encountered. This feature is enabled by default and could leak sensitive information since it is stored on the hard drive of the user. The risk of this issue is greatly increased if users are accessing the application from a shared environment. Recommendations include setting autocomplete to "off" on all your forms.
* Best Practice (Dynamic) - Privacy Violation: Autocomplete:    
[https://iwa.onfortify.com:443/cart](https://ams.fortify.com/redirect/Issues/35b2cd82-fb1f-410e-b106-3e6292b0d80f)

Summary:
Most recent browsers have features that will save form field content entered by users and then automatically complete form entry the next time the fields are encountered. This feature is enabled by default and could leak sensitive information since it is stored on the hard drive of the user. The risk of this issue is greatly increased if users are accessing the application from a shared environment. Recommendations include setting autocomplete to "off" on all your forms.
* Best Practice (Dynamic) - Privacy Violation: Autocomplete:    
[https://iwa.onfortify.com:443/login](https://ams.fortify.com/redirect/Issues/f9355319-b4dd-4220-bf9e-8be77d91ade6)

Summary:
Most recent browsers have features that will save form field content entered by users and then automatically complete form entry the next time the fields are encountered. This feature is enabled by default and could leak sensitive information since it is stored on the hard drive of the user. The risk of this issue is greatly increased if users are accessing the application from a shared environment. Recommendations include setting autocomplete to "off" on all your forms.
* Best Practice (Dynamic) - Privacy Violation: Autocomplete:    
[https://iwa.onfortify.com:443/user/register](https://ams.fortify.com/redirect/Issues/4ccc5d3c-2fac-4c04-970d-cc06af6c96ab)

Summary:
Most recent browsers have features that will save form field content entered by users and then automatically complete form entry the next time the fields are encountered. This feature is enabled by default and could leak sensitive information since it is stored on the hard drive of the user. The risk of this issue is greatly increased if users are accessing the application from a shared environment. Recommendations include setting autocomplete to "off" on all your forms.
* Best Practice (Dynamic) - Privacy Violation: Autocomplete:    
[https://iwa.onfortify.com:443/products/eec467c8-5de9-4c7c-8541-7b31614d31a0](https://ams.fortify.com/redirect/Issues/30b4d2c9-4bb6-45e6-8e5f-5e799430a4db)

Summary:
Most recent browsers have features that will save form field content entered by users and then automatically complete form entry the next time the fields are encountered. This feature is enabled by default and could leak sensitive information since it is stored on the hard drive of the user. The risk of this issue is greatly increased if users are accessing the application from a shared environment. Recommendations include setting autocomplete to "off" on all your forms.
* Best Practice (Dynamic) - Privacy Violation: Autocomplete:    
[https://iwa.onfortify.com:443/products/74b87e87-0d77-422c-baaa-622498a84328](https://ams.fortify.com/redirect/Issues/e5797c1d-f2f5-410f-a9df-6f638c013fb4)

Summary:
Most recent browsers have features that will save form field content entered by users and then automatically complete form entry the next time the fields are encountered. This feature is enabled by default and could leak sensitive information since it is stored on the hard drive of the user. The risk of this issue is greatly increased if users are accessing the application from a shared environment. Recommendations include setting autocomplete to "off" on all your forms.
* Best Practice (Dynamic) - Privacy Violation: Autocomplete:    
[https://iwa.onfortify.com:443/products/6bbbeb10-6709-4163-a790-f691b09d6aca](https://ams.fortify.com/redirect/Issues/934f58fe-bd68-4b2f-96ef-ca29b8619595)

Summary:
Most recent browsers have features that will save form field content entered by users and then automatically complete form entry the next time the fields are encountered. This feature is enabled by default and could leak sensitive information since it is stored on the hard drive of the user. The risk of this issue is greatly increased if users are accessing the application from a shared environment. Recommendations include setting autocomplete to "off" on all your forms.
* Best Practice (Dynamic) - Privacy Violation: Autocomplete:    
[https://iwa.onfortify.com:443/prescriptions/](https://ams.fortify.com/redirect/Issues/d9aa915f-4717-4d82-9238-cf247f9a331b)

Summary:
Most recent browsers have features that will save form field content entered by users and then automatically complete form entry the next time the fields are encountered. This feature is enabled by default and could leak sensitive information since it is stored on the hard drive of the user. The risk of this issue is greatly increased if users are accessing the application from a shared environment. Recommendations include setting autocomplete to "off" on all your forms.
* Best Practice (Dynamic) - Privacy Violation: Autocomplete:    
[https://iwa.onfortify.com:443/products/](https://ams.fortify.com/redirect/Issues/38fc419f-f7e5-4eb1-a776-791c4f71990f)

Summary:
Most recent browsers have features that will save form field content entered by users and then automatically complete form entry the next time the fields are encountered. This feature is enabled by default and could leak sensitive information since it is stored on the hard drive of the user. The risk of this issue is greatly increased if users are accessing the application from a shared environment. Recommendations include setting autocomplete to "off" on all your forms.
* Best Practice (Dynamic) - Privacy Violation: Autocomplete:    
[https://iwa.onfortify.com:443/services/](https://ams.fortify.com/redirect/Issues/2f8d7adc-86af-44f2-8527-6f120627cf21)

Summary:
Most recent browsers have features that will save form field content entered by users and then automatically complete form entry the next time the fields are encountered. This feature is enabled by default and could leak sensitive information since it is stored on the hard drive of the user. The risk of this issue is greatly increased if users are accessing the application from a shared environment. Recommendations include setting autocomplete to "off" on all your forms.
* Best Practice (Dynamic) - Compliance Failure: Missing Privacy Policy:    
[https://iwa.onfortify.com:443/](https://ams.fortify.com/redirect/Issues/294cdec5-aedb-4524-a188-f673d0da206e)

Summary:
A Privacy Policy was not supplied by the web application within the scope of this audit. Many legislative initiatives require that organizations place a publicly accessible document within their web application that defines their information privacy policy.  As a general rule, these information privacy policies must detail what information an organization collects, the purpose for collecting it, potential avenues of disclosure, and any methods of addressing potential grievances.
Various laws governing privacy policies include the Gramm-Leach-Bliley Act, Health Insurance Portability and Accountability Act (HIPAA), the California Online Privacy Protection Act of 2003, European Union's Data Protection Directive and others.  

* Info (Dynamic) - Web Server Misconfiguration: Weak Authentication:    
[https://iwa.onfortify.com:443/api/content/](https://ams.fortify.com/redirect/Issues/d2cf6e12-89cb-454c-9c2b-267d6b4dc7cd)

Summary:
The web server sent a 401 "Authorization Required" status code with a response that did not contain a WWW-Authenticate HTTP header. This means the server is asking for authentication, but the browser is not prompting for authentication because of the missing WWW-Authenticate header. Recommendations include reviewing the web pages to determine if they should be protected via authentication, and correct the web server or application configuration to correct the problem by setting the 401 "Authorization Required" status code or by removing the WWW-Authenticate header.

* Info (Dynamic) - Web Server Misconfiguration: OPTIONS HTTP Method:    
[https://iwa.onfortify.com:443/](https://ams.fortify.com/redirect/Issues/ab0fa1b2-81d9-4194-a82e-0e2c73a065cb)

Summary:
The server supports the OPTIONS HTTP method.  The OPTIONS method is used to determine what other methods the server supports for a given URI/resource.
* Info (Dynamic) - HTML5: Missing Content Security Policy:    
[https://iwa.onfortify.com:443/](https://ams.fortify.com/redirect/Issues/e1616a85-fd71-4364-807d-5e228b27e585)

Summary:
Content Security Policy (CSP) is an HTTP response security header that developers and security architects can leverage to create an allow list of domains from which the site is allowed to load resources. This header provides an in-depth security protection from critical vulnerabilities such as cross-site scripting and clickjacking. Additionally, CSP restricts execution of inline JavaScript, dynamic JavaScript code evaluation from strings, and framing of the site from external domains. While CSP is not a replacement for input validation, it can help to significantly reduce the risk of XSS from unknown weaknesses. The CSP frame-ancestors directive is equivalent to X-Frame-Options and restricts the domain that are allowed to frame the site’s content.
* Info (Dynamic) - Hidden Field:    
[https://iwa.onfortify.com:443/login](https://ams.fortify.com/redirect/Issues/9d521cc6-15c5-4e6e-b776-7cac60dc069a)

Summary:
While preventing display of information on the web page itself, the information submitted via hidden form fields is easily accessible, and could give an attacker valuable information that would prove helpful in escalating his attack methodology. 
Recommendations include not relying on hidden form fields as a security solution for any area of the web application that contains sensitive information or access to privileged functionality such as remote site administration functionality.
* Info (Dynamic) - Hidden Field:    
[https://iwa.onfortify.com:443/user/register](https://ams.fortify.com/redirect/Issues/d9ddd42e-6bfb-408b-9bff-5136fe72e211)

Summary:
While preventing display of information on the web page itself, the information submitted via hidden form fields is easily accessible, and could give an attacker valuable information that would prove helpful in escalating his attack methodology. 
Recommendations include not relying on hidden form fields as a security solution for any area of the web application that contains sensitive information or access to privileged functionality such as remote site administration functionality.
* Info (Dynamic) - HLI: Detected Libraries:    
[https://iwa.onfortify.com:443/prescriptions](https://ams.fortify.com/redirect/Issues/aa8fad55-bfc0-4344-833e-9c1e39655292)

Summary:
<br /> Hacker Level Insights provides developers and security professionals with more context relating to the overall security posture of their application. The <b>Bootstrap</b> version <b>4.5.3</b> was detected to be in use by during this scan. While these findings do not necessarily represent a security vulnerability, it is important to note that attackers commonly perform reconnaissance of their target in an attempt to identify known weaknesses or patterns. Knowing what the hacker can see provides context which can help teams better secure their applications.<br />
* Info (Dynamic) - HLI: Detected Libraries:    
[https://iwa.onfortify.com:443/prescriptions](https://ams.fortify.com/redirect/Issues/5ccbb28c-af4f-4da1-bb15-bd3f23b5d769)

Summary:
<br /> Hacker Level Insights provides developers and security professionals with more context relating to the overall security posture of their application. The <b>jQuery</b> version <b>3.5.1</b> was detected to be in use by during this scan. While these findings do not necessarily represent a security vulnerability, it is important to note that attackers commonly perform reconnaissance of their target in an attempt to identify known weaknesses or patterns. Knowing what the hacker can see provides context which can help teams better secure their applications.<br />
* Info (Dynamic) - HLI: Detected Libraries:    
[https://iwa.onfortify.com:443/prescriptions](https://ams.fortify.com/redirect/Issues/1ce8f230-5b90-4de4-95ec-5b0418cf18ff)

Summary:
<br /> Hacker Level Insights provides developers and security professionals with more context relating to the overall security posture of their application. The <b>Moment.js</b> version <b>2.29.1</b> was detected to be in use by during this scan. While these findings do not necessarily represent a security vulnerability, it is important to note that attackers commonly perform reconnaissance of their target in an attempt to identify known weaknesses or patterns. Knowing what the hacker can see provides context which can help teams better secure their applications.<br /><style>
.cvc-grid {width:100%;}
.cvc-box {border-radius: 15px; border: 2px solid #1a75ff; width: 100%; padding: 10px;}
.cvc-cat {position: relative; display: inline-block; border-bottom: 1px dotted black;}
.cvc-cat .nvd-tooltip {visibility: hidden; width: 400px; background-color: #3b96ff; color: #fff; text-align: left; border-radius: 6px; padding: 5px; position: absolute; z-index: 1;}
.cvc-cat:hover .nvd-tooltip {visibility: visible;}
.score-box{color:#000!important;background-color:#f1f1f1!important;width:75%;border-radius:8px}
.score-box div {border-radius:8px}
.score-box div div{padding-left: 10px; font-weight: bold;}
.score-box > div:after,.score-box > div:before {content:""; display:table;clear:both}
.sb-good{color:#fff!important;background-color:#87e547!important}
.sb-warn{color:#fff!important;background-color:#fbc02d!important}
.sb-bad{color:#fff!important;background-color:#ff8686!important}
.nvd-tooltip:before{content:"The National Vulnerability Database (NVD) helps Fortify WebInspect HLI analysis to find information for CVEs including a brief summary by using Common Platform Enumeration(CPE) queries. The database is maintained by the National Institute of Standards and Technology (NIST)."}
</style><br/><p>

<div class="cvc-cat"><b>Known NVD records for:</b>
<span class="nvd-tooltip"></span>
</div> cpe:2.3:a:momentjs:moment:2.29.1</p><br/>

<div class="cvc-box">
<table class="cvc-grid">
<tr><td><b>VULNERABILITY:</b></td><td><b>FOUND VERSION:</b></td><td><b>FIXED VERSION:</b></td><td><b>SEVERITY:</b></td></tr>
<tr><td><a href="https://nvd.nist.gov/vuln/detail/CVE-2022-24785">CVE-2022-24785</a></td><td>2.29.1</td><td>2.29.2</td><td><div style="color: #8B0000;">High</div></td></tr>
</table>
Moment.js is a JavaScript date library for parsing, validating, manipulating, and formatting dates. A path traversal vulnerability impacts npm (server) users of Moment.js between versions 1.0.1 and 2.29.1, especially if a user-provided locale string is directly used to switch moment locale. This problem is patched in 2.29.2, and the patch can be applied to all affected versions. As a workaround, sanitize the user-provided locale name before passing it to Moment.js.

</div><br/>


<div class="cvc-box">
<table class="cvc-grid">
<tr><td><b>VULNERABILITY:</b></td><td><b>FOUND VERSION:</b></td><td><b>FIXED VERSION:</b></td><td><b>SEVERITY:</b></td></tr>
<tr><td><a href="https://nvd.nist.gov/vuln/detail/CVE-2022-31129">CVE-2022-31129</a></td><td>2.29.1</td><td>2.29.4</td><td><div style="color: #8B0000;">High</div></td></tr>
</table>
moment is a JavaScript date library for parsing, validating, manipulating, and formatting dates. Affected versions of moment were found to use an inefficient parsing algorithm. Specifically using string-to-date parsing in moment (more specifically rfc2822 parsing, which is tried by default) has quadratic (N^2) complexity on specific inputs. Users may notice a noticeable slowdown is observed with inputs above 10k characters. Users who pass user-provided strings without sanity length checks to moment constructor are vulnerable to (Re)DoS attacks. The problem is patched in 2.29.4, the patch can be applied to all affected versions with minimal tweaking. Users are advised to upgrade. Users unable to upgrade should consider limiting date lengths accepted from user input.

</div><br/>



  
### Removed Issues

* No removed issues were detected
