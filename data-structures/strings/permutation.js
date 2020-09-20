const str = "abc";

const permutations = (str) => {
  if (str.length === 1) return str;
  let a = str.substring(0, 1);
  return a + permutations(str.slice(1));
};

const result = permutations(str);
console.log(result);
