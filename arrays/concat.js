function concat(array) {
  var i;
  var j;

  for (i = 1; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      for (j = 0; j < arguments[i].length; j++) {
        array.push(arguments[i][j]);
      }
    } else {
      array.push(arguments[i]);
    }
  }

  return array;
}

console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]
console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
