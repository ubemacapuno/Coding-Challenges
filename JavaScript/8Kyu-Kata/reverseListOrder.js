// 8 kyu Reverse List Order
// In this kata you will create a function that takes in a list and returns a list with the reverse order.
//Parameter: given array
//Return: return the array in reverse
//Example:
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]
//Pseudocode:
//My solution:
function reverseList(list) {
    return list.reverse()
}
// //Refactored to arrow function:
const reverseList = list => list.reverse()
//Solution without using reverse() array method:
//Declare an empty array called returnArray
//Iterate through 'list' array using a loop, and use unshift() method to add to the returnArray
function reverseList(list) {
    let returnArray = []
    list.forEach(element => returnArray.unshift(element))
    return returnArray
}
//Test Case:
console.log(reverseList([1, 2, 3, 4]))