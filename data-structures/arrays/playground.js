"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

// process.stdin.on("end", (_) => {
//   inputString = inputString
//     .replace(/\s*$/, "")
//     .split("\n")
//     .map((str) => str.replace(/\s*$/, ""));

//   main();
// });

function readLine() {
  return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  // HELPERS
  const sumOfRow = (i, j) => {
    let sum = 0;
    let pos = 0;

    for (let k = 0; k < 3; k++) {
      sum += arr[i][j + k];
      console.log(`arr[${i}][${j + k}] = ${arr[i][j + k]} and sum is ${sum}`);
    }

    console.log(`Sum of row starting from [${i},${j}]  is ${sum}`);
    return sum;
  };

  const sumOfHourGlass = (i, j) => {
    let sum = 0;

    // Top row
    sum += sumOfRow(i, j);
    // bottom row
    sum += sumOfRow(i + 2, j);
    // middle num
    sum += arr[i + 1][j + 1];
    console.log(`arr[${i + 1}][${j + 1}] = ${arr[i + 1][j + 1]}`);
    return sum;
  };

  let maxSum = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const sum = sumOfHourGlass(i, j);
      console.log(`Sum of HourGlass starting from [${i},${j}] is ${sum}`);
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  //   let arr = Array(6);

  //   for (let i = 0; i < 6; i++) {
  //     arr[i] = readLine()
  //       .split(" ")
  //       .map((arrTemp) => parseInt(arrTemp, 10));
  //   }

  let result = hourglassSum(arr);

  ws.write(result + "\n");

  ws.end();
}

let arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
];

let result = hourglassSum(arr);
console.log(result);
