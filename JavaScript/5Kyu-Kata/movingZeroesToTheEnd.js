// 5 kyu Moving Zeros To The End
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
//P: Array of any data type
//R: Return the same array but all zeroes are moved to the end.
//E: See above
//Psueudocode:
    //create an array that filters out zeroes
    //create another array that filters for only zeroes
    //concatonate the array without zeroes + array with zeroes so that zeroes are at the end of the array
//My solution:
function moveZeros(arr) {
    let arrNoZero = arr.filter(e => e !== 0 )
    let arrOnlyZero = arr.filter(e=>e===0)
    return arrNoZero.concat(arrOnlyZero)
}  
//Refactured:

const moveZeros = arr => arr.filter(e => e !== 0 ).concat(arr.filter(e=>e===0))

//Test Case:
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))