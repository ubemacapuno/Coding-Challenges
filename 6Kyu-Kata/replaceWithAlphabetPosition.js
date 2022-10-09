// 6 kyu Replace With Alphabet Position
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
//P: String'
//R: String but every letter is assigned a number value (1-26)
//E: see above
//Pseudocode:
//Set text toLowerCase()
//set a variable "alphabet" that includes the whole alphabet in a string
//Declare an empty array that will be pushed to and returned and joined(' ') at the end of the function
//Iterate through "text"
  //use indexOf(text[i])
    //if -1, continue
    //Otherwise, push to the array (index + 1) since a === 1, b === 2, etc.
//Solution:
// function alphabetPosition(text) {
//     text = text.toLowerCase()
//     const alphabet = "abcdefghijklmnopqrstuvwxyz"
//     let alphabetArr = []
//     //iterate through text:
//     for (let i=0; i<text.length; i++){
//         let alphabetIndex = alphabet.indexOf(text[i])
//             //alphabet.indexOf(text[i]) returns -1 for characters that aren't in alphabet variable.
//             //Don't push anything to the array and continue the interation:
//         if (alphabetIndex === -1){
//             continue
//         }else{
//             //Otherwise, push the index "+ 1" because per the question, a is index 1, not 0.
//             alphabetArr.push(alphabetIndex + 1)
//         }
//     }
//     return alphabetArr.join(' ')
//   }
// //Test:
// console.log(alphabetPosition("The sunset sets at twelve o' clock."))