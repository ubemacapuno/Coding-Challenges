//*** Practice on 4/3/22 *** 

//Write a function called repeatStr which repeats the given string string exactly n times.
// My Answer:
// function repeatStr (n, s) {
//   return String(s.repeat(n)); //syntax is repeat(value)
// }
// Arrow Syntax Answer from CodeWars:
// repeatStr = (n, s) => s.repeat(n)

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// My Answer:
// function greet(name){
//   return (`Hello, ${name} how are you doing today?`)
// }

// Solved with Arrow Syntax:
// const greet = name => `Hello, ${name} how are you doing today?`;

// Given an array of integers your solution should find the smallest integer.
// My Answer:
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       let sortedArray = args.sort((a,b) => a-b); //This sorts the array from smallest to largest
//       return (sortedArray[0]); 
//     }
//   }
  
//   ANOTHER SOLUTION using Math.min(...args):
//   class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }
//
//
//Take a string as its argument, and return a string with every word replaced by the explanation to everything ("sex"), according to Freud. 
//Note that an empty string, or no arguments, should result in the ouput being ""(empty string).
//
//function toFreud(string){
//  return String.replace(/[^\s]+/g, "sex");
//}