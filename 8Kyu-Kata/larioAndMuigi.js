// 8 kyu Lario and Muigi Pipe Problem 06/07/2022
// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.
// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// Example
// Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
//P: array of numbers
//R: array of numbers that increment by 1 for each index from the MIN up to the MAX
//E: Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
//Psuedocode:
    //Find the min and max of the array. I usually sort least to greatest and get arr[0] and arr[arr.length-1] to get the min and max,
    //but let's try using Math.min(...arr) and Math.max(...arr) for this solution.
    //Then do a for loop from the Math.min value to the Math.max value, and incrementing by one. Push these incrementing nums to an array.
    //Return that array.
//My solution:
function pipeFix(numbers){
    let pipefixArray = []
    let numbersMin = Math.min(...numbers)
    let numbersMax = Math.max(...numbers)
    for(i=numbersMin;i<=numbersMax;i++){
        pipefixArray.push(i)
    }
    return pipefixArray
}
    //Test Case:
    // console.log(pipeFix([1,2,3,5,6,8,9]))