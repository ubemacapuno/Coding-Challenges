// 7 kyu Array element parity
// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.
// Examples:
// [1, -1, 2, -2, 3] => 3
// 3 has no matching negative appearance
// [-3, 1, 2, 3, -1, -4, -2] => -4
// -4 has no matching positive appearance
// [1, -1, 2, -2, 3, 3] => 3
// (the only-positive or only-negative integer may appear more than once)
//P: Given an array of integers
//R: Return the integer that does not have a +/- pair
//E: see above examples
//Pseudocode:
    //Use a for loop; iterate through the array. If in the look, arr.includes arr[i] doesn't contain -1 * arr[i], then push arr[i] to a return array
    //For a test case that contains double of an element, we will return only element 0 instead of the whole array
//My solution - using includes array method:
function solve(arr){
    let returnArray = []
    for(let i=0; i<arr.length; i++){
        if(arr.includes(-arr[i]) === false){
            returnArray.push(arr[i])
        }
    }
    return returnArray[0]
};
//Test Case
console.log(solve([1, -1, 2, -2, 3, 3]))