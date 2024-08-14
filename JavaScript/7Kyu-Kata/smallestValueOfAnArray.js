/**
 * Smallest value of an array
 *
 * Write a function that can return the smallest value of an array or the index of that value.
 * The function's 2nd parameter will tell whether it should return the value or the index.
 * Assume the first parameter will always be an array filled with at least 1 number and no duplicates.
 * Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
 * min([1,2,3,4,5], 'value') // => 1
 * min([1,2,3,4,5], 'index') // => 0
 *
 * P: array and toReturn.
 *  * Array is always an array filled with at least 1 number, no duplicates
 *  * toReturn is a string, either 'value' or 'index'
 * R: return a number (either the index of the lowest num in array, or the value)
 * E: See above examples
 * Pseudocode:
 * Shallow copy the array (slice method) and sort from smallest to largest.
 * Find the value of the number in position 0 of the copied array, this is the smallest number.
 * If toReturn is value, return arrayCopy[0]. If toReturn is index, use find using the smallest number in the original array
 */

// function min(arr, toReturn) {
//   let sortedArr = arr.sort();
//   if (toReturn === "value") {
//     return sortedArr[0];
//   } else if (toReturn === "index") {
//     return arr.indexOf(sortedArr[0]);
//   }
// }

function min(arr, toReturn) {
  let sortedArr = arr.slice().sort((a, b) => a - b);
  if (toReturn === "value") {
    return sortedArr[0];
  } else if (toReturn === "index") {
    return arr.indexOf(sortedArr[0]);
  }
}
console.log(min([1, 2, 3, 4, 5], "value"));
console.log(min([1, 2, 3, 4, 5], "index"));
