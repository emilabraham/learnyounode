var http = require('http');

http.get(process.argv[2], function (response) {
  response.on('data', function (data) {
    console.log(data);
  }).setEncoding('utf8');
  response.on('error', function (error) {
    console.error(error);
  }).setEncoding('utf8');
});
