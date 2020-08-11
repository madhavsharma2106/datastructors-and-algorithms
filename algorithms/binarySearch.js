const { sortedArrayOfNumbers } = require("../dummyData");

function binarySearch(arr, n) {
  if (n > Math.floor(arr[arr.length / 2]))
    binarySearch(arr.splice(arr.length / 2), n);
  if (n < Math.floor(arr[arr.length / 2]))
    binarySearch(arr.splice(0, arr.length / 2), n);
  if (n === arr.length / 2) return true;
  return false;
}

const result = binarySearch(sortedArrayOfNumbers, 37);
console.log(result);
