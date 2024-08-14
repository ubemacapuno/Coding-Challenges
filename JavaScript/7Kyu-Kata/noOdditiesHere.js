// 7 kyu No oddities here
// Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers. Return the good values in the order they are given.
//P Array of nums
//R same array but without the odd nums
//Examples
    // assert.deepEqual( noOdds( [0,1] ), [0] )
    // assert.deepEqual( noOdds( [0,1,2,3] ), [0,2] )
//Pseudocode:
  //Use arr.filter method and filter for even numbers only (n%2===0), and return.
//My solution:
const noOdds = values => values.filter(e=>e%2===0)