const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "http://173.249.41.180:9000/",
    options: {
      "sonar.sources": ".",
      "sonar.inclusions": "projects/**" // Entry point of your code
    }
  },
  () => {}
);
