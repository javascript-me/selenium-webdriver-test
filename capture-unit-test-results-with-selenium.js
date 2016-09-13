var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'firefox'
        // TODO: not able to get text of "#testResults" in when using chrome.
        //browserName: 'chrome'
    }
};

var client = webdriverio
    .remote(options)
    .init()
    .url('file:///D:/Doc/Dev/javascript-me/selenium-webdriver-test/capture-unit-test-results-with-selenium.html')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .getText("#forDebug").then(function (result) {
        console.log("forDebug is: " + result);
    })
    .getText("#testResults").then(function (result) {
        console.log("testResults is: " + unescape(result));
    });

client.end();

