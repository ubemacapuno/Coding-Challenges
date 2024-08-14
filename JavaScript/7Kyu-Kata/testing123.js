//7 kyu Testing 1-2-3 06/25/2022
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
//P: list of strings
//R: each line prepended by the correct number
//E: See above examples
//Pseudocoode:
    //use a loop, declare variable = 0 and array = []
    //for each iteration through the array, add 1 to variable and push `${variable: [i]}` to an array, and return the array
//My solution:
var number=function(array){
    let counter = 0
    let returnArray = []
    for(i=0;i<=array.length-1;i++){
        counter++
        returnArray.push(`${counter}: ${array[i]}`)
    }
    return returnArray
}
//Similar solution but using map:
var number = function(array) {
    return array.map((item, index) => `${index + 1}: ${item}`);
  }
//Test case:
// console.log(number(["a", "b", "c"]))