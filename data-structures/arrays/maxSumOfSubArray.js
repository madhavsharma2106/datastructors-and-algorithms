const arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const windowSize = 3;

// Using the sliding window approach
const maxSumOfContiguousSubArray = (arr, windowSize) => {
  let maxSum = arr.slice(0, 3).reduce((acc, curr) => (acc += curr), 0);

  const window = { start: 0, end: 2 };

  for (let i = 2; i < arr.length - 1; i++) {
    let tempSum = maxSum;
    tempSum -= arr[i - 2];
    tempSum += arr[i + 1];
    if (maxSum < tempSum) {
      maxSum = tempSum;
      window.start = i - 1;
      window.end = i + 1;
    }
  }
  return { maxSum, window };
};

const result = maxSumOfContiguousSubArray(arr, windowSize);
console.log(result);
