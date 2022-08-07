var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === '/') {
        res.end('<h2>halaman utama</h2>');
    } else if (req.url == '/katalog') {
        res.end('<h2>katalog</h2>');
    } else if (req.url == '/kontak') {
        res.end('<h2>kontak</h2>');
    } else {
        res.status = 404;
        res.end('<h2>404:halaman tidak ditemukan</h2>');
    }
});
server.listen(3000);