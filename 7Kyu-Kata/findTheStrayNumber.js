// 7 kyu Recursion #2 - Fibonacci
// Do you know recursion?
// This is a kata series that you can only solve using recursion.
// ##2 - Fibonacci number
// In mathematical terms, the sequence f(n) of fibonacci numbers is defined by the recurrence relation
// f(n) = f(n-1) + f(n-2)
// with seed values
// f(1) = 1 and f(2) = 1
// #Your task
// You have to create the function fibonacci that receives n and returns f(n). You have to use recursion.
//Parameters: number n
//Return: return f(n)
//E: f(1) = 1 and f(2) = 1
//Pseudocode:
    //if n is 1 or less than 1, return n
    //Otherwise, return function(n-1) + function(n-2) (this is the fibonnaci formula mentioned above)
//My solution:
function stray(numbers) {
    numbers.sort((a,b)=>a-b)
    return Number(numbers[0]) === Number(numbers[1]) ? Number(numbers[numbers.length-1]) : Number(numbers[0])
  }
//Test case:
console.log(stray([1, 1, 2,1,1,1]))