var http = require('http');
var bl = require('bl');

var array = [];
var finished = 0;
var num_of_arguments = process.argv.length;

// Initialize the array
for (var z = 0; z < num_of_arguments-2; z++) {
  array[z] = 'initialized';
}

// queue the requests
var queue_requests = function () {
  for (var x = 2; x < num_of_arguments; x++) {
    httpcall(x);
  }
};

// pass in the index of URL argument to be processed.
var httpcall = function (index) {
  http.get(process.argv[index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err);
      }
      // Story in array at proper position based on argument index
      array[index-2] = data.toString();
      finished++;
      print(finished);
    }));
  });
}
// Print out the array if all requests are finished.
var print = function(finished) {
  if (finished === num_of_arguments - 2) {
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
}

queue_requests();
