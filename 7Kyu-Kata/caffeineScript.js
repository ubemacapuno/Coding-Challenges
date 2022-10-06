//P:non-zero integer
//R: 
    // return java if divisible by 3 
    // coffee if divisible by 3 and 4
    //If one above is true and integer is even, add script to the end of the string
    //if no condition is true return mocha missing
//E: see above
//Pseudocode:
//have a condition for the 3 and 4, coffee
//have condition for 3, java
//if coffee or java and even, add script
function caffeineBuzz(n){
    if (n % 12 === 0) return 'CoffeeScript'
    if (n % 6 === 0) return 'JavaScript'
    if (n % 3 === 0) return 'Java'
    return 'mocha_missing!'
  }

console.log(caffeineBuzz(12))