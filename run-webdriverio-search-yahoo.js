var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

webdriverio
    .remote(options)
    .init()
    .url("http://search.yahoo.com")
    .setValue("#yschsp", "JavaScript")
    .submitForm("#sf")
    .getTitle().then(function(title) {
    console.log('Title was: ' + title);
})
    .saveScreenshot('yahoo.png')
    .end();

//TODO: try to get some text by id after the form is submitted...