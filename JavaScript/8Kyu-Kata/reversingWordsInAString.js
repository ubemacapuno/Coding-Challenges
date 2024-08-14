// 8 kyu Reversing Words in a String
// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
// Example (Input --> Output)
// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
//P: Given string
//R: Return string, but with the words reversed
//E: See examples above
//Pseudocode:
        //convert string to array of words (.split(' ') method), reverse the array, and join. Then return the string.
//My solution:
function reverse(string){
    return string.split(' ').reverse().join(' ')
  }
console.log(reverse("Hi There."))
//Refactored using arrow function syntax:
const reverse = string => string.split(' ').reverse().join(' ')