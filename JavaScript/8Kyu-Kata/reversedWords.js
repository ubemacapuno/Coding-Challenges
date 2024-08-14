//8 kyu Reversed Words
// Complete the solution so that it reverses all of the words within the string passed in.
// Example: "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
//My solutions:
// Function declaration:
function reverseWords(str){
    return str.split(" ").reverse().join(' ')
  }
//Arrow function:
const reverseWords = s => s.split(" ").reverse().join(' ')
// Test case:
// console.log(reverseWords("The greatest victory is that which requires no battle"))