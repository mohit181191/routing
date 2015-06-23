var express = require('express'),
    http = require('http');

var app = express();

app.set('port', 3000);

app.get('/', function(req, res) {
    var name = 'MyNameFromServer';
    res.send(name);
})

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
next()}
);


http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});