YUI().add('test-result-printer-for-selenium', function (Y) {

    var messages = [];
    var yconsole = new Y.Console();

    yconsole.on('entry', function (obj) {
        console.log(obj.message);
        messages.push(obj.message);
    });

    // Print test result xml.
    Y.Test.Runner.subscribe(Y.Test.Runner.COMPLETE_EVENT, function (obj) {
        console.log(Y.Test.Format.JUnitXML(obj.results));
        var data = escape(JSON.stringify(
            {
                messages: messages,
                results: Y.Test.Format.JUnitXML(obj.results)
            }, null, "\t"
        ));

        var item = Y.Node.create('<div id="testResults"></div>')
        item.setContent(data);

        Y.one('body').append(item);

    });

});
