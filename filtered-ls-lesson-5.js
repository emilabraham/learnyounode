var path = require('path');
var fs = require('fs');

fs.readdir(process.argv[2], function (err, list) {
  var array = list.filter(function (item) {
    return path.extname(item) === '.' + process.argv[3];
  });
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
})
