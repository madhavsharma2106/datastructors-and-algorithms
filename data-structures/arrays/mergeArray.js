const arr1 = [1, 3, 5, 6, 7, 9, 11, 12, 13, 14, 15];
const arr2 = [0, 0, 0, 2, 4, 6, 8, 10];

const mergeTwoArrays = (arr1, arr2) => {
  let length = arr1.length + arr2.length;
  let i1 = 0;
  let i2 = 0;
  let mergedArray = [];

  while (length > 0 && i1 < arr1.length && i2 < arr2.length) {
    length--;
    if (arr1[i1] <= arr2[i2]) {
      mergedArray.push(arr1[i1]);
      i1++;
    } else {
      mergedArray.push(arr2[i2]);
      i2++;
    }
  }

  if (i1 < arr1.length) {
    mergedArray = mergedArray.concat(arr1.slice(i1));
  }
  if (i2 < arr2.length) {
    mergedArray = mergedArray.concat(arr2.slice(i2));
  }

  return mergedArray;
};

const result = mergeTwoArrays(arr1, arr2);
console.log(result);
