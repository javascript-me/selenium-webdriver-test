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
    .setValue("#yschsp", "anthony chen")
    .submitForm("#sf")
    .getTitle().then(function(title) {
    console.log('Title was: ' + title);
    console.log('Also check new generated image:  yahoo.png');
})
    .saveScreenshot('yahoo.png')
    .end();

//TODO: try to get some text by id after the form is submitted...