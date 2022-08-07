var http = require('http');
var qs = require('querystring');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    if (req.url == '/') {
        switch (req.method) {
            case 'GET':
                res.end(
                    '<h2>Demo penanganan form</h2>' +
                    '<form action="/" method="post">' +
                    'Nama:<br>' +
                    '<input type="text" name="nama"><br><br>' +
                    'Email:<br>' +
                    '<input type="email" name="email"><br><br>' +
                    '<input type="submit" name="btnSubmit" value="kirim">' +
                    '</form>'
                );
                break;
            case 'POST':
                var body = '';
                req.on('data', function (data) {
                    body += data;
                });
                req.on('end', function () {
                    var form = qs.parse(body);
                    res.end(
                        'Data yang dikirim:<br>' +
                        'Nama: ' + form['nama'] + '<br>' +
                        'Email: ' + form['email']
                    );
                });
                break;
            default:
                res.end('Metode pengiriman tidak dikenal');
        }
    }
});



server.listen(3000);