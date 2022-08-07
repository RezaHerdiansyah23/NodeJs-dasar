var http = require('http');
var fs = require('fs');

function css(req, res) {
    if (req.url === './style.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        var fileContents = fs.readFileSync('./style.css', { encoding: 'utf8' });
        res.write(fileContents);
        res.end();
    }
}

function renderHTML(path, res) {
    fs.readFile(path, null, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
}

var server = http.createServer(function (req, res) {
    css(req, res);
    res.writeHead(200, { 'content-type': 'text/html' });
    renderHTML('./index.html', res);
});


server.listen(3000);