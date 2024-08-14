// 7 kyu Odd or Even? 06/18/2022
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// Examples:
// Input: [0]
// Output: "even"
// Input: [0, 1, 4]
// Output: "odd"
// Input: [0, -1, -5]
// Output: "even"
//P: array of integers
//R: Sum of the array, return "odd" or "even" 
//E: See above examples
//Psuedocode:
    //If array.length < 1 return even
    // let "sum" = the reduced array. if sum % 2 == 0 return even, else return odd
//My solution:
function oddOrEven(array) {
    if(array.length < 1) {
        return "even"
    }else{
        let sum = array.reduce((a,b)=>a+b, 0)
        if (sum % 2 == 0){return "even"}else{return"odd"}
    }
 }
 //Refactored:
 const oddOrEven = array => array.reduce((a,b)=>a+b,0) % 2 == 0 ? "even" : "odd"
//Test case:
console.log(oddOrEven([0, 1, 4]))