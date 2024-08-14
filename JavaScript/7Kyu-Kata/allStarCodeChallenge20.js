// 7 kyu All Star Code Challenge #20
// Create a function called addArrays() that combines two arrays of equal length, summing each element of the first with the corresponding element in the second, returning the "combined" summed array.
// Raise an error if input arguments are not of equal length.
// addArrays([1,2],[4,5]); // => [5,7]
// addArrays([1,2,3],[4,5]); // => Error
//P: two arrays
//R: If both arrays are of equal length, map a new array that takes in array1[i] + array2[i]
//E: See examples above
//Pseudocode:
        //Declare empty array for return array
        //Add a condition to throw Error if lengths are not equal
        //If lengths are equal,
        //return the return array
//My solution:
function addArrays(array1, array2) {
    let returnArray = []
    if(array1.length != array2.length){
        throw new Error('Arrays not equal length')
    }else{
        for(let i=0; i<array1.length;i++){
            returnArray.push(array1[i] + array2[i])
        }
    }
    return returnArray
}
//Use map:
function addArrays(array1, array2) {
    if(array1.length != array2.length){
        throw new Error('Arrays not equal length')
    }
    return array1.map((e,i) => array1[i] + array2[i])              
}
//use ternary (very unreadable, don't actually do this in real-life scenario):
const addArrays = (array1, array2) => array1.length != array2.length ? (function(){throw new Error('Arrays not equal length')}()) : array1.map((e,i) => array1[i] + array2[i])   
//Test Cases:
console.log(addArrays([1,2,3],[4,5]))