// 7 kyu Summing a number's digits
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
// For example: (Input --> Output)
// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.
//P: integer
//R: Sum of the absolute value of each of the number's digits
//E: see above examples
//Pseudocode:
    //obtain the absolute value of number (or convert to positive)
    //convert number to array of numbers
    //sum the numbers in the array and return the sum
//My solution: 
function sumDigits(number) {
    let absNumber = Math.abs(number)
    //Recall how to convert number to array of numbers using String primitive, split, and map.
    let numberArray = String(absNumber).split('').map((absNumber)=>{
        return Number(absNumber)
    })
    return numberArray.reduce((a,b)=>a+b,0)
}
//Test Case:
// console.log(sumDigits(99))