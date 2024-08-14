/**
write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.


P - size (positive integer)
R - alternating string of 1 and 0s
E - 6 -> 101010, 4 -> 1010
P - iterate through size (which is a num)
    concatonate either 1 or 0, keep alternating till the end of the loop
        - add 1 to return string if i is even, and 0 if odd
 */

function stringy(size) {
  let returnString = "";
  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      returnString += "1";
    } else {
      returnString += "0";
    }
  }

  return returnString;
}

// Using Ternary
function stringy(size) {
  let returnString = "";
  for (let i = 0; i < size; i++) {
    i % 2 === 0 ? (returnString += "1") : (returnString += "0");
  }
  return returnString;
}

// Refactor more; start from 1 up to size

function stringy(size) {
  let returnString = "";
  for (let i = 1; i <= size; i++) {
    returnString += i % 2;
  }
  return returnString;
}
