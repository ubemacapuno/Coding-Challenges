// 6 kyu Break camelCase
// Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
//P: Given a string
//R: Break up the camel casing, placing a string between words
//E: See examples above
//Pseudocode:
    //Have an empty string that we will add to and return at the end.
    //Use a loop which will iterate through the string. 
    //If a capital letter is found, add a space plus the letter to the returnString.
    //Otherwise just add the character to the returnString
// my solution:
function solution(string) {
    let returnString = ""
    for(let i=0; i<string.length;i++){
        if(string[i] === string[i].toUpperCase()){
            returnString += ` ${string[i]}`
        }else{
            returnString += `${string[i]}`
        }
    }
    return returnString
}
//Test Case:
console.log(solution(''))