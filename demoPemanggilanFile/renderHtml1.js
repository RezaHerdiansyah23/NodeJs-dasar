var http = require('http');
var fs = require('fs');


var html = fs.readFileSync('./index.html');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(html);
});

server.listen(3000);