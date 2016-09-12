var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

var client = webdriverio
    .remote(options)
    .init()
    .url('file:///D:/Doc/Dev/javascript-me/selenium-webdriver-test/capture-unit-test-log-with-selenium.html')

// client.getText('#testresults').then(function (text) {
//     console.log("===>" + text);
// })

client.end();

