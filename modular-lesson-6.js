var directory = require('./directory');

directory(process.argv[2], process.argv[3], function(err, files) {
  if (err) {
    return console.error('There was an error:',err);
  }
  for (var i = 0; i < files.length; i++){
    console.log(files[i]);
  }
});
