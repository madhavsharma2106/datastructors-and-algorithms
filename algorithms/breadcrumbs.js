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
