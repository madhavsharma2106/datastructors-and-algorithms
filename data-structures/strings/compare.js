const str1 = "painting";
const str2 = "painter";

function compare(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

const result = compare(str1, str2);
console.log(result);
