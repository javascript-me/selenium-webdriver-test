var assert = require('assert');

describe('Github page', function() {

    it('should have the right title', function () {
        browser.url('https://github.com/');
        var title = browser.getTitle();
        assert.equal(title, 'How people build software · GitHub');
    });

    it("should be fine", function () {
        assert.equal(1, 1);
    });
});