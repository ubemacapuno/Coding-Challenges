//   8 kyu Is it a palindrome?
//   Write a function that checks if a given string (case insensitive) is a palindrome.
//P: String
//R: true or false
//E "hello" false "AbBa true
//Pseudocode: use reverse and toLowerCase methods; if they are equal to the string then return true. OR try using a loop without using reverse method
//my solution using a loop WITHOUT reverse:
function isPalindrome(x) {
    let rev = []
    for(let i=0; i<x.length; i++){
        rev.unshift(x[i])
    }
    return rev.join('').toLowerCase() === x.toLowerCase()
  }
//solution with reverse method:
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }
//Test Case:
console.log(isPalindrome('abbaasfa'))