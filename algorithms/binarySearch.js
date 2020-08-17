const { sortedArrayOfNumbers } = require("../dummyData");

const binarySearch1 = function (arr, x, start, end) {
  if (!end) end = sortedArrayOfNumbers.length - 1;
  if (!start) start = 0;

  // Base Condition
  if (start > end) return false;

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // Compare mid with given key x
  if (arr[mid] === x) return true;

  // If element at mid is greater than x,
  // search in the left half of mid
  if (arr[mid] > x) return binarySearch1(arr, x, start, mid - 1);
  // If element at mid is smaller than x,
  // search in the right half of mid
  else return binarySearch1(arr, x, mid + 1, end);
};

const binarySearch = (arr, num, start, end) => {
  if (!end) end = sortedArrayOfNumbers.length - 1;
  if (!start) start = 0;
  // base condition: stop if start > end
  if (start > end) return false;

  // find midpoint
  let mid = Math.floor((start + end) / 2);

  // Compare mid with given key x
  if (arr[mid] === num) return true;

  // if number is greater than mid recurse with later half of the array
  if (arr[mid] > num) return binarySearch(arr, num, start, mid - 1);
  // if number is smaller then recurse with first half of the array
  else return binarySearch(arr, num, mid + 1, end);
};

const result = binarySearch(sortedArrayOfNumbers, 20);
console.log(result);
