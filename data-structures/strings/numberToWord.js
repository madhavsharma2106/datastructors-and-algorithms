const units = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const tens = [
  ,
  ,
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const splitToDigits = (num) => {
  const numArray = [];
  const split = (num) => {
    if (num == 0) return;
    numArray.push(num % 10);
    split(Math.floor(num / 10));
  };
  split(num);
  return numArray;
};

const toWord = (num) => {
  let word;
  if (num > 999) return "overflow";

  const [u, t, h] = splitToDigits(num);

  if (num < 20) return units[num];

  word = (h ? units[h] + " hundred" : "") + " " + tens[t] + " " + units[u];
  return word;
};

const result = toWord(999);
console.log(result);
