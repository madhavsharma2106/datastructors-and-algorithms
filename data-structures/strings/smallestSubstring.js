const str = "ADOBBBBECODEBANC";
const subStr = "ABC";

const firstSubstringAnyOrder = (str, subStr) => {
  const count = {};

  for (let i = 0; i < subStr.length; i++) {
    if (count[subStr[i]]) count[subStr[i]]++;
    else count[subStr[i]] = 1;
  }

  const window = { start: -1, end: -1 };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (count[char]) {
      if (window.start === -1) window.start = i;
      count[char]--;
      if (count[char] === 0) delete count[char];
      if (Object.keys(count).length === 0) window.end = i;
    }
  }

  return window;
};

const firstSubstringSameOrder = (str, subStr) => {
  const window = { start: -1, end: -1 };
  const pop = () => (subStr = subStr.slice(1));

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char === subStr[0]) {
      pop();
      if (window.start === -1) window.start = i;
      if (subStr.length === 0) window.end = i;
    }
  }

  return window;
};

const smallestSubstringAnyOrder = (str, subStr) => {
  // Edge cases
  if (str.length < subStr.length) return "";
  if (str.length === 0 || subStr.length === 0) return "";

  let left = 0,
    count = 0,
    minLength = Number.MAX_VALUE;
  let res = "";
  const letterCount = {};

  const populateOccurrences = () => {
    for (let i = 0; i < subStr.length; i++) {
      const c = subStr.charAt(i);
      if (letterCount[c]) letterCount[c]++;
      else letterCount[c] = 1;
    }
  };

  populateOccurrences();

  for (let right = 0; right < str.length; right++) {
    let cRight = str.charAt(right);

    if (--letterCount[cRight] >= 0) {
      ++count;
    }

    // moving left
    while (count === subStr.length) {
      const cLeft = str.charAt(left);
      const windowLength = right - left + 1;

      if (minLength > windowLength) {
        minLength = windowLength;
        res = str.slice(left, right + 1);
      }

      if (++letterCount[cLeft] > 0) {
        --count;
      }
      ++left;
    }
  }

  return res;
};

const result = firstSubstringAnyOrder(str, subStr);
// console.log(result);

const result1 = firstSubstringSameOrder(str, subStr);
// console.log(result1);

const result2 = smallestSubstringAnyOrder(str, subStr);
console.log(result2);
