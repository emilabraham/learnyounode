var http = require('http');
var fs = require('fs');

var portnumber = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function (request, response) {
  var filestream = fs.createReadStream(file);
  filestream.pipe(response);
})
server.listen(portnumber);
