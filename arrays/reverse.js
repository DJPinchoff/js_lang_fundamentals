function reverse(input) {
  var i;
  var reversedArray = [];

  for (i = 0; i < input.length; i++) {
    reversedArray[i] = input[input.length - 1 - i];
  }

  return typeof input === 'string' ? reversedArray.join('') : reversedArray;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
