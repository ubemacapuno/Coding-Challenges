// 8 kyu Sum without highest and lowest number
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
//P: array of numbers
//R: Sum of array except highest and lowest element by value
//E: See above examples
//Pseudocode:
    //If array.length < 1 or array.isempty == true or array blah blah return zero
    //sort the array
    //splice from index 0 to index.length-1
    //reduce/sum and return sum
//My solution:
function sumArray(array) {
    if(!array || array.length < 1 ){
        return 0
    }else{
        let sort = array.sort((a,b)=>a-b)
        let spliced = sort.splice(1,sort.length-2)
        console.log(spliced)
        return spliced.reduce((a,c)=>a+c,0)
    }
}
//Refactored:
const sumArray = array => !array || array.length < 1 ? 0 : array.sort((a,b)=>a-b).splice(1,array.length-2).reduce((a,c)=>a+c,0)
//Refactored - || array.length < 1 is not needed: 
const sumArray = array => !array ? 0 : array.sort((a,b)=>a-b).splice(1,array.length-2).reduce((a,c)=>a+c,0)
//Test case:
// console.log(sumArray([1,1,11,2,3]))