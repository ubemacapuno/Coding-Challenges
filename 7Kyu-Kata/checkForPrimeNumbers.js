// 7 kyu Check for prime numbers
// In this kata you will create a function to check a non-negative input to see if it is a prime number.
// The function will take in a number and will return True if it is a prime number and False if it is not.
// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Examples(input --> output)
// 0 --> false
// 1 --> false
// 2 --> true
// 11 --> true
// 12 --> false
//P number n
//R boolean; true if prime, else false
//E see above
//Psuedocode:
    //if n % any number less than n == 0 return false, else true
    //use a for loop to iterate through values less than n up to n; for i=2;i<n;i++
    //special cases, 2 is prime, so return true if n is 2 (won't get caught in the above loop)
    //Anything less than 2 is NOT prime, return false (also won't get caught in the above loop)
//My solution:
function isPrime(n) {
    if(n<2){
        return false
    }else if(n===2){
        return true
    }
    for(i=2;i<n;i++){
        if(n%i === 0){
            return false
        }
    } return true
}
//Refactored - else if (n===2) is not necessary, because 2 DOES get caught in the loop:

function isPrime(n) {
    if(n<2){
        return false
    }
    for(i=2;i<n;i++){
        if(n%i === 0){
            return false
        }
    } return true
}

//Tests:
// console.log(isPrime(0))
// console.log(isPrime(1))
// console.log(isPrime(2))
// console.log(isPrime(11))
// console.log(isPrime(12))
// console.log(isPrime(61))
// console.log(isPrime(571))
// console.log(isPrime(573))
// console.log(isPrime(25))