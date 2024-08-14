// 7 kyu Fizz Buzz
// Return an array containing the numbers from 1 to N, where N is the parametered value.
// Replace certain values however if any of the following conditions are met:
// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.
// Method calling example:
// fizzbuzz(3) -->  [1, 2, "Fizz"]
//Parameters: number N (never less than 1)
//Return: array from 1 to N, but replacing numbers with Fizz, Buzz, or FizzBuzz depending on if they meet the three conditions
//Examples: See above
//Pseudocode: 
        //Declare a return array
        //Loop from 1 to N, and push to the array each number, but return fizz/buzz/fizzbuzz for certain numbers meeting the conditions
        //Return the array

//My solution:
// Return an array
function fizzbuzz(n){
    let fizzbuzzArray = []
    for(let i=1;i<=n;i++){
        if(i%3===0 && i%5===0){
            fizzbuzzArray.push("FizzBuzz")
        }else if(i%3===0){
            fizzbuzzArray.push("Fizz")
        }else if(i%5===0){
            fizzbuzzArray.push("Buzz")
        }else{
            fizzbuzzArray.push(i)
        }
    }
    return fizzbuzzArray
}
//Test case:
console.log(fizzbuzz(30))