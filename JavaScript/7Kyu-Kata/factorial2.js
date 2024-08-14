// 7 kyu Factorial
// Your task is to write function factorial.
//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n
//P: number
//R: number! (product of all positive integers less than or equal to n)
//Examples:
// Test.assertEquals(factorial(0), 1);
// Test.assertEquals(factorial(1), 1);
// Test.assertEquals(factorial(4), 24);
// Test.assertEquals(factorial(7), 5040);
// Test.assertEquals(factorial(17), 355687428096000);
//Pseudocode:
        //declare a variable that will accumulate the product; this will be returned at the end
        //use a for loop. from 1 to n, keep multiplying to the declared variable.
function factorial(n){
    let accumulator = 1
    for(let i=1;i<=n;i++){
        accumulator *= i
    } 
    return accumulator
}
//Test Case:
// console.log(factorial(0))