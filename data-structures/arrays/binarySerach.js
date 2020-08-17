const { sortedArrayOfNumbers } = require("../../dummyData");

function binarySearch(array, number) {
  // find mid
  const mid = Math.floor((0 + array.length) / 2);
  if (array.length === 0) return false;

  // If nuumber is smaller than mid then recurse with first half
  if (number < array[mid]) {
    return binarySearch(array.slice(0, mid), number);
  }

  // If number is bigger than mid then recurse with second half
  if (number > array[mid]) {
    return binarySearch(array.slice(mid + 1, array.length), number);
  }
  // if number is mid then return with index
  if (number === array[mid]) return true;
}

console.log(binarySearch(sortedArrayOfNumbers, 35));
