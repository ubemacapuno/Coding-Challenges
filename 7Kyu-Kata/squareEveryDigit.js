//7 kyu Square Every Digit 05/31/2022
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.
// Note: The function accepts an integer and returns an integer
//my solution
function squareDigits(num){
    return +num.toString().split('').map(e=>(e*1)**2).join().replace(/,/g,'')
  }
//Arrow Syntax:
const squareDigits = num => +num.toString().split('').map(e=>(e*1)**2).join().replace(/,/g,'')

// Test Cases:
// console.log(squareDigits(9119))
// console.log(squareDigits(3212))
// console.log(squareDigits(2112))
// console.log(squareDigits(0))
