// *** Practice on 4/3/22 *** 
// /d/Documents/Google\ Drive/100Devs/Code\ Wars\ Practice
// The above is for your git location

// Write a function called repeatStr which repeats the given string string exactly n times.
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


// Take a string as its argument, and return a string with every word replaced by the explanation to everything ("sex"), according to Freud. 
// Note that an empty string, or no arguments, should result in the ouput being ""(empty string).

// function toFreud(string){
//  return String.replace(/[^\s]+/g, "sex");
// }


// Create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

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
// Now think up of a way to iterate (create and show) the following given array using forEach():
// movies.forEach(element => {
//     console.log(element);
// });



// Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
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


// Complete the solution so that it reverses the string passed into it.
// function solution(str){
//     return str.split("").reverse().join("");
//   }

// Arrow SyntaxError
// const solution = str => str.split("").reverse().join("");


// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// function isAnagram (test, original) {
//     return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
//   }

// 04/11/2022
// Write a function that will check if two given characters are the same case.
// If any of characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters and not the same case, return 0

// function sameCase(a, b){
//     if (!(a.match(/[a-z]/i) && b.match(/[a-z]/i))){
//       return -1
//     }
//     else if(a == a.toUpperCase() && b == b.toUpperCase() || a == a.toLowerCase() && b == b.toLowerCase()){
//       return 1
//     }
//     else {
//       return 0
//     }
//   }

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.(FIRST TRY!! 4.18.22)
// function getGrade (s1, s2, s3) {
//     let score = ((s1 + s2 + s3)/ 3)
//     if(score >= 90 && score <= 100){
//         return 'A'
//     }else if(score >= 80 && score < 90){
//         return 'B'
//     }else if(score >=70 && score < 80){
//         return 'C'
//     }else if(score >=60 && score <70){
//         return 'D'
//     }else if(score < 60){
//         return 'F'
//     }
//   }
// Uploading past codewars problems that didn't make it into the repo:

// We need a function that can transform a string into a number. What ways of achieving this do you know?

// var stringToNumber = function(str){
//     return str * 1;
//   }
// OTHER Solutions:
// const ways = [
//     s => +s,
//     s => s++, // why does it work?
//     s => s--,
//     s => ++s - 1,
//     s => --s + 1,
  
//     s => s * 1,
//     s => s - 0,
//     s => s / 1,
//     s => s - '',
//     s => s ** 1,
//     s => s % Infinity,
  
//     s => ~~s,
//     s => s & -1,
//     s => s | 0,
//     s => s ^ 0,
//     s => s << 0,
//     s => s >> 0,
//     s => s | s,
//     s => s & s,
  
//     s => ~s ^ -1,
//     s => ~s ^ ~0, // ~0 = -1
//     s => ~(s ^ -1),
//     s => s * !!s,
  
//     s => -1 * (~s + 1) || 0, // -1 * 0 = -0
//     s => -(~(s >>> 0) + 1) || 0,
  
//     Number,
//     parseInt,
//     parseFloat,
    
//     s => Number(s),
//     s => parseInt(s),
//     s => parseFloat(s),
  
//     s => Math.floor(s),
//     s => Math.round(s),
//     s => Math.ceil(s),
//     s => Math.min(s),
//     s => Math.max(s),
    
//     Math.floor,
//     Math.round,
//     Math.ceil,
//     Math.min,
//     Math.max,
  
//     s => eval(`+ ${s}`), // a space is needed
//     s => eval('+ ' + s), // for cases like eval(+ +12345)
  
//     s => [...s]
//       .slice(+(s[0] == '-' || s[0] == '+')) // remove the sign, if present
//       .reduce((acc,x) => +x + acc * 10)
//       * (s[0] == '-' ? -1 : 1),
//     s => [...s]
//       .slice(+(s[0] == '+')) //remove +, if present
//       .reverse()
//       .reduce((acc,x,i) => x == '-' ? -acc : acc += x * 10 ** i, 0),
//     s => ways[~~(Math.random() * ways.length)](s)
//   ];
  
//   // And now we will use all the methods in a row
  
//   const checkThemAll /* © Mylene Farmer */ = (acc, x) => acc === x ? x : NaN;
//   const stringToNumber = str => ways.map(fn => fn(str)).reduce(checkThemAll);

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if(distanceToPump > mpg * fuelLeft){
//       return false;
//     }else{
//       return true;
//     }
// }

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// function betterThanAverage(classPoints, yourPoints) {
//     let classPointsSum = classPoints.reduce((acc, c) => acc + c , 0);
//     let classPointsAveraged = classPointsSum / classPoints.length;
//     if (yourPoints > classPointsAveraged){
//         return true
//     }else{
//         return false
//     }  
//   }


// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// function boolToWord( bool ){
//     if (bool == true){
//         return "Yes"
//       }else{
//         return "No"
//       }
//     }

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// function squareSum(numbers){
//     let squareNumbers = numbers.map(element => element ** 2);
//     let sumOfSquareNumbers =squareNumbers.reduce((acc,c)=> acc + c, 0);
//     return sumOfSquareNumbers
//     }

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function even_or_odd(number) {
//     if (number % 2 === 0){
//       return "Even"
//     }else{
//       return "Odd"
//     }
    
//   }



// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// function squareOrSquareRoot(array) {
//     return array.map(x => {
//         const r = Math.sqrt(x);
//         return (r % 1 == 0) ? r : (x*x);
//       });  
//     }

// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

// function Sleigh() {}

// Sleigh.prototype.authenticate = function(name, password) {
//   if(name === "Santa Claus" && password === "Ho Ho Ho!"){
//     return true;
//   }else{
//     return false;
//   }
// };

// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// let min = function(list){
//     list.sort((a,b) => a-b);
//     return list[0];
//   }
  
// let max = function(list){
//     list.sort((a,b) => a-b);
//     return list[list.length - 1];
// }
// Test values:
// max([4,6,2,1,9,63,-134,566]);
// min([4,6,2,1,9,63,-134,566]);

// Instructions: Given an array of integers, return a new array with each value doubled.
// function maps(x){
//     return  x.map((element) => element * 2);

// }

// Instructions: We need a function that can transform a number into a string. What ways of achieving this do you know?
// function numberToString(num) {
//     return num.toString();
//   }

// Other Solutions:
// const numberToString = num => num.toString();

// numberToString = String;

// function numberToString(num) {
//   return String(num);
// }

// Instructions: Write a function that returns both the minimum and maximum number of the given list/array.
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]

// function minMax(arr){
//     arr.sort((a,b) => a-b);
//     let maxElement = arr[arr.length-1];
//     let minElement = arr[0];
//     console.log(arr);
//     console.log(maxElement);
//     console.log([minElement,maxElement]);
//   }

// Other solutions . . .
// function minMax(arr){
//     return [Math.min(...arr), Math.max(...arr)];
//   }

// const minMax = arr => [ Math.min(...arr), Math.max(...arr) ];

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// function cockroachSpeed(s) {
//     let cmPerSecond = Math.floor((s * (100000/3600)))
//     return cmPerSecond
//   }
// Other solution:
// const cockroachSpeed = s => Math.floor(s / 0.036);

// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

// my code:
// function setAlarm(employed, vacation){
//     if ((employed === true && vacation === true)||(employed === false && vacation === false)||(employed === false && vacation === true)){
//       return false
//     }else{
//       return true
//     }
//   }

// Other solution:
// function setAlarm(employed, vacation){
//     return employed && !vacation;
//   }

// Instructions: Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input) {
//     if (!input || input.length < 1){
//         return []
//     }else{
//     //return array of + numbers called positiveElements 
//     let positiveElements = input.filter(element => element > 0);
//     //return array of - numbers called negativeElements
//     let negativeElements = input.filter(element => element < 0);
//     //Reduce the negativeElements
//     let negativeElementsReduced = negativeElements.reduce((a,c)=> a + c, 0);
//     //Return length of positiveElements
//     //return value in final array
//     let output = [positiveElements.length, negativeElementsReduced];
//     console.log(output);
//     return output;
//     }
// }

// countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])

// 6 kyu
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.
// (Solved FIRST TRY!! 4/23/22)

// function solution(number){
//             let sum1 = 0;
//             let sum2 = 0;
//             if (number < 0){
//                 return 0
//             }else{
//             for(let i = 1; i < number; i++){
//             if(i % 3 === 0 && i % 5 === 0){
//                 sum2 += i
//             }else if(i % 3 === 0){
//                 sum1 += i
//             }else if(i % 5 === 0){
//                 sum1 += i
//             }else{
//                 sum1 += 0
//                 sum2 += 0
//             } 
//         }
// }
// console.log(sum1 + sum2)
// }

// solution(10)


// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// var summation = function (num) {
//     let sum = 0;
//     for (i=1;i<=num;i++){
//       sum += i
//     }
//     return sum
  
//   }

// Kyu 7
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
// solution:
// function filter_list(l) {
//     const filteredArray = l.filter(element => typeof element === 'number')
//     return filteredArray
//   }

// Kyu 7
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// My Solution:
// function highAndLow(numbers){
//     numbers = numbers.split(' ').sort((a, b) => a - b)
//     console.log(numbers)
//     if(numbers.length == 1){
//         console.log(`${numbers.toString()} ${numbers.toString()}`)
//         return `${numbers.toString()} ${numbers.toString()}`
//     }else{
//     let numbersArr = [numbers.pop(), numbers.shift()]
//     console.log(numbersArr);
//     console.log(numbersArr.toString().replace(/,/g,' '))
//     return numbersArr.toString().replace(/,/g,' ')
//     }  
//   }

//   Test Cases:
//   highAndLow("42"); //return 42 42
//   highAndLow("1 9 3 4 -5"); //return 9 -5
//   highAndLow("1 2 3"); //return 3 1

// BETTER Solution:
// function highAndLow(numbers){
//     numbers = numbers.split(' ');
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
//   }

// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]
// NOTES:
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// My Solution: 
// var humanYearsCatYearsDogYears = function(humanYears) {
//     if(humanYears >= 3){
//       let catYears = ((humanYears-2) * 4) + 24
//       let dogYears = ((humanYears-2) *5) + 24
//       return [humanYears,catYears,dogYears]
//     }else if(humanYears == 2){
//       let catYears = 24
//       let dogYears = 24
//       return [humanYears,catYears,dogYears];
//     }else{
//       let catYears = 15
//       let dogYears = 15
//       return [humanYears,catYears,dogYears];
//     }
//   }
// Better Solution:
// var humanYearsCatYearsDogYears = function(y) {
//     if (y == 1) return [1, 15, 15]
//     if (y == 2) return [2, 24, 24]
//     return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
//   }

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

// ***come back to this to refactor */
// function hello(name) {
//     if (name === ''){
//         console.log("Hello, World!")
//         return "Hello, World!"
//     }else{
//         name = name.toLowerCase().split('')
//         // console.log(name)
//         name = name[0].toUpperCase() + name.slice(1)
//         // console.log(name)
//         name = name.replace(/,/g, '')
//         // console.log(name)
//         console.log(`Hello, ${name}!`)
//         return `Hello, ${name}!` 
//     }
//   }

//   hello('aLiCE')
//   hello("john")
//   hello('')
//   hello("PhOeniX")

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// function peopleWithAgeDrink(old) {
//     if (old < 14){
//       return "drink toddy"
//     }else if(old < 18){
//       return "drink coke"
//     }else if(old < 21){
//       return "drink beer"
//     }else{
//       return "drink whisky"
//     }
//   };

// Description:
// Make a simple function called greet that returns the most-famous "hello world!".
// Arrow fxn:
// let greet = () => "hello world!"

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
// All values will be positive integers or floats, or zero.

// My solutions (2)
// Arrow function:
// const plural = (n) => n < 1 || n > 1? true : false;
// function declaration:

// function plural(n) {
//   if(n < 1 || n > 1){
//     return true;
//   }else{
//     return false;
//   }
//   }

// You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

// Return the direction you will face after the turn.

// function direction(facing, turn){
//     if (facing === "N"){
//             facing = 0
//     }else if (facing === "NE"){
//             facing = 45
//     }else if (facing === "E"){
//             facing = 90
//     }else if (facing === "SE"){
//             facing = 135
//     }else if (facing === "S"){
//             facing= 180
//     }else if (facing === "SW"){
//             facing = 225
//     }else if (facing === "W"){
//             facing = 270
//     }else if (facing === "NW"){
//             facing = 315
//     }else{
//         console.log("error facing")
//     }

//     positive turn
//     if (turn % 8 === 0){
//             turn = 0
//     }else if (turn > 0 && turn % 8 === 5){
//             turn = 45
//     }else if (turn > 0 && turn % 8 === 2){
//             turn = 90
//     }else if (turn > 0 && turn % 8 === 7){
//             turn = 135
//     }else if (turn > 0 && turn % 8 === 4){
//             turn = 180
//     }else if (turn > 0 && turn % 8 === 1){
//             turn = 225
//     }else if (turn > 0 && turn % 8 === 6){
//             turn = 270
//     }else if (turn > 0 && turn % 8 === 3){
//             turn = 315
//     negative turns!!
//     }else if (turn < 0 && turn % 8 === -5){
//             turn = 315
//     }else if (turn < 0 && turn % 8 === -2){
//             turn = 270
//     }else if (turn < 0 && turn % 8 === -7){
//             turn = 225
//     }else if (turn < 0 && turn % 8 === -4){
//             turn = 180
//     }else if (turn < 0 && turn % 8 === -1){
//             turn = 135
//     }else if (turn < 0 && turn % 8 === -6){
//             turn = 90
//     }else if (turn < 0 && turn % 8 === -3){
//             turn = 45
//     }else{
//         console.log('Error Turn')
//     }
//     console.log(facing,turn)

//     let sumOfFacingAndTurn = facing + turn
//     console.log(`The sum of facing and turn is ${sumOfFacingAndTurn}`)

//     if(sumOfFacingAndTurn % 8 === 0){
//         return "N"
//     }else if(sumOfFacingAndTurn % 8 === 5){
//         return "NE"        
//     }else if(sumOfFacingAndTurn % 8 === 2){
//         return "E"
//     }else if(sumOfFacingAndTurn % 8 === 7){
//         return "SE"
//     }else if(sumOfFacingAndTurn % 8 === 4){
//         return "S"
//     } else if(sumOfFacingAndTurn % 8 === 1){
//         return "SW"
//     }else if(sumOfFacingAndTurn % 8 === 6){
//         return "W"
//     }else if(sumOfFacingAndTurn % 8 === 3){
//         return "NW"
//     }else{
//         return "error sum of facing turn"
//     }
// }
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// Function Expression:
// function grow(x){
//   return x.reduce((acc,c)=> acc*c,1)
//   }
// Arrow Function
// const grow = (x) => x.reduce((acc,c)=> acc*c,1)

// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.
// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!
// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!
// You are given 5 variables;
// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.
// sharkSpeed = how fast it can move in metres/second.
// pontoonDistance = how far you need to swim to safety in metres.
// youSpeed = how fast you can swim in metres/second.
// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.
// The pontoon, you, and the shark are all aligned in one dimension.
// If you make it, return "Alive!", if not, return "Shark Bait!".

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
//     if((dolphin === true && pontoonDistance/youSpeed < (sharkDistance/sharkSpeed) * 2 )||(dolphin === false && pontoonDistance/youSpeed < (sharkDistance/sharkSpeed))){
//         return "Alive!"
//     }else{
//         return "Shark Bait!"
//     }
// }

// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"
// My Solution:
// function nameShuffler(str){
//     return str.split(' ').reverse().toString().replace(/,/g, ' ')
//   }

//   nameShuffler("Corey Damocles")
// Top Solution:
// function nameShuffler(str){
//     return str.split(' ').reverse().toString().replace(/,/g, ' ')
//   }
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Function Declaration
// function smash (words) {
//     return words.join(' ')
//  };

//  Arrow Function
//  const smash = (words) => words.join(' ')
// Test cases:
//  smash(["this", "is", "a", "really", "long", "sentence"])
//  smash(["hello", "amazing", "world"])

// Arrow Function
// const grow = (x) => x.reduce((acc,c)=> acc*c,1)
// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
// var a == "code";
// var b == "wa.rs";
// var name == a + b;

// My solution:
// var a = "code";
// var b = "wa.rs";
// var name = a + b;

// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]
// My solution:
// function reverseSeq(n){
//     let arr = []
//    for(i=1;i<=n;i++){
//        arr.unshift(i)
//    }
//    return arr
// }

// Other similar solution:
// const reverseSeq = n => {
//     let arr = [];
//       for (let i=n; i>0; i--) {
//         arr.push(i);
//         } return arr;
//     };
// test case:
// reverseSeq(7)

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

// function mergeArrays(arr1, arr2) {
//    let mergeArrays = arr1.concat(arr2).sort((a, b) => a - b);
//    let uniqueChars = [];
//     mergeArrays.forEach((c) => {
//     if (!uniqueChars.includes(c)) {
//         uniqueChars.push(c);
//     }
// });
// return uniqueChars
// }

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

// function check(a, x) {
//     if (a.includes(x)){
//         console.log('true')
//       return true
//     }else{
//         console.log('false')
//     return false
//     }
//   }

// Refactored as arrow function and ternary operator (fuck yeah first try)
//   let check = (a,x) => a.includes(x)? true : false
//   check([66, 101], 66)

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// Arrow function solution
// const solution = (str, ending) => str.endsWith(ending)? true : false

// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5
// Function Declaration:
// function litres(time) {
//     return Math.floor(time * 0.5);
//   }
// Arrow Function:
// const litres = time => Math.floor(time * 0.5)

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// My Solution:
// function abbrevName(name){
//   let firstName = name.split(" ").shift()
//   let secondName = name.split(" ").pop()
//   console.log(`${firstName.toUpperCase().charAt(0)}.${secondName.toUpperCase().charAt(0)}`)
// }

// Test Cases:
// abbrevName('Sam Harris')
// abbrevName('patrick feeney')

// Codewars Arrow Function solution:
// const abbrevName = (name) => name.split(' ').map(i => i.charAt(0).toUpperCase()).join('.');

// Write a function to split a string and convert it into an array of words.
// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]
// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// My solution (arrow function)
// const stringToArray = string => string.split(' ')

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
// Can you help her?
//My Solution:
// function greet(name){
//     if(name === "Johnny"){ 
//       return "Hello, my love!";
//     }else{
//       return "Hello, " + name + "!";
//     }
//   }
//Ternary Operator + arrow function solution:
// const greet = name => name === "Johnny"? "Hello, my love!" : `Hello, ${name}!`


//6Kyu first Tryyyyy 05/10/2022
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
//My solution (FIRST TRY!!)
//
// function likes(names) {
//     if(names.length === 0){
//         return "no one likes this"
//     }else if(names.length === 1){
//         return `${names} likes this`
//     }else if(names.length === 2){
//         return `${names[0]} and ${names[1]} like this`
//     }else if(names.length === 3){
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     }else{
//         return `${names[0]}, ${names[1]} and ${names.length -2} others like this`
//     }
// }
//
// test cases:
// console.log(likes([]))
// console.log(likes(["Peter"]))
// console.log(likes(["Jacob", "Alex"]  ))
// console.log(likes(["Max", "John", "Mark"] ))
// console.log(likes(["Alex", "Jacob", "Mark", "Max"] ))

