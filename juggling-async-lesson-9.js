var http = require('http');
var bl = require('bl');

var array = ['first', 'second', 'third'];
var finished = 0;

// First GET
http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err);
    }
    array[0] = data.toString();
    finished++;
    print(finished);
  }));
});

// Second GET
http.get(process.argv[3], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
     return console.error(err);
    }
    array[1] = data.toString();
    finished++;
    print(finished);
  }));
});

// Third GET
http.get(process.argv[4], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err);
    }
    array[2] = data.toString();
    finished++;
    print(finished);
  }));
});

var print = function(finished) {
  if (finished === 3) {
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
}
