const { arrayOfNumbers } = require("../../dummyData");

const reverseArray = (arr) => {
  let reversedArray = [];
  for (let i = arr.length - 1; i > 0; i--) reversedArray.push(arr[i]);
  return reversedArray;
};

const result = reverseArray(arrayOfNumbers);
console.log(result);
