var http = require('http');
var url = require('url');

var portnumber = process.argv[2];

var server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  var parsedurl = url.parse(request.url, true);
  console.log(JSON.stringify(parsedurl));
});
server.listen(portnumber);
