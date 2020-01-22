const reporter = require("cucumber-html-report");

const options = {
    /*Themes
    1- bootstrap
    2- hierarchy
    3- foundation
    4- simple
    */
    theme: "bootstrap",
    jsonFile: "cucumber_report.json",
    output: "cucumber_report.html",
    reportSuiteAsScenarions: true,
    launchReport: false
};

   reporter.generate(options);