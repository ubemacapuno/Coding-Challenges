// 6 kyu Find the unique number
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.
//P: Array with numbers
//R: the unique number in the array
//E: See above
//Pseudocode:
    //Sort the array from least to greatest
    //if array[0] === array[1] then return array[array.length], otherwise return array[0]
//My solution:
function findUniq(arr) {
    arr.sort((a,b) => a-b)
    return arr[0] === arr[1] ? arr[arr.length-1] : arr[0]
}
//using pop and shift:
function findUniq(arr) {
    arr.sort((a,b) => a-b)
    return arr[0] === arr[1] ? arr.pop() : arr.shift()
}

//Test cases:
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 3, 10, 3, 3, 3 ]))