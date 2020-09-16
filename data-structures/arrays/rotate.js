const { SCHED_RR } = require("cluster");

const array = [1, 2, 3, 4, 5];

const leftShift = (arr, shift) => {
  while (shift > 0) {
    arr.push(arr.shift());
    shift--;
  }
  return arr;
};

const result = leftShift(array, 3);
console.log(result);
(2)[([1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1])];
