// 6 kyu Count characters in your string
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.
//P: string with characters
//R: Object with each character as a key, and value to represent how many times the character shows up in the string. If string is empty, object should be empty object literal
//E: aba -> {'a': 2, 'b': 1}
//Pseudocode:
        //Declare an empty object literal that we will return at the end
        //split the string into an array
        //use forEach:
            //if object[element] is true (meaning the letter is already in the object), then increase object[element] by 1
            //If object[element] is false (meaning the letter is NOT yet in the object), then object[element] = 1. Basically we are recording we saw it one time into the object.
        //return the object
//My solution:
function count (string) {  
    let returnObject = {}
    let stringArray = string.split('')
    stringArray.forEach( e => {
      if(returnObject[e] == true){
        returnObject[e]++
      }else{
        returnObject[e] = 1
      }
    })
    return returnObject
  }
//Refactored - removed stringArray variable, used ternary:
function count (string) {  
    let returnObject = {}
    string.split('').forEach( e => returnObject[e] ? returnObject[e]++ : returnObject[e] = 1 )
    return returnObject
  }