// 7 kyu Sum of Minimums!
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
// For Example:
// [ [ 1, 2, 3, 4, 5 ], [ 5, 6, 7, 8, 9 ], [ 20, 21, 34, 56, 100 ]]
        // #  minimum value of row is 1
        // #  minimum value of row is 5
        // #  minimum value of row is 20
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.
// Note: You will always be given a non-empty list containing positive values.
// ENJOY CODING :)
//P: 2-D Array of size m*n
//R: return the sum of the minimum values in each row
//E: see above 
//Pseudocode:
    //map an array containing only the subarray's minimum values
    //use reduce method to get the sum of the newly mapped array and return that sum
//My solution:
function sumOfMinimums(arr) {
    let arrayOfMinValues = arr.map(e=>(Math.min(...e)))
    return arrayOfMinValues.reduce((a,c) => a+c,0)
}
//Best practices solution - combines map and reduce and uses less memory:
function sumOfMinimums(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0);
}
//Test case:
console.log(sumOfMinimums([ [ 1, 2, 3, 4, 5 ], [ 5, 6, 7, 8, 9 ], [ 20, 21, 34, 56, 100 ]]))