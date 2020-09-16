const arr1 = [4, 5, 6, 8, 9, 10];

function findOneMissingNumberInSortedArray(arr) {
  const length = arr.length;
  const first = arr[0];
  const last = arr[length - 1];
  const sum = (length * (first + last)) / 2;
  const arraySum = arr.reduce((acc, n) => (acc = acc + n), 0);

  console.log({ sum, arraySum });

  const num = sum - arraySum;
  return num;
}

const result = findOneMissingNumberInSortedArray(arr1);
console.log(result);
