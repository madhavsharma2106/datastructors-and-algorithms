const { arrayOfNumbers, sortedArrayOfNumbers } = require("../../dummyData");

function isArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

const result = isArraySorted(arrayOfNumbers);
const result2 = isArraySorted(sortedArrayOfNumbers);
console.log({ result, result2 });
