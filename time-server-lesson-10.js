var net = require('net');
var strftime = require('strftime');

var portnumber = process.argv[2];

var server = net.createServer(function (socket) {
  socket.end(strftime("%Y-%m-%d %H:%M") + "\n");
});
server.listen(portnumber);
