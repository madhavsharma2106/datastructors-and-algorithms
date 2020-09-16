const arr1 = [2, 3, 5, 4, 56, 56, 5, 54, 356, 2, 32, 4];
const arr2 = [2, 3, 23, 56, 9, 56, 5, 1, 33, 01, 356, 2, 4];

const unionOfArray = (arr1, arr2) => {
  const count = {};

  const union = [];
  const mergedArray = [...arr1, ...arr2];
  mergedArray.forEach((item) => {
    if (count[item] === undefined) {
      count[item] = 0;
      union.push(item);
    } else {
      count[item]++;
    }
  });
  return union;
};

const result = unionOfArray(arr1, arr2);
console.log(result);
