// 8 kyu Exclamation marks series #1: Remove an exclamation mark from the end of string
// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
//P: String
//R: Same string but with exclamation mark removed if present at the end of the original.
//E: See above examples
//Pseudocode:
//          if charAt(end of string) is "!", then splice it out and return the string
//My solution:
function remove (string) {
    if(string.charAt(string.length-1)==="!"){
        return string.slice(0,string.length-1)
    }else{
        return string
    }
  }
//Refactored:
const remove = string => string.charAt(string.length-1)==="!" ? string.slice(0,string.length-1) : string
//Refactored - for slice, going from RIGHT TO LEFT, you can use negative indices:
const remove = string => string.charAt(string.length-1)==="!" ? string.slice(0,-1) : string
//Test Cases:
console.log(remove("hi!!"))
console.log(remove("hi"))