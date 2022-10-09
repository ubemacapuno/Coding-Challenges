
// 8 kyu Vowel remover
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

//P string
//R string with lowercase vowels removed
//E see above
//Pseudocode: 
    //iterate through the string, and if a lowercase vowel is seen, don't include it in the return
//My solution:
function shortcut (string) {
    let stringArr = string.split('')
    return stringArr.filter(e => e!== "o" && e!== "e" && e !== "i" && e != "a" && e !== "u")
  }

//refactored:
const shortcut = string => string.split('').filter(e => e!== "o" && e!== "e" && e !== "i" && e != "a" && e !== "u").join('')
//Test case:
console.log(shortcut("helloo!"))