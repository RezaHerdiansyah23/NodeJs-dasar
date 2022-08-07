var http = require('http');
var fs = require('fs');

function renderHtml(path, res) {
    fs.readFile(path, null, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.write('File not found');
        } else {
            res.write(data);
        }
        res.end();
    });
}

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    renderHtml('./index.html', res);
});

server.listen(3000);