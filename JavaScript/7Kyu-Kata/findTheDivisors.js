///7 kyu Find the divisors! 06/17/2022
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"
//P: integer n>1
//R: array with all of integer's divisors(except for 1 and the number itself), or '(integer) is prime' if n is prime
//E: (see above examples)
//Pseudocode: 
    //use a for loop and conditional: from 2 to n-1, if the number cannot evenly divide, return "n is prime"
    //Otherwise, return each number that n can divide evenly by. In the for loop, use an empty array and push each divisor to the array
//My solution:
function divisors(integer) {
    let primeChecker = 0
    let returnArray = []
    for (i=2; i <= integer - 1; i++){
        if (integer % i !== 0){
            primeChecker ++
            if (primeChecker == (integer-2)){
                return `${integer} is prime`
            }
        }else{
            returnArray.push(i)
        }
    }return returnArray
};
//Test Case:
// console.log(divisors(17))