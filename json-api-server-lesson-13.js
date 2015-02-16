var http = require('http');
var url = require('url');

var portnumber = process.argv[2];

function parsetime (time) {
  var parsedtime = {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
  return parsedtime;
}

function unixtime (time) {
  parsedtime = {
    unixtime: time.getTime()
  };
  return parsedtime;
}

var server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  var parsedurl = url.parse(request.url, true);
  var date = new Date(parsedurl.query.iso);
  if (parsedurl.pathname === '/api/parsetime') {
    response.end(JSON.stringify(parsetime(date)));
  }
  else if (parsedurl.pathname == '/api/unixtime') {
    response.end(JSON.stringify(unixtime(date)));
  }
  else {
    response.end();
  }
});
server.listen(portnumber);
