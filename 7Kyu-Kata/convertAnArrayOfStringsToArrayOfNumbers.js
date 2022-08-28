//7 kyu Convert an array of strings to array of numbers
// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
// You need to cast the whole array to the correct type.
// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
// ie:["1", "2", "3"] to [1, 2, 3]
// Note that you can receive floats as well.
//P: array of STRINGS
//R: Same array but with NUMBERS
//E: see above
//Pseudocode:
        //map an array, but use Number primitive
//my solution:
function toNumberArray(stringarray){
    return stringarray.map(e => Number(e))
}
//Arrow Syntax:
const toNumberArray = stringarray => stringarray.map(e => Number(e))
//Test Case:
console.log(toNumberArray(["1", "2", "3"]))