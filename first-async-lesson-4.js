var fs = require('fs');
var path = process.argv[2];
fs.readFile(process.argv[2], 'utf8', function (error, data) {
  console.log(data.split('\n').length - 1);
});
