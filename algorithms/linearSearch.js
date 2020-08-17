const { sortedArrayOfNumbers } = require("../dummyData");

const linearSearch = (list, number) => list.findIndex((n) => n === number);

const result = linearSearch(sortedArrayOfNumbers, 28);
console.log(result);
