function Array(arr = []) {
  this.arr = arr;
  this.length = arr.length;
}

/**
 * Checks if the element is an array.
 * @param {*} arr Any element
 * @returns {boolean} true if the element is an array
 */
Array.prototype.isArray = function (element) {
  return element instanceof Array;
};

/**
 * Logs each element of the array to the console
 */
Array.prototype.display = function () {
  for (let i = 0; i < this.length; i++) {
    console.log(this.arr[i]);
  }
  return this;
};

/**
 * Pusheh element to the end of the array
 * @param {*} element Element to be added
 */
Array.prototype.push = function (element) {
  this.arr[this.length++] = element;
  return this;
};

/**
 * Inserts elelmet at the specified index
 * @param {*} element Element to be added
 * @param {*} index Index at which to insert
 */
Array.prototype.insert = function (element, index) {
  for (let i = this.length; i >= index + 1; i--) {
    this.arr[i] = this.arr[i - 1];
  }
  this.arr[index] = element;
  this.length++;
  return this;
};

/**
 * Removes last element of the array
 */
Array.prototype.pop = function () {
  this.arr[this.length] = undefined;
  this.length--;
  return this;
};

/**
 * Individually executes callback function for each element and mutates the SAME array
 * @param {function} cb callback function
 */
Array.prototype.forEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    this.arr[i] = cb(this.arr[i], i);
  }
  return this;
};
/**
 * Individually executes callback function for each element in the array and returns a new array
 * @param {function} cb callback function
 */
Array.prototype.map = function (cb) {
  const updatedArray = new Array();
  for (let i = 0; i < this.length; i++) {
    updatedArray.push(cb(this.arr[i], i));
  }
  return updatedArray;
};

/**
 * The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
 * @param {Array} secondArray Array to be concatinated
 */
Array.prototype.concat = function (secondArray) {
  let concatinatedArray = { ...this };
  for (let i = 0; i < secondArray.length; i++) {
    concatinatedArray.arr[concatinatedArray.length + i] = secondArray.arr[i];
  }
  concatinatedArray.length = concatinatedArray.length + secondArray.length;
  return concatinatedArray;
};

/**
 * Splices array and returns a new Array
 * @param {number} start Starting index from which to splice
 * @param {number} end Ending index from which to splice
 */
Array.prototype.splice = function (start, end) {
  const { arr } = this;
  const splicedArray = new Array();

  if (!end) end = this.length;
  if (start < this.length - 1) return splicedArray.push(arr[0]);
  for (let i = start; i < end; i++) {
    splicedArray.push(arr[i]);
  }
  return splicedArray;
};

Array.prototype.flat = function ({ arr, length }) {
  const flattenedArray = new Array();

  function flatten(arr) {
    let i = 0;
    while (i < arr.length) {
      const firstElement = arr[i];
      if (Array.prototype.isArray(firstElement)) {
        flatten(firstElement.arr);
      } else {
        flattenedArray.push(firstElement);
      }

      i++;
    }
  }
  flatten(arr);
  return flattenedArray;
};

const arr = new Array([1, 2, 3, 4, 5]);
const arr2 = new Array([6, 7, 8, 9, 10]);
const arr3 = new Array([99, 1, 2, arr2]);
const arr4 = new Array([8, 9]);
const arr5 = new Array([1, 2, arr4]);
const arr6 = new Array([5, 6, arr5]);

const result = Array.prototype.flat(arr6);
console.log(result);
