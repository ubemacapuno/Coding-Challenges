// 7 kyu All Star Code Challenge #16
// This Kata is intended as a small challenge for my students
// All Star Code Challenge #16
// Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.
// noRepeat("aabbccdde") // => "e"
// noRepeat("wxyz") // => "w"
// noRepeat("testing") // => "e"
// Note: ONLY letters from the english alphabet will be used as input There will ALWAYS be at least one non-repeating letter in the input string
//p: string
//r: returns first letter in the string that is not repeated in the entire string
//e: See above examples
//Pseudocode:
//          iterate through the string.
//          if indexOf(str[i]) is the same as lastIndexOf(str[i]), then return str[i]
//          This will be correct, because during the loop, the function will grab the first index, comparing to the last index; if there is only one instance of the letter, the indexes will be the same!
//          Otherwise, it will continue down the loop till it finds the character that does not repeat.
//My solution:
function noRepeat(str) {
    for(i=0;i<str.length;i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            return str[i]
        }
    }
}
//Other solution frmo other users using for...of loop:
function noRepeat(str) {  
    for(var i of str) if(str.split(i).length == 2) return i
  }
//Test cases:
// noRepeat("aabbccdde") // => "e"
// noRepeat("wxyz") // => "w"
// noRepeat("testing") // => "e"
console.log(noRepeat("aabbccdde"))