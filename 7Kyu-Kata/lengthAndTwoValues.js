// 7 kyu Length and two values.
// Given an integer n and two other values, build an array of size n filled with these two values alternating.
//P: integer n and two values
//R: array of size n, with the values alternating
// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []
//Pseudocode:
    //declare an empty array, we will push to this and return at the end
    //use a for loop from 0 to <n , in which we will push first value and then push second value to the array
function alternate(n, firstValue, secondValue){
    let returnArray = []
    for(let i=0;i<n;i++){
        returnArray.push(firstValue)
        returnArray.push(secondValue)
    }
    return returnArray.slice(0,n)
}
//Test cases:
console.log(alternate(20, 'blue', 'red'))
console.log(alternate(11, true, false))
console.log(alternate(0, "lemons", "apples"))