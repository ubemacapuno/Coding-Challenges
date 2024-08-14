// 8 kyu Contamination #1 -String-
// An AI has infected a text with a character!!
// This text is now fully mutated to this character.
// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!
// Note: The character is a string of length 1 or an empty string.
// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"
//P: String and single character
//R: Return the string but replaced with the single character. However return empty string if string or character are empty
//E:
        // Test.assertEquals(contamination("abc","z"), "zzz")
        // Test.assertEquals(contamination("","z"), "")
        // Test.assertEquals(contamination("abc",""), "")
        // Test.assertEquals(contamination("_3ebzgh4","&"), "&&&&&&&&")
        // Test.assertEquals(contamination("//case"," "), "      ")
//Pseudocode:
    //Use a for loop. up to the length of the string, add "char" to a return string
//My solution:
function contamination(text, char){
    let returnString = ""
    for(let i=0; i<text.length; i++){
        returnString += char
    }
    return returnString
  }
console.log(contamination("ffff","g"))