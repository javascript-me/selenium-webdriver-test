# selenium-webdriver-test

### Want to connect to Firefox? Download geckodriver in below address, uzip it and add it to PATH environment variable.

https://github.com/mozilla/geckodriver/releases

-> 

https://github.com/mozilla/geckodriver/releases/download/v0.10.0/geckodriver-v0.10.0-win64.zip

### Run "selenium webdriver" sample

npm install selenium-webdriver

node run-selenium-webdriver.js

### Run "webdriver io" sample

cd /d/Doc/Dev/lib/selenium

java -jar selenium-server-standalone-3.0.0-beta3.jar

npm install webdriverio

node run-webdriverio.js

### Run "mocha selenium" sample

npm install -g wdio-mocha-framework

##### Use this command to generate a config file: wdio.conf.js. Choose default values... 
wdio config

##### Run test defined in: ./test/specs/mocha-selenium-test.js
wdio wdio.conf.js

### Capture unit test results with selenium

open capture-unit-test-results-with-selenium.html

node capture-unit-test-results-with-selenium.js

### Want to use Chrome with Selenium? (see https://sites.google.com/a/chromium.org/chromedriver/getting-started)

Down load driver in: 

https://sites.google.com/a/chromium.org/chromedriver/downloads

http://chromedriver.storage.googleapis.com/index.html?path=2.24/

Then define below options. However, there is an issue when using Chrome. 

```
var options = {
    desiredCapabilities: {
        //browserName: 'firefox'
        // TODO: not able to get text of "#testResults" in when using chrome.
        browserName: 'chrome'
    }
};
```