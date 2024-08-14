// 7 kyu Reverse list - 7/21/2022
// Write reverseList function that simply reverses lists.
//P: Array
//R: return array but reversed
//E: Use "reverse"
//Pseudocode: 
    //Use array.reverse() method to return a reversed array
    //Try using a loop for another solution. Declare an empty array, add to the array during a loop, return the array
//My solutions:
function reverseList(arr) {
    return arr.reverse();
  }
//Refactored - Arrow syntax:
const reverseList = arr => arr.reverse()
//My solution using for loop:
function reverseList(arr) {
    let reversedArray = []
    for(let i=0; i < arr.length; i++){
        reversedArray.unshift(arr[i])        
    }
    return arr.reverse();
  }
//Test Case:
console.log(reverseList([29, 30, 33, 50, 99, 100]))