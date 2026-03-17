@echo off
echo Starting Addition Backend...
set JAVA_HOME=C:\Users\HP\Downloads\jdk-25_windows-x64_bin\jdk-25.0.2
set PATH=%JAVA_HOME%\bin;%PATH%
echo Compiling and running with Java 25...

REM Clean and compile
mvnw.cmd clean compile

REM Run the application directly with java
echo Starting Spring Boot application...
java -cp "target/classes;%USERPROFILE%\.m2\repository\org\springframework\boot\spring-boot-starter-web\3.3.0\*" com.example.Backend.Application
pause