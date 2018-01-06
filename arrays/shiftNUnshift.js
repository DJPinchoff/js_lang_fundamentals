function shift(array) {
    var removedElement = array[0];
    var i;

    if (array.length === 0) { return undefined; }
    for (i = 0; i < array.length - 1; i++) {
      array[i] = array[i + 1];
    }
    array.length -= 1;

    return removedElement;
}

function unshift(array, ...elements) {
  var i;
  var j;
  var copiedArray;

  for (i in elements) {
    copiedArray = array.slice();
    for (j = 0; j < copiedArray.length; j++) {
      array[j + 1] = copiedArray[j];
    }
    array[0] = elements[i];
  }

  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
