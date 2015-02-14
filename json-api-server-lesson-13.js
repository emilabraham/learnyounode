var http = require('http');
var url = require('url');

var portnumber = process.argv[2];

var server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  var parsedurl = url.parse(request.url, true);
  var date = new Date();
  if (0 === 0) {
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    var parsedtime = 'hour:'+hour+',minutes:'+minute+',second:'+second+' ';
    response.write(JSON.stringify(parsedtime));
    response.end();
  }
  /*if (parsedurl.pathname  === '/api/parsetime') {
    var parsedtime = '{hour: ' + date.getHours() + ', minute: ' +
    date.getMinutes() + ', second: ' + date.getSeconds() + '}';
    response.write(JSON.stringify(parsedtime));
    }*/
});
server.listen(portnumber);
