//7 kyu Factorial 06/09/2022
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
//P: integer that is NOT below 0 or above 12
//R: Return the factorial of given integer. RangeError if not in range.
//E:
//Psuedocode: 
        //conditional for range error
        //return the product of n times every positive integer less than n
        //let accumulator = 1
        //for(i=1;i<=n;i++){ 
        //     accumulator *= i
        // } return accumulator
//My solution:
function factorial(n){
    let accumulator = 1
    if(n < 0 || n > 12){
      throw new RangeError
    }else{
        for(i=1;i<=n;i++){
            accumulator *= i
        }
        return accumulator
    }
  }
//Test Case:
// console.log(factorial(0)) //3