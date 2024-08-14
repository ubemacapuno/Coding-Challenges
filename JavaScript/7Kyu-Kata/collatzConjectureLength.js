// 7 kyu Collatz Conjecture Length
// The Collatz Conjecture states that for any natural number n, if n is even, divide it by 2. If n is odd, multiply it by 3 and add 1. If you repeat the process continuously for n, n will eventually reach 1.
// For example, if n = 20, the resulting sequence will be:
// [ 20, 10, 5, 16, 8, 4, 2, 1 ]
// Write a program that will output the length of the Collatz Conjecture for any given n.
// In the example above, the output would be 8.
//Parameter: given number n
//Return: Length of the collatz conjecture array
//Example: 
    // 20 -> 8
    // 15 -> 18
//Pseudocode: 
    //Declare a return array called collatz array, which will equal [n], and we will push to this array
    //Write out the collatz conjecture:
        //have condition:
            //if n is even: divide by 2. Push to the array
            //If odd, multiply by 3 and add 1. Push to the array

    //return the length of the array at the end

    function collatz(n) {
        let collatzArray = []
        while (n != 1){
            if(n%2 === 0){
                collatzArray.push(n/2)
                // console.log(collatzArray)
                n = n/2
            }else{
                collatzArray.push(3 * n + 1)
                // console.log(collatzArray)
                n = 3 * n + 1
            }
        }
        return collatzArray.length + 1
    }
    //Test Case
    console.log(collatz(73567465519280238573)) //561