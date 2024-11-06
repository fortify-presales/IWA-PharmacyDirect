#!/bin/bash
#
# Example script to perform Fortify Static Code Analysis
#

# Retrieve parameters
SkipPDF=1
SkipSSC=1
while [[ "$#" -gt 0 ]]; do
    case $1 in
	    -p|--scan-policy) ScanPolicy="$2"; shift ;;
        --create-pdf) SkipPDF=0 ;;
	    --upload-to-ssc) SkipSSC=0 ;;
        *) echo "Unknown parameter passed: $1"; exit 1 ;;
    esac
    shift
done
if [ -z "$ScanPolicy" ]; then
    ScanPolicy="classic"
fi
echo "Using ScanPolicy: ${ScanPolicy}"
if [ $SkipPDF -eq 1 ]; then
    echo "... skipping PDF generation"
fi
if [ $SkipSSC -eq 1 ]; then
    echo "... skipping upload to SSC"
fi

# Import local environment specific settings
ENV_FILE="${PWD}/.env"
if [ ! -f $ENV_FILE ]; then
    echo "An '.env' file was not found in ${PWD}"
    exit 1
fi
source .env
AppName=$SSC_APP_NAME
AppVersion=$SSC_APP_VER_NAME
SSCUrl=$SSC_URL
SSCAuthToken=$SSC_AUTH_TOKEN # AnalysisUploadToken
JVMArgs="-Xss256M"
ScanSwitches="-Dcom.fortify.sca.ProjectRoot=.fortify"

if [ -z "${AppName}" ]; then
    echo "Application Name has not been set in '.env'"; exit 1
fi
if [ -z "${AppVersion}" ]; then
    echo "Application Version has not been set in '.env'"; exit 1
fi

#
# Build application to create classpath file
echo Creating Classpath file
./gradlew clean build writeClasspath -x test
ClassPath=$(<build/classpath.txt)

# Run the translation and scan
#
echo Running translation...

sourceanalyzer $ScanSwitches $JVMArgs -b "$AppName" -jdk 11 -java-build-dir "build/classes" -cp $ClassPath \
    -exclude "./src/main/resources/static/js/lib" -exclude "./src/main/resources/static/css/lib" \
    -exclude "./node_modules" -exclude "src/main/resources/schema.sql" -exclude "src/main/resources/data.sql" \
    "src/iac/**/*" "src/main/java/**/*" "src/main/resources/**/*" "Dockerfile*"

echo Running scan...
sourceanalyzer $ScanSwitches $JVMArgs -b "$AppName" -debug -verbose \
    -rules etc/sast-custom-rules/example-custom-rules.xml -filter etc/sast-filters/example-filter.txt \
    -scan-policy $ScanPolicy -build-project "$AppName" -build-version "$AppVersion" -build-label "SNAPSHOT" \
    -scan -f "${AppName}.fpr"

# summarise issue count by analyzer
FPRUtility -information -analyzerIssueCounts -project "${AppName}.fpr"

if [ $SkipPDF -eq 0 ]; then
    echo Generating PDF report...
    ReportGenerator $ScanSwitches -user "Demo User" -format pdf -f "${AppName}.pdf" -source "${AppName}.fpr"
fi

if [ $SkipSSC -eq 0 ]; then
    echo Uploading results to SSC...
    fortifyclient uploadFPR -file "${AppName}.fpr" -url $SSCUrl -authtoken $SSCAuthToken -application "$AppName" -applicationVersion "$AppVersion"
fi

echo Done.
