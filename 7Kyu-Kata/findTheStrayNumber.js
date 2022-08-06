// 7 kyu Find the stray number
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
//Parameters: odd-length array of integers (odd-length >= 3)
//Return: return the single different number
//Examples: see above
//Pseudocode:
        //sort the array from least to greatest.
        //if element at index 0 is the same as element as index 1 (meaning the stray number is NOT located at index 0 and 1), then return index[array.length-1]. Otherwise, return element at index 0
//My Solution:
function stray(numbers) {
    numbers.sort((a,b)=>a-b)
    return Number(numbers[0]) === Number(numbers[1]) ? Number(numbers[numbers.length-1]) : Number(numbers[0])
  }
//Test case:
console.log(stray([1, 1, 2,1,1,1]))