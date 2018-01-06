function stringToInteger(string) {
  var digitsToInt = { 0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, }
  var reversedDigits = string.split('').reverse();
  var result = 0;

  for ( i = 0; i < reversedDigits.length; i++ ) {
    result += reversedDigits[i] * Math.pow(10, i);
  }

  return result;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
