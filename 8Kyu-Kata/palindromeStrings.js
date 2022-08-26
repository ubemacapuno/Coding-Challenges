// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.
// Examples(Input ==> Output)
// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false
//P: Given NUMBER or STRING
//R: true if palindrome, false if not palindrome
//E: see examples above
//Pseudocode:
        //If input is a number, convert it to a string first and set to a variable
        // if the string is equal to the string.split('').reverse().join('') return true else return false
//My solution:
function isPalindrome(line) {
    return String(line) === String(line).split('').reverse().join('')
  }
//Test
console.log(isPalindrome(5454))
//Arrow syntax:
const isPalindrome = line => String(line) === String(line).split('').reverse().join('')