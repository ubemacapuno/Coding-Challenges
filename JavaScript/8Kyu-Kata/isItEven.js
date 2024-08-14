// 8 kyu Is it even? 06/16/2022
// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.
//P: number, can be float
//R: true or false
//E: 0.5 returns false, 1 returns false, -4 returns true
//Psuedocode: if n (rounded DOWN) % 2 == 0, return true. Otherwise false.
//My solution:
function testEven(n) {
    return Math.ceil(n) % 2 == 0 ? true : false
}
//My solution refactored:
const testEven = n => Math.ceil(n) % 2 == 0 ? true : false
//Refactored:
const testEven = n => Math.ceil(n) % 2 == 0 
//Refactored - Math.ceil not needed:
const testEven = n => n % 2 == 0 
//test cases:
// console.log(testEven(-4))
// console.log(testEven(1))
// console.log(testEven(0.5))
// console.log(testEven(200.5))
// console.log(testEven(200))