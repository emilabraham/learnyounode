var length = process.argv.length;
var total = 0;
for (var i = 2; i < length; i++) {
  total += +process.argv[i];
}
console.log(total);
