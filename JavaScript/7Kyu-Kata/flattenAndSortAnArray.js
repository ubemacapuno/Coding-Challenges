// 7 kyu Flatten and sort an array
// Challenge:
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
// Example:
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
// Addendum:
// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well
//Parameters: 2-d array of integers
//Return: 1-d array sorted
//Example: see above
//Pseudocode:
    //Declare an array that we will return (returnArray) at the end
    //Loop through the elements of the multi-dim array and push each element into the returnArray
    //Sort returnArray in ascending order and return it
//My solution:
"use strict";
function flattenAndSort(array) {
    let returnArray = []
    array.forEach((e)=>returnArray.push(e))
    return returnArray.flat().sort((a,b)=>(a-b))
}
//Refactored (shortened but not as readable):
const flattenAndSort = array => array.flat().sort((a,b)=>a-b)
//Test Case:
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))