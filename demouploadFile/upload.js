var http = require('http');
var fs = require('fs');
var formidable = require('formidable');


var html = fs.readFileSync('./uploadForm.html');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.method === 'GET') {
        res.end(html);
    } else if (req.method === 'POST') {
        // membuat objek dari kelas formidable.IncomingForm
        var form = new formidable.IncomingForm();

        form.parse(req, function (err, fields, files) {
            // mengambil nama file temporari
            var tempFile = files.userfile.filepath;

            // menentukan lokasi file yang akan disimpan
            var destFile = './uploads' + files.userfile.name;

            //memindahkan file temp ke tujuan uploads
            fs.rename(tempFile, destFile, function (err) {
                if (err) {
                    res.end('proses upload gagal');
                    throw err;
                }
                res.end('proses upload berhasil');
            });
        });

    }
});



server.listen(3000)