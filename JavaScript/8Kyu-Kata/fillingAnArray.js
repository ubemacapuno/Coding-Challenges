//8 kyu Filling an array (part 1)
// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:
// arr(5)  => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.
//P:
//R: An array with the numbers 0 to N-1
//E: arr(5) // => [0,1,2,3,4]
//Pseudocode:
    //Set an empty array []
    //Use a loop going from 0 to n.length-1
//My solution:
function arr(N){
    let returnArray = []
    for (i=0; i < N; i++){
        returnArray.push(i)
    }
    return returnArray
}
//Test:
// console.log(arr(5))