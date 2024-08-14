// 8 kyu Count by X 06/05/2022
// Create a function with two arguments that will return an array of the first (n) multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).
// Examples:
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
//P: 2 numbers
//R: Array of number(s)
//E: countBy(2,5) === [2,4,6,8,10]
//Psuedocode:
    //for loop that goes from 1 to less than or equal to length n
        //let z = [] ; this array is empty but will the contain multiples of x
        //for(i=0;i<n;i++), push(i*x)
//My solution:
function countBy(x, n) {
    let z = [];
    for(i=1;i<=n;i++){
        z.push(i*x)
    }
    return z;
}
//Test Case:
// console.log(countBy(2,5))