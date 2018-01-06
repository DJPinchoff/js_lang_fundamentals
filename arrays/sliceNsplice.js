function slice(array, begin, end) {
  var result = [];
  var i;

  if (begin > array.length) { begin = array.length; }
  if (end > array.length) { end = array.length; }

  for (i = begin; i < end; i++) {
    result.push(array[i]);
  }

  return result;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3));                     // [2, 3]
console.log(arr);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...items) {
  var i;
  var deletedItems = [];
  var tempArray = [];

  if (start > array.length) {
    start = array.length;
  }

  if (start + deleteCount > array.length) {
    deleteCount = array.length - start;
  }

  for (i = start; i < start + deleteCount; i++ ) {
    deletedItems.push(array[i]);
    delete array[i]
  }
  array = array.filter(element => element !== 'undefined');

  tempArray.concat(slice(array, 0, start));
  tempArray.concat(items);
  tempArray.concat(slice(array, start, array.length));
  array = tempArray;

  return deletedItems;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));             // [2]
console.log(arr);                                  // [1, "two", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr);                                  // [1, "two", "three"]

var arr = [1, 2, 3];
splice(arr, 1, 0);                    // []
splice(arr, 1, 0, 'a');               // []
arr;                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
splice(arr, 0, 0, 'a');               // []
arr;                                  // ["a", 1, 2, 3]
