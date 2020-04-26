/**
 * Generic Memoization solution
 */

/* Specific Solution */

// const memoizedClosureTimes10 = () => {
//   const cache = {};

//   return (n) => {
//     console.log(cache);
//     if (n in cache) {
//       console.log("Fetching from cache", n);
//       return cache[n];
//     } else {
//       console.log("Calculating result");
//       let result = n * 10;
//       cache[n] = result;
//       return result;
//     }
//   };
// };

// // We are memoizing the value in the cache variable in the closure.
// const multiplyBy10 = memoizedClosureTimes10();

// console.log(multiplyBy10(4));
// console.log(multiplyBy10(4));
// console.log(multiplyBy10(4));
// console.log(multiplyBy10(5));
// console.log(multiplyBy10(6));
// console.log(multiplyBy10(5));
