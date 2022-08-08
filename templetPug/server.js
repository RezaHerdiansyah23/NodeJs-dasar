

var http = require('http')
var pug = require('pug')

var server = http.createServer(function (request, response) {
   var data = {nama: 'REza herdiansyah', daftar: ['satu','dua','tiga']};
   var template = pug.renderFile('./templates/index.pug', data);
   
   response.end(template);
});

server.listen(3000);
