//////////////////////////////////////////////////
// Nama file: pengulangan.js
//////////////////////////////////////////////////

var http = require('http');
var pug = require('pug');
var qs = require('querystring');

var server = http.createServer(function (request, response) {   
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   if (request.url == '/') {
      switch (request.method) {
         case 'GET':
            var template = pug.renderFile(
                              './templates/pengulangan-form.pug');
            response.end(template);
            break;
         case 'POST':
            var body = '';

            request.on('data', function (data) {
               body += data;
            });
            
            request.on('end', function () {
               var form = qs.parse(body);
               var template = pug.renderFile(
                                './templates/pengulangan.pug', 
                                {s: form['s'], n: parseInt(form['n'])});
               response.end(template);
            });
            break;
         default:
            response.end('Metode pengiriman tidak dikenal');
      }
   }
});

server.listen(3000);
