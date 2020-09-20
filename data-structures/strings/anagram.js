const str1 = "decimal";
const str2 = "medical";

function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  const counta = {};
  const countb = {};

  const countElements = (el, counter) => {
    for (let i = 0; i < el.length; i++) {
      if (counter[el[i]]) counter[el[i]]++;
      else counter[el[i]] = 1;
    }
  };

  countElements(str1, counta);
  countElements(str2, countb);

  for (key in counta) {
    if (counta[key] !== countb[key]) return false;
  }
  return true;
}

const result = isAnagram(str1, str2);
console.log(result);
