//7Kyu Largest pair sum in array
// Given a sequence of numbers, find the largest pair sum in the sequence.
// For example
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.
//P given a sequence of numbers
//R return the largest pair sum in the sequence
//E See examples
//Pseudocode
// Sort the array
// Return the sum of the last and second-to-last index

//My solution:
function largestPairSum (numbers) {
    let sortedArray = numbers.sort((a,b) => (a-b))
    return sortedArray[sortedArray.length - 1] + sortedArray[sortedArray.length -2]
  }
//Test case:
console.log(largestPairSum([-100,-29,-24,-19,19]))