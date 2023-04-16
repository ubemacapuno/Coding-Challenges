/**
 * LeetCode Easy - Remove All Adjacent Duplicates In String
 * Parameters: String of lowercase english letters
 * Return: String after all duplicate removals have been made.
 * Examples:
 *  "abbaca" -> "ca"
 *  "azxxzy" -> "ay"
 * Pseudocode (slow method):
 *  - make an array of letters from the given string (string.split(''))
 *  - make a boolean to track foundDuplicates
 *  - Loop through the array if foundDuplicates is true
 *      - set foundDuplicates to false within the loop. At the end, we will set to true if a duplicate is found
 *      - If the element in index + 1 === element in current index,
 *      - splice out both elements
 *      - set found duplicates to true
 *  - Return the array as a string (join(''))
 * Pseudocode (faster method using stack):
 *  - Use a stack/array data structure
 *  - Loop through the length of string 's'
 *  - if the stack.length is greater than 0 and the element at stack.length-1 is the same as s[i]
 *    - remove the last element from the stack
 *  - Otherwise, add s[i] to the stack
 *  - Convert the stack to a string using .join('')
 */

//TOO SLOW SOLUTION lol
var removeDuplicates1 = function (s) {
  let sArray = s.split("");
  let foundDuplicates = true;

  //time complexity is too large here for LeetCode due to loop within the loop oops
  while (foundDuplicates) {
    foundDuplicates = false;
    for (let i = 0; i < sArray.length - 1; i++) {
      if (sArray[i] === sArray[i + 1]) {
        sArray.splice(i, 2);
        foundDuplicates = true;
      }
    }
  }
  return sArray.join("");
};

//Stack Method - less time complexity
var removeDuplicates2 = function (s) {
  let stack = [];
  //This solution, with just a single loop
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop(); //pop off the last element if it's the same as the current character
    } else {
      stack.push(s[i]); //Otherwise, push it into the stack
    }
  }
  return stack.join("");
};

//Test Cases:
console.log(removeDuplicates1("abbaca"));
console.log(removeDuplicates1("azxxzy"));
console.log(removeDuplicates2("abbaca"));
console.log(removeDuplicates2("azxxzy"));
