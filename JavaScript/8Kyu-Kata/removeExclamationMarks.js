//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
//P: String
//R: String but without "!"
//E: Hello World! -> Hello World
//Pseudocode:
        //Use a for loop and interate through the string.
        //If the string[i] isn't "!", add it to a return string. 
        //Return the string after the loop
//My solution:
function removeExclamationMarks(s) {
    let returnString = ""
    for(let i=0; i<s.length; i++){
      if(s[i] !== "!"){
        returnString += s[i]
      }
    }
    return returnString;
  }
//Solution using replace method/regex:
function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }