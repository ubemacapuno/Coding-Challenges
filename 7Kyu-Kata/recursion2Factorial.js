
// 7 kyu Recursion #1 - Factorial
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,
// 5! = 5 * 4 * 3 * 2 * 1 = 120.
// The value of 0! is 1.
// #Your task
// You have to create the function factorial that receives n and returns n!. You have to use recursion.
//Parameters: integer n
//Return: return n! but must use recursion in the function
//Examples:
//   it(`factorial(0)`, () => {
//     Test.assertEquals(factorial(0), 1);
//   });
//   it(`factorial(1)`, () => {
//     Test.assertEquals(factorial(1), 1);
//   });
//   it(`factorial(2)`, () => {
//     Test.assertEquals(factorial(2), 2);
//   });
//   it(`factorial(3)`, () => {
//     Test.assertEquals(factorial(3), 6);
//   });
// });
//Pseudocode:
        //Think of having to call factorial(something)
        //If n is 0, return 1
        //return n * factorial(n-1), this is because with factorials, you are multiplying all integers from n down to 1 (once it hits 0, 1 is returned).
//My solution:
const factorial = n => {
    return n === 0 ? 1 : n * factorial(n-1)
};
//Refactored:
const factorial = n => n === 0 ? 1 : n*factorial(n-1)