//////////////////////////////////////////////////
// Nama file: iterasi.js
//////////////////////////////////////////////////

var http = require('http');
var pug = require('pug');
var qs = require('querystring');

var server = http.createServer(function (request, response) {   
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   var data = [
      ['PRD001','Pensil',6000],
      ['PRD002','Spidol',8500],
      ['PRD003','Stabilo',12000]
   ];
   
   var template = pug.renderFile(
                     './templates/iterasi.pug', {produk: data});
   response.end(template);   
});

server.listen(3000);
