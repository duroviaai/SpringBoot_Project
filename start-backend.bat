@echo off
echo Starting Addition Backend on port 1313...
cd "d:\SpringBoot\Day-7\Project-3\17-03-026\Backand"

REM Set Java path
set JAVA_PATH=C:\Users\HP\Downloads\jdk-25_windows-x64_bin\jdk-25.0.2\bin\java.exe

REM Build the project first
echo Building project...
mvnw.cmd clean package -DskipTests

REM Run the JAR file
echo Starting Spring Boot application...
"%JAVA_PATH%" -jar target\*.jar

pause