// 8 kyu Removing Elements
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!
//P: Array (never empty)
//R: Array with every second element removed from the array
//E: See above
//Pseudocode:
    //Map a new array referencing the old array, but only map elements that are in indexes that are even?
    //I ended up using FILTER method, not map. Filter for indexes that are even (i%2===0)
//My solution (filter):
function removeEveryOther(arr){
    return arr.filter((e,i)=> i % 2 === 0)
  }
//My solution using Map method:
function removeEveryOther(arr){
    let returnArr = []
    arr.map((e,i)=> i % 2 === 0 ? returnArr.push(e) : null)
    return returnArr
  }
//Refactored arrow function:
const removeEveryOther = arr => arr.filter((e,i)=> i % 2 === 0)
//Test Case:
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))