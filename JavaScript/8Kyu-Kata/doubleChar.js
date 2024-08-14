// 8 kyu Double Char
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!
//P: String
//R: Return string in which each character is repeated once
//E: See examples above
//Pseudocode:
    //Declare an empty string
    //Use a for loop to iterate through the string argument
    //During each iteration, add the string[i] + string[i] to the declared string
    //Return the string
//My solution:
function doubleChar(str) {
    let returnString = ""
    for (let i=0; i<str.length; i++){
        returnString += str[i] + str[i]
    }
    return returnString
  }
//Test Case
console.log(doubleChar("1234!_"))