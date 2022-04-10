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
//
//
//Create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeChar(str){
//     if (str.length < 2){
//         return str;
//     }else{
//     return str.slice(1,str.length-1)
//     }
// }

// There are many ways to browse an array element by element.
// One way is to use a for loop. Think up a for loop to iterate a given array:
// const movies = ["the wolf of wall street", "Zootopia", "babysitting"];
// for (i=1; i < movies.length; i++){
//     console.log(movies[i]);
// }
//Now think up of a way to iterate (create and show) the following given array using forEach():
//movies.forEach(element => {
//     console.log(element);
// });



//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
// function multiplyAndAlertProduct(arr){
//     let product = 1;
//     arr.forEach(element => product *= element);
//     alert (product);
// }


// Write a function which calculates the average of the numbers in a given list:
// Note: Empty arrays should return 0.

// function find_average(arr) {
//     let result = 0;
//     if (arr.length === 0) {
//     return 0;
//     }else{
//     arr.forEach (element => result += element);
//     console.log(result / arr.length);
//     }
//     }


//Complete the solution so that it reverses the string passed into it.
// function solution(str){
//     return str.split("").reverse().join("");
//   }

// Arrow SyntaxError
// const solution = str => str.split("").reverse().join("");

var isAnagram = function(test, original) {
    let test1 = test.split("").sort();
    let original1 = original.split("").sort();
    if (test1.toLowerCase.toString() === original1.toLowerCase.toString()){
        console.log("true");
        return true;
    }else{
        console.log("false");
        console.log(test1, original1);
        console.log(test, original);
        return false;
    }
};
    
//     if (JSON.stringify(test1).toLowerCase === JSON.stringify(original1).toLowerCase){
//         console.log("true");
//         console.log(JSON.stringify(test1));
//         console.log(JSON.stringify(original1));
//         return true;
//     }else{
//         console.log("false");
//         console.log(test1, original1);
//         console.log(test, original);
//         return false;
//     }
// };

isAnagram("dumble", "bumble");
