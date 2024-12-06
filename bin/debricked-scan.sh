#!/bin/bash

# Import local environment specific settings
ENV_FILE="${PWD}/.env"
if [ ! -f $ENV_FILE ]; then
    echo "An '.env' file was not found in ${PWD}"
    exit 1
fi
source .env
AppName=$APP_NAME
DebrickedToken=$DEBRICKED_TOKEN
if [ -z "${AppName}" ]; then
    echo "APP_NAME has not been set in '.env'"; exit 1
fi
if [ -z "${DebrickedToken}" ]; then
    echo "DEBRICKED_TOKEN has not been set in '.env'"; exit 1
fi

debricked scan --callgraph --prefer-npm -r "${AppName}" --access-token="${DebrickedToken}"  -e "*/**.lock" -e "**/build/classes/test/**" -e "**/target/classes/test-classes/**" .

