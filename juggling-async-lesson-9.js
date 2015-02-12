var http = require('http');
var bl = require('bl');
queue = {
  first: 'first',
  second: 'second',
  third: 'third'
}

var array = [3];

// First GET
http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log(data.toString())
    queue.first = data.toString();
  }));
});

// Second GET
http.get(process.argv[3], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
     return console.error(err);
    }
    console.log(data.toString())
    queue.second = data.toString();
  }));
});

// Third GET
http.get(process.argv[4], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log(data.toString())
    queue.third = data.toString();
  }));
});

console.log(queue.first);
console.log(queue.second);
console.log(queue.third);
