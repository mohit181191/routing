var express = require('express'),
    http = require('http');
var path = require('path');

var app = express();

app.set('port', 3000);

app.get('/xyz', function(req, res) {
    var name = 'MyNameFromServer';
    res.send(name);
})

app.use(express.static(path.normalize(__dirname + '/')));

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});