// 7 kyu All Star Code Challenge #7
// Create a function, called compute, that accepts an integer argument, N, and returns the value of the following expression, where N is a odd positive integer given by the user
// Expression : 1 +....+ 1/(N)^2
// For example, when N = 9, compute() should evaluate the following: 1 + 1/(3)^2 + 1/(5)^2 + 1/(7)^2 + 1/(9)^2 == ~1.1838649533887629
// Note: User input of an even number OR a number less than 3 should return 0.
// compute(5); // => 1.1511111111111112
// compute(9); // => 1.1838649533887629
// compute(-1); // => 0
// compute(8); // => 0
//P: integer N
//R: value of the following expression where N is an odd positive integer (Expression : 1 +....+ 1/(N)^2)
//E: See above examples
//Pseudocode:
    //If n % 2 === 0 || n < 3, return 0
    //Set a variable that we will add to and then return at the end
    //Use a loop with the expression . . . starting from 3 up to N.
    //something like for(let i=3;i<n;i+=2){variable+1/(i)^2}
    //NOTE: the increment is i+=2 and not just the normal i++. THat is because per the expression and the example, "i" is being increased by 2
//My solution:
function compute(n){
    let expressionValue = 1
    if(n%2 === 0 || n < 3){
        return 0
    }else{
        for(let i=3;i<=n;i+=2){
            expressionValue += (1/Math.pow(i,2))
        }
        return expressionValue
    } 
}
//Test cases:
console.log(compute(-1))
console.log(compute(8))
console.log(compute(9))