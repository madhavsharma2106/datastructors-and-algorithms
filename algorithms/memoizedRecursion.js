const memoize = (cb) => {
  const cache = {};
  return (n) => {
    if (n in cache) {
      console.log(`Using the cached value of ${n}`);
      return cache[n];
    } else {
      console.log(`Calculting and subsequently caching the value of ${n}`);
      const result = cb(n);
      cache[n] = result;
      return result;
    }
  };
};

const factorial = memoize(function (x) {
  if (x === 1) {
    return x;
  }
  return x * factorial(x - 1);
});

console.log(factorial(5));
console.log(factorial(7));
