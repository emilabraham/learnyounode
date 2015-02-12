// Required modules
var fs = require('fs');
var path = require('path');

/* 
 * Exports a function with 3 arguments
 * directory: path of directory to list
 * extension: file extension to filter by
 * callback: callback function
 */
module.exports = function (directory, extension, callback) {
  fs.readdir(directory, function (err, data) {
    // call the callback function with the error
    // This will return early.
    if (err) {
      return callback(err);
    }

    // If readdir does not error
    var array = data.filter(function (item) {
      return path.extname(item) === '.' + extension;
    });
    callback(null, array);
  });
};
