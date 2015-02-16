var http = require('http');
var url = require('url');

var portnumber = process.argv[2];

var server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  var parsedurl = url.parse(request.url, true);
  if (parsedurl.pathname === '/api/parsetime') {
  var date = new Date(parsedurl.query.iso);
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var parsedtime = { 'hour': hour, 'minute': minute, 'second': second };
  response.end(JSON.stringify(parsedtime));
  }
  else if (parsedurl.pathname == '/api/unixtime') {
    var date = new Date(parsedurl.query.iso);
    var parsedtime = { 'unixtime': date.getTime() };
    response.end(JSON.stringify(parsedtime));
  }
  else {
    response.end();
  }
});
server.listen(portnumber);
