const arr = [6, 3, 8, 10, 16, 7, 5, 2, 9, 14, -4];
const sortedArr = [-4, 1, 3, 4, 5, 6, 8, 9, 12, 14];
const sum = 10;

const bruteForce = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        console.log(arr[i], arr[j]);
      }
    }
  }
};

const usingHashTable = (arr, sum) => {
  const nums = {};
  arr.forEach((n) => {
    const otherNumberinPair = sum - n;
    if (nums[otherNumberinPair]) console.log(n, otherNumberinPair);
    // Add the number to the hash table in the end to avoid the number counting itself.
    nums[n] = 1;
  });
};

const sortedArray = (arr, sum) => {
  let high = arr.length - 1;
  let low = 0;
  while (high > low) {
    if (arr[high] + arr[low] === sum) {
      console.log(arr[high], arr[low]);
      low++;
    }
    if (arr[high] + arr[low] > sum) high--;
    if (arr[high] + arr[low] < sum) low++;
  }
};

bruteForce(arr, sum);
console.log("-----");
usingHashTable(arr, sum);
console.log("-----");
sortedArray(sortedArr, sum);

let twoDArr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
console.log(twoDArr.length);
