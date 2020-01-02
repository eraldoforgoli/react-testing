#!/bin/bash

mvn clean package sonar:sonar

mvn sonar:sonar \
   -Dsonar.projectKey=react-testing \
   -Dsonar.host.url=http://173.249.41.180:9000 \