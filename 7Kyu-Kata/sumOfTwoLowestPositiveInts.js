// 7 kyu Sum of two lowest positive integers 06/07/2022
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
//P: array of min 4 +integers
//R: sum (num) of the two LOWEST positive nums
//E:[10, 343445353, 3453445, 3453545353453] should return 3453455.
//Pseudocode:
    //Sort the array smallest to largest .sort((a,b)=>a-b)
    //array is now mutated - take the sum of array[0] + array[1]
// My solution:
function sumTwoSmallestNumbers(numbers) {  
    let sortedNums = numbers.sort((a,b)=>a-b)
    return sortedNums[0] + sortedNums[1]
  }
  //Refactored - 
  //since numbers gets mutated after being sorted, 
  //there is no need for an extra variable. You can just return numbers[0]+numbers[1]:
  function sumTwoSmallestNumbers(numbers) {  
      numbers.sort((a,b)=>a-b)
      return numbers[0] + numbers[1]
    }
  //Test case:
//   console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))