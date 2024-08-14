// 8 kyu Simple multiplication
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
//P: Integer
//R: integer*8 if integer is even. Otherwise integer*9
//Example: 2 -> 16, 1 -> 9
//Pseudocode: use conditional - if even, do this. otherwise, do that
//my solution
function simpleMultiplication(number) {
    return number % 2 === 0 ? number*8 : number*9
}
//refactored:
const simpleMultiplication = number => number % 2 === 0 ? number*8 : number*9