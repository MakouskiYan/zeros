module.exports = function getZerosCount(number) {
  var zeros = 0;
  var i = 1;  
  while (Math.floor(number / Math.pow(5, i)) > 0) {
    zeros += Math.floor(number / Math.pow(5, i))
    i++;
  }
  return zeros;
}
