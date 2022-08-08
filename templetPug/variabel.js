//////////////////////////////////////////////////
// Nama file: variabel.js
//////////////////////////////////////////////////

var http = require('http')
var pug = require('pug')

var server = http.createServer(function (request, response) {   
   var template = pug.renderFile('./templates/variabel.pug', 
                  {data: ['JavaScript','Node.js','Express','Sails.js']});
   
   response.end(template);
});

server.listen(3000);
