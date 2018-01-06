function stringToSignedInteger(string) {
  var digitsToInt = { 0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, }
  var reversedDigits = string.split('').reverse();
  var result = 0;
  var positive = true;

  for ( i = 0; i < reversedDigits.length; i++ ) {
    if (Object.keys(digitsToInt).includes(reversedDigits[i])) {
      result += reversedDigits[i] * Math.pow(10, i);
    }
  }

  if (string[0] === '-') {
    positive = false;
  }

  return positive ? result : result * -1;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
