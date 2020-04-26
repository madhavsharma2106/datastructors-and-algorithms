/**
 * The Idea of the breadcrumbs technique is to keep track of values that we have already computed and refer to them if we ever encounter them again. This
 *
 * This Technique is better as looking for values in an object is O(1) and, therefore, we save on a lot of computation.
 *
 */

//Checks if all elements in an array are unique.
function isUnique(arr) {
  const breadcrumbs = {};

  for (let i = 0; i < arr.length; i++) {
    if (breadcrumbs[arr[i]]) return false;
    breadcrumbs[arr[i]] = true;
  }

  return true;
}

const result = isUnique([1, 2, 3, 4]);
console.log(result);
