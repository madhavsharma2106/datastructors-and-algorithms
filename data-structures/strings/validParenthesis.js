const str = "";

const isValid = (str) => {
  const stack = [];
  const top = () => stack[stack.length - 1];

  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i);
    const t = top();
    if (c === "{" || c === "(" || c === "[") stack.push(c);
    if (c === "}" && t !== "{") return false;
    if (c === ")" && t !== "(") return false;
    if (c === "]" && t !== "[") return false;
    if (c === "}" && t === "{") stack.pop();
    if (c === ")" && t === "(") stack.pop();
    if (c === "]" && t === "[") stack.pop();
  }

  return Boolean(!stack.length);
};

const result = isValid(str);
console.log(result);
