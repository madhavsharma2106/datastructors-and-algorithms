/**
 * A recurse function always has two conditions
 *  - A base case: Where the function will not call itself.
 *  - An Aggregator who calls the function will going up in the call stack and aggregates while deleteing the call stack
 */

function factorial(start, end) {
  function recurse(i) {
    if (i === end) {
      return i;
    }

    return recurse(i + 1) * i;
  }

  return recurse(start);
}

const result = factorial(1, 5);

console.log(result);

function joinArrayToString(array) {
  function recurse(index) {
    if (index === array.length - 1) return array[index];
    return array[index] + recurse(index + 1);
  }
  return recurse(0);
}

const joinedString = joinArrayToString(["m", "a", "d", "h", "a", "v"]);
console.log(joinedString);
