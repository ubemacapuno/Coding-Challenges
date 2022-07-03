const username = 'ubemacapuno'
function getFetch(){
    const url = `https://www.codewars.com/api/v1/users/${username}`
    let isLoading = true 
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {//takes the json from the api

          // Display on the HTML:
          document.querySelector('.username').innerText = data.username;
          document.querySelector('.name').innerText = data.name;
          document.querySelector('.honor').innerText = data.honor;
          document.querySelector('.clan').innerText = data.clan;
          document.querySelector('.kyu').innerText = data.ranks.overall.name;
          document.querySelector('.completed').innerText = data.codeChallenges.totalCompleted;
        })
        .catch(err => {
            console.log(`error ${err}`)
        }).finally(() => {
          isLoading = false
        });
  }

//getFetch Function call:
getFetch()

// *** Practice Codewars on 4/3/22 *** 

// 8 kyu String repeat
// Write a function called repeatStr which repeats the given string string exactly n times.
// My Answer:
// function repeatStr (n, s) {
//   return String(s.repeat(n)); //syntax is repeat(value)
// }
// Arrow Syntax Answer from CodeWars:
// repeatStr = (n, s) => s.repeat(n)

// 8 kyu Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// My Answer:
// function greet(name){
//   return (`Hello, ${name} how are you doing today?`)
// }
// Solved with Arrow Syntax:
// const greet = name => `Hello, ${name} how are you doing today?`;

// 8 kyu Find the smallest integer in the array
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

// 8 kyu Freudian translator
// Take a string as its argument, and return a string with every word replaced by the explanation to everything ("sex"), according to Freud. 
// Note that an empty string, or no arguments, should result in the ouput being ""(empty string).
// function toFreud(string){
//  return String.replace(/[^\s]+/g, "sex");
// }

//8 kyu Remove First and Last Character
// Create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
// function removeChar(str){
//     if (str.length < 2){
//         return str;
//     }else{
//     return str.slice(1,str.length-1)
//     }
// }

// 7 kyu A twisted way to select an element from an array.
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

//8 Kyu Multiply Each element
// Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
// function multiplyAndAlertProduct(arr){
//     let product = 1;
//     arr.forEach(element => product *= element);
//     alert (product);
// }

// 8 kyu Calculate average
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

// 8 kyu Reversed Strings
// Complete the solution so that it reverses the string passed into it.
// function solution(str){
//     return str.split("").reverse().join("");
//   }
// Arrow Syntax:
// const solution = str => str.split("").reverse().join("");

// 7 kyu Anagram Detection
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// function isAnagram (test, original) {
//     return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
//   }

// 8 kyu Check same case 04/11/2022
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

// 8 kyu Grasshopper - Grade book
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

// 8 kyu Convert a String to a Number!
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// My solution:
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

//8 kyu Will you make it?
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if(distanceToPump > mpg * fuelLeft){
//       return false;
//     }else{
//       return true;
//     }
// }

// 8 kyu How good are you really?
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

// 8Kyu Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// function boolToWord( bool ){
//     if (bool == true){
//         return "Yes"
//       }else{
//         return "No"
//       }
//     }

// 8 kyu Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
// function squareSum(numbers){
//     let squareNumbers = numbers.map(element => element ** 2);
//     let sumOfSquareNumbers =squareNumbers.reduce((acc,c)=> acc + c, 0);
//     return sumOfSquareNumbers
//     }

//8 kyu Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// function even_or_odd(number) {
//     if (number % 2 === 0){
//       return "Even"
//     }else{
//       return "Odd"
//     }    
//   }

// 8 kyu To square(root) or not to square(root)
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

//8 kyu Sleigh Authentication
// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.
// Sleigh.prototype.authenticate = function(name, password) {
//   if(name === "Santa Claus" && password === "Ho Ho Ho!"){
//     return true;
//   }else{
//     return false;
//   }
// };

// 8 kyu Find Maximum and Minimum Values of a List
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

// 8 kyu Beginner - Lost Without a Map
// Instructions: Given an array of integers, return a new array with each value doubled.
//Solution:
// function maps(x){
//     return  x.map((element) => element * 2);
// }

// 8 kyu Convert a Number to a String!
// Instructions: We need a function that can transform a number into a string. What ways of achieving this do you know?
//My Solution:
// function numberToString(num) {
//     return num.toString();
//   }
// Other Solutions:
// const numberToString = num => num.toString();
// numberToString = String;
// function numberToString(num) {
//   return String(num);
// }

//8 kyuFind Maximum and Minimum Values of a List
// Instructions: Write a function that returns both the minimum and maximum number of the given list/array.
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]
//My solution:
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

// 8 kyu Beginner Series #4 Cockroach
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// function cockroachSpeed(s) {
//     let cmPerSecond = Math.floor((s * (100000/3600)))
//     return cmPerSecond
//   }
// Other solution:
// const cockroachSpeed = s => Math.floor(s / 0.036);

//8 kyu L1: Set Alarm
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

//8 kyu Count of positives / sum of negatives
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
//Test Case:
// countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])

// Multiples of 3 or 5 6 kyu
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
//Test case:
// solution(10)

// 8 kyu Grasshopper - Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//My solution:
// var summation = function (num) {
//     let sum = 0;
//     for (i=1;i<=num;i++){
//       sum += i
//     }
//     return sum
//   }

// List Filtering 7 Kyu
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
//Arrow Syntax:
// const filter_list = l => l.filter(element => typeof element === 'number')

// 7 Kyu Highest and Lowest
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

// 8 kyu Cat years, Dog years
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

// 8 kyu Drink about
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
//My solution:
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

// 8 kyu Function 1 - hello world
// Description:
// Make a simple function called greet that returns the most-famous "hello world!".
// Arrow fxn:
// let greet = () => "hello world!"

// 8 kyu Plural
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

// 7 kyu Turn with a Compass
// You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.
// Return the direction you will face after the turn.
//My solution:
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

//8 kyu Beginner - Reduce but Grow
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// Function Expression:
// function grow(x){
//   return x.reduce((acc,c)=> acc*c,1)
//   }
// Arrow Function
// const grow = (x) => x.reduce((acc,c)=> acc*c,1)

// 8 kyu Holiday VI - Shark Pontoon
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

// 8 kyu Name Shuffler
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

// 8 kyu Sentence Smash
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

// 8 kyu Basic variable assignment
// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
// var a == "code";
// var b == "wa.rs";
// var name == a + b;
// My solution:
// var a = "code";
// var b = "wa.rs";
// var name = a + b;

// 8 kyu Reversed sequence
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

// 8 kyu Merge two sorted arrays into one
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

// 8 kyu You only need one - Beginner
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

//7 kyu String ends with?
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// Arrow function solution
// const solution = (str, ending) => str.endsWith(ending)? true : false

// 8 kyu Keep Hydrated!
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

//8Kyu Abbreviate a Two Word Name
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

// 8 kyu Convert a string to an array
// Write a function to split a string and convert it into an array of words.
// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]
// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
// My solution (arrow function)
// const stringToArray = string => string.split(' ')

//8Kyu Jenny's Secret Message
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

// 6 kyu Who likes it? 05/10/2022
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// My solution (FIRST TRY!!):
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
// test cases:
// console.log(likes([]))
// console.log(likes(["Peter"]))
// console.log(likes(["Jacob", "Alex"]  ))
// console.log(likes(["Max", "John", "Mark"] ))
// console.log(likes(["Alex", "Jacob", "Mark", "Max"] ))

//8 kyu Keep up the hoop
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".
// My arrow function solution:
// let hoopCount = n => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"

// 05-12-22 8 kyu Invert values
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.
// My solution (arrow function):
// let invert = array => array.map((e) => (-e))

//8 kyu Reversed Words
// Complete the solution so that it reverses all of the words within the string passed in.
// Example: "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
//My solutions:
//Function declaration:
// function reverseWords(str){
//     return str.split(" ").reverse().join(' ')
//   }
//Arrow function:
// const reverseWords = s => s.split(" ").reverse().join(' ')
// Test case:
// console.log(reverseWords("The greatest victory is that which requires no battle"))

//7Kyu A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
// Task
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
//My arrow function solution, FIRST TRYYY!!!
// let isSquare = n => Math.sqrt(n) % 1 == 0 ? true : false
// console.log(isSquare(144))

// 8 kyu Get Planet Name By ID
// The function is not returning the correct values. Can you figure out why?
// Example (Input --> Output ):
// 3 --> "Earth"
// My solution:
// function getPlanetName(id){
//     var name;
//     switch(id){
//       case 1:
//         name = 'Mercury'
//         break;            
//       case 2:
//         name = 'Venus'
//         break;
//       case 3:
//         name = 'Earth'
//         break;
//       case 4:
//         name = 'Mars'
//         break;
//       case 5:
//         name = 'Jupiter'
//         break;
//       case 6:
//         name = 'Saturn'
//         break;
//       case 7:
//         name = 'Uranus'
//         break;
//       case 8:
//         name = 'Neptune'
//         break;
//     }
//     return name;
//   }
// Test case:
//   console.log(getPlanetName(3))

//05.13.2022 8Kyu Get the mean of an array
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
// function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
//   }
//sum the array and divide by the number of elements.
// function getAverage(marks){
//     return marks.reduce((a,c)=>a+c,0)/marks.length
//   }
// console.log(getAverage([100,110]))
//Arrow function solution:
// const getAverage = (marks) => Math.floor(marks.reduce((a,c)=>a+c,0)/marks.length)

//05.14.2022 7KYU Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
// #Output
// The middle character(s) of the word represented as a string.
//My solution:
// function getMiddle(s){
//     if (s.length % 2 !== 0 && s.length > 1){
//         return s[Math.floor(s.length/2)]
//     }else if(s.length % 2 == 0 && s.length > 1){
//         return s[(s.length/2) -1]+s[(s.length/2)]       
//     }else{
//         return s
//     }
// }
//Test Cases
// console.log(getMiddle(["C", "o", "r", "e", "y"]))
// console.log(getMiddle("corey"))
// console.log(getMiddle("fourteen"))
// console.log(getMiddle("CJ"))
// console.log(getMiddle("J"))

//8 Kyu Thinkful - Logic Drills: Traffic light
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, update_light('green') should return 'yellow'.
//My solution:
// function updateLight(current) {
//     if(current == 'green'){
//       return current = 'yellow'
//     }else if(current == 'yellow'){
//       return current = 'red'
//     }else{
//       return current = 'green'
//     }
//   }

//8 kyu A wolf in sheep's clothing
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
// Note: there will always be exactly one wolf in the array.
// My Code:
// function warnTheSheep(queue) {
//     if(queue[queue.length-1] == "wolf"){
//         return "Pls go away and stop eating my sheep"
//     }else{
//         for(i=0;i<queue.length;i++){
//             if(queue[i] == "wolf"){
//                 return `Oi! Sheep number ${queue.reverse().indexOf('wolf',queue[i])}! You are about to be eaten by a wolf!`
//             }
//         }
//     }   
// }
//Test Cases:
// console.log(warnTheSheep(["sheep","wolf","sheep", "sheep", "sheep"]))
// console.log(warnTheSheep(["sheep", "sheep", "wolf"]))

//7Kyu Vowel Count 05/15/2022
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
//My solution:
// function getCount(str) {
//     let vowelsCount = 0;
//     let arr = str.split('')
//     for(i=0;i<arr.length;i++){
//         if(arr[i]=="a" || arr[i]=="e" || arr[i]=="i" || arr[i]=="o" || arr[i]=="u"){
//             vowelsCount++
//         }
//     }
//     return vowelsCount;
//   }

// 8Kyu Is n divisible by x and y?
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
//My solution:
// function isDivisible(n, x, y) {
//     if(n % x === 0 && n % y === 0){
//         return true
//     }else{
//        return false
//     }
// }
//My Arrow function solution:
// const isDivisible = (n,x,y) => n % x === 0 && n % y === 0? true : false

// 8 kyu Sort and Star
// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.
// My solution:
// function twoSort(s) {
//     return s.sort().shift().split('').join('***').toString();
//   }
//Arrow function solution:
// const twoSort = s => s.sort().shift().split('').join('***').toString();
//Test Cases:
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])

//8 Kyu Detect Pangram
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
// function isPangram(string){
//     let arr = string.toLowerCase();
//     let abc = 'abcdefghijklmnopqrstuvwxyz'

//     for(i=0;i<abc.length;i++){
//         if(arr.indexOf(abc[i])<0){
//             return false;
//         }
//     }
//     return true;
//   }
//   console.log(isPangram("abcdefghijklmnopqrsuvwxyz"))

// 8Kyu Filter out the geese
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:
//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
//Solution:
// function gooseFilter(birds) {
//     let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(e=> !geese.includes(e)) //filters elements that are NOT(!) elements(e) included(.includes) in the array named "geese".
//   }
//test case:
// console.log(gooseFilter(["African", "Roman Tufted", "test 2","Toulouse", "Pilgrim", "Steinbacher","test"]))

//8Kyu Sum Numbers 05-18-2022
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
// Input: []
// Output: 0
// Input: [-2.398]
// Output: -2.398
// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.
//My solution:
// function sum (numbers) {
//     "use strict";
//     if(numbers == []){
//         return 0
//     }else{
//         return numbers.reduce((a,c)=>a+c,0)
//     } 
// };
//Test Cases:
// console.log(sum([1, 5.2, 4, 0, -1]))
// console.log(sum([]))
// console.log(sum([-2.398]))
//My arrow function solution
// const sum = (numbers) => numbers == []? 0:numbers.reduce((a,c)=>a+c,0)

// 7Kyu Mumbling 
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
//my solution:
// function accum(s) {
//     let c = s.toLowerCase().split("").map((e,i)=>e.repeat(i+1))
//     for(i=0;i<c.length;i++){
//         c[i] = c[i].charAt(0).toUpperCase() + c[i].slice(1);
//     }
//     return c.join("-")
// }
// test case:
// console.log(accum("idGaF"))

//8 kyu Beginner Series #2 Clock 5.19.2022 (First try!!)
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:
// h = 0
// m = 1
// s = 1
// result = 61000
// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
//My Solution:
// function past(h, m, s){
//     let hours = (0 + h) * 3.6e+6;
//     let minutes = (0 + m) * 60000;
//     let seconds = (0 + s) * 1000;
//     return hours + minutes + seconds
//   }
//Test Case:
// console.log(past(0,1,1))
//Better solution:
// function past(h, m, s){
//     return ((h*3600)+(m*60)+s)*1000;
//   }

//8 kyu Sum Mixed Array 05.20.2022
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
//My Solution:
// function sumMix(x){
//    return x.map(e=>e*1).reduce(
//     (a, c) =>a + c,0);
// }
//My Solution as an Arrow Function:
// const sumMix = x => x.map(e=>e*1).reduce((a, c) =>a + c,0);
//Test Cases:
// console.log(sumMix([1,2,3,"4"]));

// 8 kyu Century From Year
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
//my solution: 
//const century = y => Math.ceil(y/100)

//7 kyu Jaden Casing Strings 05.21.2022
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
//My solution:
// String.prototype.toJadenCase = function () {
//     return this.split(' ').map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")
//   };
//Test Case:
// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))

//8 kyu Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
//My Solution (had to look up eval())   //The eval() function evaluates JavaScript code represented as a string.
// function basicOp(operation, value1, value2)
// {
//   return eval(value1 + operation + value2) 
// }
// console.log(basicOp("+", 4, 7))
//Arrow function:
// const basicOp = (operation, value1, value2) => eval(value1 + operation + value2) 
//Solution using "if":
// function basicOp(operation, value1, value2)
// {
//   // Code
//   if( operation == "+") {
//     return value1 + value2
//   }
//   if( operation == "-") {
//     return value1 - value2
//   }
//   if( operation == "*") {
//     return value1 * value2
//   }
//   if( operation == "/") {
//     return value1 / value2
//   }
// }

// 7 kyu Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
//My solution:
// function reverseWords(str) {
//     return str.split(' ').map((e)=>e.split('').reverse()).join(' ').replace(/,/g, '')
// }
//Arrow Function:
// const reverseWords = s => s.split(' ').map((e)=>e.split('').reverse()).join(' ').replace(/,/g, '')
//BETTER solution without dreaded regex:
// const reverseWords = s => s.split(' ').map((e)=>e.split('').reverse().join('')).join(' ')
//Test Cases:
// console.log(reverseWords("This is an example!"))
// console.log(reverseWords("double  spaces"))

//7 kyu Complementary DNA 05.22.2022
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more: http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]
//My solution! Run "If-Else" within an array.map!! FIRST TRY
// function DNAStrand(dna){
//     let dnaArray = dna.split('').map(e=>
//     {if(e==="A"){
//         return "T"
//     }else if (e==="T"){
//         return "A"
//     }else if (e==="G"){
//         return "C"
//     }else{
//         return "G"
//     }})
//     return dnaArray.join('')
//   }
// Test Case:
// console.log(DNAStrand("ATTGC"))

//8 kyu Beginner Series #1 School Paperwork 5/23/2022
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
//My solution:
// const paperwork = (n,m) => n < 0 || m < 0? 0 : n*m

//8 kyu 05.24.2022 Training JS #1: create your first JS function and print "Hello World!"
// Task
// Please refer to two example above and write your first JS function.
// mission 1:
// use keyword function to define your function, function name should be helloWorld(don't forget the () and {})
// mission 2:
// use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).
// mission 3:
// type the console.log() in the next line(don't forget to put the str in the brackets).
// When you have finished the work, click "Run Tests" to see if your code is working properly.
// In the end, click "Submit" to submit your code pass this kata.
//My solution:
// function helloWorld(){
//     let str = "Hello World!"
//     console.log(str)
//   }

// 7 kyu Friend or Foe? 5/23/2022
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.
//My solution:
// function friend(friends){
//    return friends.filter(e=>e.length==4)
//   }
//Test Case:
// console.log(friend(["Ryan", "Kieran", "Mark"]))
//My arrow syntax solution:
// const friend = (friends) => friends.filter(e=>e.length==4)

// 8 kyu Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
//My solution:
// function positiveSum(arr) {
//     let sumArr = 0
//     arr.forEach(e =>{
//         if (e > 0){
//         sumArr += e
//             }
//         })
//     return sumArr
// }
//Test Case:
// console.log(positiveSum([1,-4,7,12]))

// 7 kyu Descending Order 05/26/2022 (array problem)
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
//P +number
//R Number
//E (above)
//P take a number, sort greatest to smallest
    //Number to array: ******************Array.from(String(n), Number)*****************
    //use sort method to sort greatest to smallest
    //convert to number
//My solution
// function descendingOrder(n){
//     return (Array.from(String(n), Number).sort((a,b)=> a-b).reverse().join(""))*1
// }
//Arrow Syntax
// const descendingOrder = n => (Array.from(String(n), Number).sort((a,b)=> a-b).reverse().join(""))*1
//test case:
// console.log(descendingOrder(42145))
//Better solution:
// function descendingOrder(n) {
//     return +n.toString().split('').sort().reverse().join('');
//   }

//7 kyu Sort array by string length 05/27/2022 (array problem)
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
//My Solution:
// function sortByLength (array) {
//     // Return an array containing the same strings, ordered from shortest to longest
//     return array.sort((a, b) => a.length - b.length)
//   };
//My solution refactored in array syntax:
// const sortByLength = array => array.sort((a, b) => a.length - b.length)
//Test case:
// console.log(sortByLength(["Beg", "Life", "I", "To"]))

//7 kyu JavaScript Array Filter
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
// The solution would work like the following:
// getEvenNumbers([2,4,5,6]) // should == [2,4,6]
//My solution:
// function getEvenNumbers(numbersArray){
//   return numbersArray.filter(e=>e % 2 === 0)
// }
//Arrow syntax:
// let getEvenNumbers = numbersArray => numbersArray.filter(e=> e % 2 === 0)
// console.log(getEvenNumbers([2,4,5,6]))

// 6 kyu Pyramid Array
// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s
//p: number >= 0
//r: Array of ascending length SUBARRAYS
//e: Pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
//p: Map the array? Loop? 
//solution:
// function pyramid(n) {
//   let arrayOfN = []
//   for(i=0;i<n;i++){
//     arrayOfN.push([...Array(i+1)].fill(1))
//   }
//   return arrayOfN
// }
//Other solution:
// const pyramid = n => Array(n).fill(1).map((x, i) => Array(i + 1).fill(1))
//Test case:
// console.log(pyramid(5))
//ANKI this:
//Array() Array constructor is used to create Array objects
//Example: [element0, element1, /* ... ,*/ elementN]
//array.fill() method changes ALL elements in an array to a STATIC VALUE (in this problem, we want a static number 1)
//example: 
    // fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
    // expected output: [1, 2, 0, 0]

// 7 kyu Even numbers in an array 05/28/2022
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
// For example:
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
//My solution:
// function evenNumbers(array, number) {
//     let filteredArray = array.filter (e=> e % 2 === 0)
//     return filteredArray.slice(filteredArray.length-number)
//   }
//Other solution:
// const evenNumbers = (array, number) => array.filter(e=> e % 2 === 0).slice(-number)
//Test
// console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))

//8 kyu Grasshopper - Messi goals function
// Messi goals function
// Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.
// For example:
// 5, 10, 2  -->  17
//My solution:
// const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals
//Clever solution using reduce and (...a):
//const goals = (...a) => a.reduce((s, v) => s + v, 0);

// 7 kyu Sorted? yes? no? how?
// Complete the method which accepts an array of integers, and returns one of the following:
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.
//My solution:
// function isSortedAndHow(array) {
//     let ascArray = array.map(e=>e).sort((a,b)=> a-b)
//     let descArray = array.map(e=>e).sort((a,b)=> a-b).reverse()
//     if (ascArray.toString() == array.toString() ){
//         return "yes, ascending"
//     }else if (descArray.toString() == array.toString()){
//         return "yes, descending"
//     }else{
//         console.log(array)
//         console.log(ascArray)
//         console.log(descArray)
//         return "no"
//     }
// }
//Refactored:
// function isSortedAndHow(array) {
//     let ascArray = array.map(e=>e).sort((a,b)=> a-b)
//     let descArray = array.map(e=>e).sort((a,b)=> a-b).reverse()
//     return ascArray.toString() == array.toString() ? "yes, ascending"
//     : descArray.toString() == array.toString() ? "yes, descending" 
//     : "no"
// }
// console.log(isSortedAndHow([20,19,18,-18]))

// 8 kyu Switch it Up! 05/29/2022
// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.
//My solution:
// function switchItUp(number){
//     let value = "";
//     switch (value){
//     case 1:
//         return "One"
//     case 2:
//         return "Two"
//     case 3:
//         return "Three"
//     case 4:
//         return "Four"
//     case 5:
//         return "Five"
//     case 6:
//         return "Six"
//     case 7:
//         return "Seven"
//     case 8:
//         return "Eight"
//     case 9:
//         return "Nine"
//     }
// }

//7 kyu Narcissistic Numbers 05/30/2022
// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.
// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153
// Write a function that, given n, returns whether or not n is a Narcissistic Number.
//P "n"; get number of digits "l"
//R true||false
//E 13 + 53 + 33 = 153
//P: 
//find length of n to get l, (l=n.toString().length)
//split up n into elements (See below, make ANKI)
//raise each element to the power of l
//if the sum of each element to the power of l === n, return true else false
//My solution:
// function isNarcissistic(n) {
//     let l = n.toString().length
//     let arrayN = String(n).split("").map((e)=>{
//         return Number(e)
//     })
//     let narcCheck = arrayN.map(e=>Math.pow(e,l)).reduce((acc,c)=>acc+c,0)
//     if(narcCheck === n){
//         return true
//     }else{
//         return false
//     }
// }
//My solution refactored:
// function isNarcissistic(n) {
//     let l = n.toString().length
//     let arrayN = String(n).split("").map((e)=>{return Number(e)}).map(e=>Math.pow(e,l)).reduce((acc,c)=>acc+c,0)
//     return (arrayN===n ? true : false)
// }
//Test case: console.log(isNarcissistic(154))

//8 kyu Convert a Boolean to a String
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.
//My solution: 
// const booleanToString = b => b === true ? "true" : "false"

// 8 kyu Hello, Name or World!
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
// Examples:
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"
// function hello(name) {
//     return name ? `Hello, ${name.toLowerCase().split("").shift().toString().toUpperCase() + name.toLowerCase().split("").splice(1).join("").toString()}!` : "Hello, World!" 
//  }
//Test Cases:
// console.log(hello("aliCE"))
// console.log(hello())

// 8 kyu Powers of 2
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
// function powersOfTwo(n){
//     let nArr = []
//     for(let i=0; i<=n; i++){
//         nArr.push(2**i)
//     }
//     return nArr
//   }
// console.log(powersOfTwo(0))

// 6 kyu Take a Ten Minutes Walk
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
//my solution:
// function isValidWalk(walk){
//     let startPosition = [0,0]
//     walk.map(e=>{
//         if(e=='n'){startPosition[0] += 1
//     }else if(e=='s'){startPosition[0] -= 1
//     }else if(e=='e'){startPosition[1] += 1
//     }else{startPosition[1] -= 1
//     }
// })
//     return walk.length==10 && startPosition.toString() == "0,0"
// }
//Test Cases:
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))

//7 kyu Square Every Digit 05/31/2022
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.
// Note: The function accepts an integer and returns an integer
//my solution
// function squareDigits(num){
//     return +num.toString().split('').map(e=>(e*1)**2).join().replace(/,/g,'')
//   }
//Arrow Syntax:
// const squareDigits = num => +num.toString().split('').map(e=>(e*1)**2).join().replace(/,/g,'')
// Test Cases:
// console.log(squareDigits(9119))
// console.log(squareDigits(3212))
// console.log(squareDigits(2112))
// console.log(squareDigits(0))

// 7 kyu Disemvowel Trolls 05/31/2021
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
//P: Given String
//R: Return String
//E: "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!".
//Pseudo:
    //split to array
    //iterate through array (map):
        //replace /[a,e,i,o,u]/ with ""
    //join the array to make it a string
//my solution:
// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '')
//   }
//Arrow syntax:
// const disemvowel = str => str.replace(/[aeiou]/gi, '')
// Test cases:
// console.log(disemvowel('This website is for losers LOL!'))
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))
// console.log(disemvowel("What are you, a communist?"))

// 8 kyu A Needle in the Haystack
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
//My solution:
// function findNeedle(haystack) {
//     return `found the needle at position ${haystack.indexOf('needle')}`
//   }
//Arrow syntax:
// const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`
//Test cases:
// console.log(findNeedle['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false])

//7 kyu Sort Numbers 06/02/2022
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
// For example:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []
//My solution:
// function solution(nums){
//     if(nums!==null){
//         return nums.sort((a,b)=>a-b)
//     }else{
//         return []
//     }
// }
//Try using ternary operator and arrow syntax
//My refactored solution:
// const solution = nums => nums!==null ? nums.sort((a,b)=>a-b) : []
//A similar BUT DIFFERENT solution from another user:
// const solution = nums => nums ? nums.sort((p, n) => p - n) : []; //nums!==null can be refactored to nums
//Test Cases:
// console.log(solution([1,2,3,10,5]))
// console.log(solution([1, 2, 10, 50, 5]))
// console.log(solution(null))
// console.log(solution([]))

//7 kyu Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
//P: String
//R: True or False
//E: "Dermatoglyphics" --> true
//Pseudo:
    //If string is empty, return true
    //else, make string all the same case since case doesn't matter (.toLowerCase())
    //store each letter into an array (split(""))
    //Sort the array! Most important step!
    //iterate through the array - since it is sorted, any duplicates would fail the test:
            //return false if duplicates are found
    //If the array passes the loop, the code proceeds and true is returned.

// function isIsogram(str){
//     if(str.isEmpty){
//         return true; // .isEmpty() method checks whether string is empty or not
    // }else{
    //     str = str.toLowerCase() // return is not case-sensitive
    // }
    // let sortedArr = str.split('').sort()
    // for(i=0;i<sortedArr.length;i++){
    //     if (sortedArr[i + 1] == sortedArr[i]) {
    //         return false //the array is sorted, so if any duplicates are found during iteration, false is returned
//         }
//     }
//     return true
// }
// Shorter but similar solution from other user:
// function isIsogram(word){
//     word = word.toLowerCase().split("").sort();
//     for (var i=0;i<word.length-1;i++){
//       if (word[i]==word[i+1]) return false;
//       }
//     return true;
//   }

//Test Cases:
// console.log(isIsogram("Dermatoglyphics"))
// console.log(isIsogram(""))

//7 kyu Shortest Word 06/05/2022
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
//P: String of words
//R: number (length of shortest word(s))
//E: "bitcoin take over the world maybe who knows perhaps" //3
//Psuedocode: 
    //split words into an array of words (.split(' '))
    //map the array and return the length of each element (.map(e=>e.length))
    //sort the array from  smallest to largest (.sort((a,b)=>a-b)
    //return the element at index[0], which should be the smallest word length (.shift())
//My solution:
// function findShort(s){
//     return s.split(' ').map(e=>e.length).sort((a,b)=>a-b).shift()
// }
//refactored:
// const findShort = s => s.split(' ').map(e=>e.length).sort((a,b)=>a-b).shift()
//Similar solution from other Codewars user; Math.min(...s) was used instead:
// const findShort = s => Math.min(...s.split(" ").map(a => a.length))
// Test case:
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

// 8 kyu Count by X 06/05/2022
// Create a function with two arguments that will return an array of the first (n) multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).
// Examples:
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
//P: 2 numbers
//R: Array of number(s)
//E: countBy(2,5) === [2,4,6,8,10]
//Psuedocode:
    //for loop that goes from 1 to less than or equal to length n
        //let z = [] ; this array is empty but will the contain multiples of x
        //for(i=0;i<n;i++), push(i*x)
//My solution:
// function countBy(x, n) {
//     let z = [];
//     for(i=1;i<=n;i++){
//         z.push(i*x)
//     }
//     return z;
// }
//Test Case:
// console.log(countBy(2,5))

// 6 kyu Find the odd int 06/06/2022
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
//P: array of integers
//R: integer that appears odd # of times
//E: [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
//Psuedocode:
    //sort the array
    //come up with algo to iterate through the array and return the element when element is found odd # of times!
        //solution: Use reduce; as it iterates, subtract the accumulator from the current value.
        // If an integer is there an even amount of times, it will return 0 since it is evenly balancing itself to 0. 
        // If an element is there an ODD amount of times, the reduce function will return the difference of the current value and the accumulator (0). That way at the end, since only ONE integer appears an odd # of times per the problem,
        //the reduce function returns that integer (current value will also be the same as the element)!
        // function findOdd(A) {
        //     console.log(A.sort((a, b) => a - b))
        //     return A.sort((a, b) => a - b).reduce((a, b) => b - a, 0)
        //     }
        //Explained in other words:
        //Typically we use reduce method to get the sum of an iteration. .reduce((a, b) => a - b, 0) 
        // But this way, we're using reduce as a way to balance out to 0; .reduce((a, b) => b - a, 0)
        // Whatever value is left is the value that couldn't balance itself out to 0 due to being in the array an odd # of times!
        // Arrow syntax solution:
        // const findOdd = A => A.sort((a, b) => a - b).reduce((a, b) => b - a, 0)
        //Test Case:
        // console.log(findOdd([0,1,0,1,0,2,2,5,5]))

// 7 kyu Sum of two lowest positive integers 06/07/2022
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
//P: array of min 4 +integers
//R: sum (num) of the two LOWEST positive nums
//E:[10, 343445353, 3453445, 3453545353453] should return 3453455.
//Pseudocode:
    //Sort the array smallest to largest .sort((a,b)=>a-b)
    //array is now mutated - take the sum of array[0] + array[1]
// My solution:
// function sumTwoSmallestNumbers(numbers) {  
//   let sortedNums = numbers.sort((a,b)=>a-b)
//   return sortedNums[0] + sortedNums[1]
// }
//Refactored - 
//since numbers gets mutated after being sorted, 
//there is no need for an extra variable. You can just return numbers[0]+numbers[1]:
// function sumTwoSmallestNumbers(numbers) {  
//     numbers.sort((a,b)=>a-b)
//     return numbers[0] + numbers[1]
//   }
//Test case:
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))

// 8 kyu Lario and Muigi Pipe Problem 06/07/2022
// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.
// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// Example
// Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
//P: array of numbers
//R: array of numbers that increment by 1 for each index from the MIN up to the MAX
//E: Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
//Psuedocode:
    //Find the min and max of the array. I usually sort least to greatest and get arr[0] and arr[arr.length-1] to get the min and max,
    //but let's try using Math.min(...arr) and Math.max(...arr) for this solution.
    //Then do a for loop from the Math.min value to the Math.max value, and incrementing by one. Push these incrementing nums to an array.
    //Return that array.
//My solution:
// function pipeFix(numbers){
//     let pipefixArray = []
//     let numbersMin = Math.min(...numbers)
//     let numbersMax = Math.max(...numbers)
//     for(i=numbersMin;i<=numbersMax;i++){
//         pipefixArray.push(i)
//     }
//     return pipefixArray
// }
    //Test Case:
    // console.log(pipeFix([1,2,3,5,6,8,9]))

// 8 kyu Convert number to reversed array of digits 06/08/2022
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):
// 348597 => [1,3,2,5,3]
// 0 => [0]
//P: Randon non-negative number
//R: Digits of this number within an array in REVERSE order
//E: 35231 => [7,9,5,8,4,3]
//Psuedocode:
    //Convert number into an array of strings n.split('')
    //reverse it .reverse()
    //map the array to convert each string element into number elements .map(e=>e*1)
//My solution:
// function digitize(n) {
//     return n.toString().split("").reverse().map(e=>e*1)
// }
//Refactored - Arrow syntax
// const digitize = n => n.toString().split("").reverse().map(e=>e*1) 
//.map(e=>e*1) can be refactored to .map(Number)
// const digitize = n => n.toString().split("").reverse().map(Number)
// n.toString() can also be written as String(n)
// const digitize = n => String(n).split("").reverse().map(Number)
//Test Case:
// console.log(digitize(348597))

// 7 kyu Printer Errors 06/08/2022
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.
// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"
// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"
//P: string of letters ("control string")
//R: string fraction; numerator is num of errors, denominator is the length of the control string 
//E: "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz" -> "3/56"
//Psuedocode:
    //let denominator = s.length
    //let numerator = 0
    //create an array (printerCodeErrors) and iterate through the array; 
    //During iteration (forEach), when e is equal to e in the printerCodeErrors array, add 1 to the numerator.
    //return numerator / denominator in a template literal
//My solution:
// function printerError(s) {
//     let printerCodeErrors = ['n','o','p','q','r','s','t','u','v','w','x','y','z']
//     let denominator = s.length
//     let numerator = 0
//     s.split('').forEach(e => printerCodeErrors.includes(e) === true ? numerator += 1 : numerator += 0)
//     return `${numerator}/${denominator}`
// }
//Other Codewars user used the following If-statement instead of creating an array of code errors:
// if (s[i] > "m") {
//     numerator++;
//   }
//Refactored using inspiration from the above hint from other user:
// function printerError(s) {
//     let denominator = s.length
//     let numerator = 0
//     s.split('').forEach(e => e > "m" ? numerator ++ : numerator)
//     return `${numerator}/${denominator}`
// }
//Test Case:
// console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'))

//Free Code Camp Counting Cards - JavaScript Algoruthms and Data Structures 06/08/2022
// In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
// Count Change	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'
// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.
// Example Outputs: -3 Hold or 5 Bet
// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.
// Do NOT return an array.
// Do NOT include quotes (single or double) in the output.

//My solution:
// let count = 0;
// function cc(card) {
  // Only change code below this line
//   let currentCount = ''
//   if(card == 2 || card == 3 || card == 4 || card == 5 || card ==6){
//     count += 1
//   }else if( card == 7 || card == 8 || card == 9){
//     count
//   }else{
//     count -= 1
//   }
//   count > 0 ? currentCount = "Bet" : currentCount = "Hold"
//   return `${count} ${currentCount}`;
  // Only change code above this line
// }
//Test Cases:
// console.log(cc(2))
// console.log(cc(3))
// console.log(cc(7))
// console.log(cc('K'))
// console.log(cc('A'))

//7 kyu Factorial 06/09/2022
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
//P: integer that is NOT below 0 or above 12
//R: Return the factorial of given integer. RangeError if not in range.
//E:
//Psuedocode: 
        //conditional for range error
        //return the product of n times every positive integer less than n
        //let accumulator = 1
        //for(i=1;i<=n;i++){ 
        //     accumulator *= i
        // } return accumulator
//My solution:
// function factorial(n){
//     let accumulator = 1
//     if(n < 0 || n > 12){
//       throw new RangeError
//     }else{
//         for(i=1;i<=n;i++){
//             accumulator *= i
//         }
//         return accumulator
//     }
//   }
//Test Case:
// console.log(factorial(0)) //3

// 7 kyu Credit Card Mask 06/10/2022
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
// "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"
//P: String of numbers and/or letters
//R: String that changes all but the last four characters into "#"
//E: "Skippy" --> "##ippy"
//Pseudocode:
  //split into an array
  //iterate/map the array, changing each element to '#', but also include
  //a condition to keep the last four letters the same
//My solution:
// function maskify(cc) {
//     let ccArray = cc.split('')
//     let mappedCc = ccArray.map((e,i)=>{
//         if(i <= ccArray.length - 5){
//             return "#"
//         }else{
//             return e
//         }
//     })
//     return mappedCc.join('')
// }
//Test Case:
// console.log(maskify('4556364607935616'))

// 6 kyu Create Phone Number 06/11/2022
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!
//P: array of 10 integers (between 0 and 9)
//R: string in the format `(###) ###-####`
//E: ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//Pseudocode:
    //use a template literal; each element by index goes into the template literal:
    // `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
//My solution (no loop):
// function createPhoneNumber(numbers){
//     return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
// }
// Arrow Syntax:
// const createPhoneNumber = numbers => `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
//Solution using for loop:
// function createPhoneNumber(numbers){
//     let phoneNumber = `(xxx) xxx-xxxx`
//     for (i=0;i<numbers.length;i++){
//         phoneNumber = phoneNumber.replace('x', numbers[i])
//     }
//     return phoneNumber
// }
//Test Cases:
// console.log(createPhoneNumber(([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])))
// console.log(createPhoneNumber(([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])))

// 8 kyu Enumerable Magic #25 - Take the First N Elements
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
//P: list/array and a number
//R: list/array of the first number elements from the list/array
//E: [0, 1, 2, 3, 5, 8, 13], 3 => [0, 1, 2]
//Pseudocode:
    //use a for loop/forEach
    //Must make conditional to not Return an array with length n if arr.length < n (Or else you get undefined elements in the final array!)
// function take(arr, n) {
//     let returnArr = []
//     if(arr.length < 1){
//         return []
//     }else{
//         if(arr.length > n){
//             for(i=0;i<n;i++){
//                 returnArr.push(arr[i])
//             }
//         }else{
//             for(i=0;i<arr.length;i++){
//                 returnArr.push(arr[i])
//             }
//         }
//     }
//     return returnArr
// }
//Shorter solution using .slice() method:
// const take = (arr, n) => arr.slice(0, n);
//Test cases:
// console.log(take([0, 1, 2, 3, 5, 8, 13],3))
// console.log(take([],3))

// 5 kyu Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
//P: String of words
//R: String with words converted
//E: pigIt('Hello world !');     // elloHay orldway !
//Pseudocode:
    //split string into array by word str.split(' ') example: "pig latin" => ['pig', 'latin']
    //map through the array: e => e + 'ay'
//My solution:
// function pigIt(str){
    // let wordsOfStr = str.split(' ') //splits the string into an array of each word
    // let translatedWords = wordsOfStr.map(word => {
    //     let alphabetLetters = /[a-zA-Z]/;
    //     return word.match(alphabetLetters) ? word.substring(1) + word[0] + 'ay' : word; 
        //during the mapping, if the "word" matches the letters in the alphabetLetters array(regex),
        //then it returns the word at substring(1) + index0 of word + "ay", otherwise returns the "word"
//     })
//     return translatedWords.join(' ')
// }
//Test case:
// console.log(pigIt("pig latin"))

// 7 kyu Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
//P: Two integers a,b
//R: sum of all the integers between and including them.
//E: (see above)
//Pseudocode:
    //use a for loop. Let sum = 0. for(i=a;i<=b;i++) sum += i ; this is assuming a is less than b
// function getSum( a,b ){
//     let sum = 0
//     if(a < b){
//         for(i=a;i<=b;i++){
//             sum +=i
//         }
//     }else if(a > b){
//         for(i=b;i<=a;i++){
//             sum +=i
//         }
//     }else{
//         return a
//     }
//     return sum
// }
//Test Case:
// console.log(getSum(1,-5))

// 6 kyu Are they the "same"? 06/13/2022
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.
// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
// Note for C
// The two arrays have the same size (> 0) given as parameter in function comp.
//P: Two arrays a and b
//R: True or False if the two arrays have the "same" elements, with the same multiplicities
//E: (see above)
//Pseudocode:
    //sort both arrays a and b (ex: least to greatest)
    //map a new array from a such that the elements equal the multiplicities.
    //compare the newly mapped array to array b; if equal then return true. Otherwise return false
//My solution:
    // function comp(array1, array2){
    //     if(array1 == null || array2 == null){
    //         return false
    //     }else{
    //         let sortedArray1 = array1.sort((a,b)=>a-b)
    //         let sortedArray2 = array2.sort((a,b)=>a-b)
    //         let mappedSortedArray1 = sortedArray1.map(e=>e*e)
    //         console.log(sortedArray1)
    //         console.log(sortedArray2)
    //         console.log(mappedSortedArray1)
    //         if(String(mappedSortedArray1) === String(sortedArray2)){
    //             return true
    //         }else{
    //             return false
    //         }
    //     } 
    // }
//Refactored/cleaned:
// function comp(array1, array2){
//     if(array1 == null || array2 == null){
//         return false
//     }else{
//         let sortedArray1 = array1.sort((a,b)=>a-b)
//         let sortedArray2 = array2.sort((a,b)=>a-b)
//         let mappedSortedArray1 = sortedArray1.map(e=>e*e)
//         if(String(mappedSortedArray1) === String(sortedArray2)){
//             return true
//         }else{
//             return false
//         }
//     } 
// }
//Test case:
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))

// 7 kyu Number of People in the Bus 06/14/2022
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.
//P: Array of integer pairs
//R: integer/num of people still in the bus
//E: ([[10,0],[3,5],[5,8]]) Return 5
//Pseudocode:
    //have 2 variables, one for those getting on and those for getting off.
    //map an array that adds the first element in each array to variable for getting on
    //map an array that adds the seecond element in each array to variable for getting off
    //combine the two variables and return
//My solution:
// let number = function(busStops){
//     let gettingOffBus = busStops.map(e=>e[1]).reduce((a,c)=> a + c, 0)
//     let gettingOnBus = busStops.map(e=>e[0]).reduce((a,c)=> a + c, 0)
//     return gettingOnBus - gettingOffBus
//   }
//Refactored - combine the current values from gettingOffBus and gettingOnBus within the reduce method.
// let number = busStops => busStops.reduce((a,c) => a + (c[0] - c[1]), 0) 
//Test Case:
//   console.log(number([[10,0],[3,5],[5,8]]))

//7 kyu Find the next perfect square! 06/15/2022
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
// Examples:(Input --> Output)
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square
//P: non-negative integer n
//R: next perfect square from n, or -1 if n is not a perfect square
//E: see above
//Pseudocode:
    //First test if n is a perfect square; if not, then return -1
    //If n is a perfect square, then return ((sqrt of n) + 1)^2
// function findNextSquare(sq) {
//     if (Math.sqrt(sq) % 1 != 0){
//         return -1
//     }else{
//         return Math.pow((Math.sqrt(sq) + 1),2)
//     }
// }
//Refactored - use arrow syntax:
// const findNextSquare = sq => Math.sqrt(sq) % 1 != 0 ? -1 : Math.pow((Math.sqrt(sq) + 1),2)

// 6 kyu Give me a Diamond 06/16/2022
// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
// Examples
// A size 3 diamond:
//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"
// A size 5 diamond:
//   *
//  ***
// *****
//  ***
//   *
// ...that is:
// "  *\n ***\n*****\n ***\n  *\n"
//P: num
//R: string using * and \n to represent each diamond; the * increases by 2 starting from 1 up to #n. return null if n is even or negative
//E: see above with n= 3 and n = 5
//Psuedocode:
    //set a conditional to return null when the number is even or negative: num % 2 == 1 || num < 1 ? null : (else condition here)
    //if number is odd and not negative, for loop to make the diamonds:
    // let diamondString = ''
    // for(i= 1;i <= n; i +=2 ){
    //     diamondString += `*\n`
    // }
    // return diamondString
//My solution: 
//WORK IN PROGRESS - COME BACK LATER
// function diamond(n){
//     let diamondString = `*`
//     let asterisks = ''
//     let diamondStringAsterisks = diamondString + asterisks
//     if(n % 2 == 0 || n < 1){
//         return null
//     }else{
//         for(i= 0;i < n; i ++){
//             diamondString += `\n`
//             }
//         }for(x=0; i < n; i++){
//             asterisks = `*`
//         }
//         return diamondStringAsterisks
//     }
    
// console.log(diamond(5))

// 8 kyu Is it even? 06/16/2022
// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.
//P: number, can be float
//R: true or false
//E: 0.5 returns false, 1 returns false, -4 returns true
//Psuedocode: if n (rounded DOWN) % 2 == 0, return true. Otherwise false.
//My solution:
// function testEven(n) {
//     return Math.ceil(n) % 2 == 0 ? true : false
// }
//My solution refactored:
// const testEven = n => Math.ceil(n) % 2 == 0 ? true : false
//Refactored:
// const testEven = n => Math.ceil(n) % 2 == 0 
//Refactored - Math.ceil not needed:
// const testEven = n => n % 2 == 0 
//test cases:
// console.log(testEven(-4))
// console.log(testEven(1))
// console.log(testEven(0.5))
// console.log(testEven(200.5))
// console.log(testEven(200))

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
// function divisors(integer) {
//     let primeChecker = 0
//     let returnArray = []
//     for (i=2; i <= integer - 1; i++){
//         if (integer % i !== 0){
//             primeChecker ++
//             if (primeChecker == (integer-2)){
//                 return `${integer} is prime`
//             }
//         }else{
//             returnArray.push(i)
//         }
//     }return returnArray
// };
//Test Case:
// console.log(divisors(17))

// 7 kyu Odd or Even? 06/18/2022
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// Examples:
// Input: [0]
// Output: "even"
// Input: [0, 1, 4]
// Output: "odd"
// Input: [0, -1, -5]
// Output: "even"
//P: array of integers
//R: Sum of the array, return "odd" or "even" 
//E: See above examples
//Psuedocode:
    //If array.length < 1 return even
    // let "sum" = the reduced array. if sum % 2 == 0 return even, else return odd
//My solution:
// function oddOrEven(array) {
//     if(array.length < 1) {
//         return "even"
//     }else{
//         let sum = array.reduce((a,b)=>a+b, 0)
//         if (sum % 2 == 0){return "even"}else{return"odd"}
//     }
//  }
//  //Refactored:
//  const oddOrEven = array => array.reduce((a,b)=>a+b,0) % 2 == 0 ? "even" : "odd"
// //Test case:
// console.log(oddOrEven([0, 1, 4]))

// 5 kyu Moving Zeros To The End
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
//P: Array of any data type
//R: Return the same array but all zeroes are moved to the end.
//E: See above
//Psueudocode:
    //create an array that filters out zeroes
    //create another array that filters for only zeroes
    //concatonate the array without zeroes + array with zeroes so that zeroes are at the end of the array
//My solution:
// function moveZeros(arr) {
//     let arrNoZero = arr.filter(e => e !== 0 )
//     let arrOnlyZero = arr.filter(e=>e===0)
//     return arrNoZero.concat(arrOnlyZero)
// }  
//Refactored:
// const moveZeros = arr => arr.filter(e => e !== 0 ).concat(arr.filter(e=>e===0))
//Test Case:
// console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))

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
// function isPrime(n) {
//     if(n<2){
//         return false
//     }else if(n===2){
//         return true
//     }
//     for(i=2;i<n;i++){
//         if(n%i === 0){
//             return false
//         }
//     } return true
// }
//Refactored - else if (n===2) is not necessary, because 2 DOES get caught in the loop:
// function isPrime(n) {
//     if(n<2){
//         return false
//     }
//     for(i=2;i<n;i++){
//         if(n%i === 0){
//             return false
//         }
//     } return true
// }
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

// 8 kyu What is between? 06/20/2022
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]
//P 2 integers where a < b
//R array of all integers between a and b including a and b
//E see above 1-4
//Psuedocode:
    //create a for loop from a to b (if they're equal, don't need for loop, just return a or b). as the loop iterates, it pushes i to the array to be returned
//My solution:
// function between(a, b) {
//     let betweenArray = []
//     if(a==b){
//         return a
//     }
//     for(i=a;i<=b;i++){
//         betweenArray.push(i)
//     }
//     return betweenArray
//   }
//Test:
// console.log(between(-2,4))

// 7 kyu Remove the minimum
// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.
// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]
//P: array of ints
//R: array of ints with smallest value removed
//E: see above
//Psuedocode:
    //map new array and sort the new array from smallest to largest
    //shift() the new array, and hold this value in a variable "lowestInt"
    //input lowest int variable into numbers.indexOf'; hold in a new variable "lowestIntIndex"
    //use numbers.splice(lowestIntIndex,1) to remove the lowestInt, but use a copy of numbers ("numbers2") so that the original array isn't mutated.
    //return numbers2
//My solution:
// function removeSmallest(numbers) {
//     let numbers2 = numbers.map(e=>e)
//     let sortedNumbers = numbers.map(e=>e).sort((a,b)=>(a-b))
//     let lowestInt = sortedNumbers.shift()
//     let lowestIntIndex = numbers.indexOf(lowestInt)
//     console.log(sortedNumbers)
//     console.log(lowestInt)
//     console.log(lowestIntIndex)
//     console.log(numbers)
//     numbers2.splice(lowestIntIndex,1)
//     return numbers2
//   }
//Test:
// console.log(removeSmallest([2,2,1,2,1]))

// 8 kyu MakeUpperCase 06/21/2022
// Write a function which converts the input string to uppercase.
//My solution:
// function makeUpperCase(str) {
//     return str.toUpperCase()
//   }
//Refactored:
// const makeUpperCase = str => str.toUpperCase()

//8 kyu Function 2 - squaring an argument 06/21/2022
// Now you have to write a function that takes an argument and returns the square of it.
// const square = n => Math.pow(n,2)
 
//6Kyu Array.diff 06/21/2022
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
//P: two arrays of any length a,b
//R: array removing any shared value in arrays a and b
//E: see above
//Psuedocode:
    //The return array is a filtered array a
    //The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    //combine !arrayFilter.includes() with the filter method, and the new array will filter out elements included in the arrayFilter array.
    //filtering: a.filter(e => !b.includes(e))
//My solution:
// function arrayDiff(a, b) {
//     return a.filter(e => !b.includes(e))  
// }
//Refactored:
// const arrayDiff = (a,b) => a.filter(e => !b.includes(e))  
//Test Case
// console.log(arrayDiff([1,2,2,2,3],[2]))

// 7 kyu Don't give me five! 06/22/2022
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
// Examples:
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!
// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.
// Have fun coding it and please don't forget to vote and rank this kata! :-)
// I have also created other katas. Take a look if you enjoyed this kata!
//P. start and end number of a region
//R. return the count of all numbers in the region except numbers with a 5 in it
//E. // 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
    // 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
//Pseudocode:
    //Use a for loop, starting from "start" and going to "end"
    //For each "i", if the number doesn't have a five in it, push it into an array. 
    //Convert each "i" to a string and use .includes('5') . . . for every "i" that doesn't include "5", push it to the array
    //Once the loop is finished, return the length of the array.
//My solution:
// function dontGiveMeFive(start,end){
//     let arrayNoFives = []
//     for (i=start; i<= end; i++){
//       if (!i.toString().includes('5')){
//         arrayNoFives.push(i);
//       }
//     }
//     return arrayNoFives.length;
// }
//Test Case:
// console.log(dontGiveMeFive(4,17))

// 8 kyu Grasshopper - Check for factor
// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
// About factors
// Factors are numbers you can multiply together to get another number.
// 2 and 3 are factors of 6 because: 2 * 3 = 6
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
// Note: base is a non-negative number, factor is a positive number.
//P: two ints (base, factor)
//R: boolean if factor is a factor for base.
//E: 10, 2 true; 24612, 3 true
//Pseudocode: if base % factor === 0 return true
//My solution:
// const checkForFactor = (base, factor) => base % factor == 0

// 7 kyu Round up to the next multiple of 5
// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?
// Examples:
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).
// You can assume that all inputs are valid integers.
//P integer as input
//R next multiple of 5 integer (higher)
//E See above examples
//Pseudocode:
    //if n % 5 == 0, return n
    //else, make a loop from n till the next integer that will make n % 5 true.
//My solution:
// function roundToNext5(n){
//     if(n % 5 == 0){
//         return n
//     }else{
//         do{
//             n++
//         } while (n % 5 !=0)
//     }
//     return n
// }
//Refactored - if statement not needed. Just keep the while-loop:
// function roundToNext5(n){
//     while (n % 5 !=0){
//         n++
//     }
//     return n
// }
//Test case:
// console.log(roundToNext5(22))

// 8 kyu Sum without highest and lowest number
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
//P: array of numbers
//R: Sum of array except highest and lowest element by value
//E: See above examples
//Pseudocode:
    //If array.length < 1 or array.isempty == true or array blah blah return zero
    //sort the array
    //splice from index 0 to index.length-1
    //reduce/sum and return sum
//My solution:
// function sumArray(array) {
//     if(!array || array.length < 1 ){
//         return 0
//     }else{
//         let sort = array.sort((a,b)=>a-b)
//         let spliced = sort.splice(1,sort.length-2)
//         console.log(spliced)
//         return spliced.reduce((a,c)=>a+c,0)
//     }
// }
//Refactored:
// const sumArray = array => !array || array.length < 1 ? 0 : array.sort((a,b)=>a-b).splice(1,array.length-2).reduce((a,c)=>a+c,0)
//Refactored - || array.length < 1 is not needed: 
// const sumArray = array => !array ? 0 : array.sort((a,b)=>a-b).splice(1,array.length-2).reduce((a,c)=>a+c,0)
//Test case:
// console.log(sumArray([1,1,11,2,3]))

// 7 kyu Count the divisors of a number
// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.
// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
//P: positive integer n
//R: integer number of divisors
//E: See above
//Pseudocode:
    //use a for loop, from i=1 to i=n
    //if n%i == 0, increase divisors++
//My Solution:
// function getDivisorsCnt(n){
//     let divisors = 0
//     for(i=1;i<=n;i++){
//         if(n%i == 0){
//             divisors++
//         }
//     }
//     return divisors
// }
//Test Case:
// console.log(getDivisorsCnt(500000))

//come back later when you learn hash map!!
// 6 kyu Counting Duplicates 06/24/2022
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
//P: input string of only alphabets and numeric digits
//R: return the COUNT/num of distinct case-insensitive alphabetic characters and digits
//E: See above:
//Pseudocode:
    //split each letter and number and place into an array using .split()
    //sort from least to greatest .sort((a,b)=>a-b)
    //loop through each element
//My solution:
// function duplicateCount(text){
//   }
// function duplicateCount(text) {
//     var nText = text.toLowerCase(); //this changes every character to lower case 
//     var myObj = {}; // Declaring an empty object
//     var counter = 0;
//     for (var i = 0; i < nText.length; i++) {
//     // assigning character as property and giving value 1 
//         if (!myObj[nText[i]]){
//             myObj[nText[i]] = 1;
//         }//checking if character already added
//         else if (myObj[nText[i]] < 2) {
//             myObj[nText[i]] += 1;
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(duplicateCount('ndvsbltesiiiiiii'))

//7 kyu Testing 1-2-3 06/25/2022
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
//P: list of strings
//R: each line prepended by the correct number
//E: See above examples
//Pseudocoode:
    //use a loop, declare variable = 0 and array = []
    //for each iteration through the array, add 1 to variable and push `${variable: [i]}` to an array, and return the array
//My solution:
// var number=function(array){
//     let counter = 0
//     let returnArray = []
//     for(i=0;i<=array.length-1;i++){
//         counter++
//         returnArray.push(`${counter}: ${array[i]}`)
//     }
//     return returnArray
// }
//Similar solution but using map:
// var number = function(array) {
//     return array.map((item, index) => `${index + 1}: ${item}`);
//   }
//Test case:
// console.log(number(["a", "b", "c"]))

// 7 kyu Two to One
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
//P: 2 strings s1 and s2
//R: Longest possible string containing distinct letters, taken only once
//E: See above
//Psuedocode:
    //split both strings and concatonate them so it's one large array of letters
    //Sort the array of letters
    //Map the array, but have a conditional that only maps elements without repeating them.
//My solution:
// function longest(s1, s2) {
//     let longestStr = s1 + s2
//     let longestArr = longestStr.split('')
//     let sortedLongestArr = longestArr.sort()
//     let res = [...new Set(sortedLongestArr)]
//     return res.join("")
//   }
//Refactored:
// function longest(s1, s2) {
//     let sortedLongestArr = (s1 + s2).split('').sort()
//     return ([...new Set(sortedLongestArr)]).join("")
//   }
//Refactored:
// function longest(s1, s2) {
//     return ([...new Set((s1 + s2).split('').sort())]).join("")
//   }
//Refactored:
// const longest = (s1,s2) => ([...new Set((s1 + s2).split('').sort())]).join("")
//Test Case:
// console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"))

//8 kyu Filling an array (part 1)
// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:
// arr(5)  => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.
//P:
//R: An array with the numbers 0 to N-1
//E: arr(5) // => [0,1,2,3,4]
//Pseudocode:
    //Set an empty array []
    //Use a loop going from 0 to n.length-1
//My solution:
// function arr(N){
//     let returnArray = []
//     for (i=0; i < N; i++){
//         returnArray.push(i)
//     }
//     return returnArray
// }
//Test:
// console.log(arr(5))

// 7 kyu Sum of all the multiples of 3 or 5
// Your task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
// For example:
// findSum(5) should return 8 (3 + 5)
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
//P: integer n
//R: the sum of all multiples of 3 and 5
//E: see above example:
//Pseudocode:
    //First find the multiples of 3 and five between 0 and N (assuming N cannot be negative)
    //use a for loop going from  0 to n
    //when iterating, if (i) % 3 == 0 or i % 5 == 0, push it to a sum array.
    //after the loop, return the sum of the sum array using .reduce((acc,c)=>acc + c, 0)
//My solution (using an array)
// function findSum(n) {
//     let sumArray = []
//     for (i=0; i<=n; i++){
//         if (i % 3 == 0 || i % 5 == 0){
//             sumArray.push(i)
//         }
//     }return sumArray.reduce((acc,c)=>acc + c, 0)
// }
//Refactored - Array is not needed, just use an integer and add to it:
// function findSum(n) {
//     let sum = 0
//     for (i=0; i<=n; i++){
//         if (i % 3 == 0 || i % 5 == 0){
//             sum += i
//         }
//     } return sum
// }
//Test case:
// console.log(findSum(10))

//8 kyu Will there be enough space?
//The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
// Task Overview:
// You have to write a function that accepts three parameters:
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
//P: cap (# ppl the bus can hold), on (# ppl on the bus), wait (number of people waiting to get on bus)
//R: # of passengers bus CAN'T take, or 0 if there is enough space
//E: 
    // cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
    // cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
//Pseudocode:
    //if wait + on is greater than cap then return on + wait - cap, otherwise return 0
//My solution:
// function enough(cap, on, wait) {
//    return (on + wait) >= cap ? on + wait - cap : 0
//   }
//Refactored using arrow syntax:
// const enough = (cap, on, wait) => (on + wait) >= cap ? on + wait - cap : 0

// 8 kyu Area or Perimeter
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// Example(Input1, Input2 --> Output):
// 6, 10 --> 32
// 3, 3 --> 9
//P: length and width of 4-sided polygon
//R: area if square, perimeter if rectangle
//E: See above examples
//P: if length equals width, return length*width, otherwise return (width *  2) + (length * 2)
//My solution:
// const areaOrPerimeter = (l,w) => l == w ? l * w : (l * 2) + (w * 2)

// 7 kyu Find the middle element
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
// For example:
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
// Another example (just to make sure it is clear):
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
//P: triplet of integers
//R: Return the indexOf the element that is between the min and max of the triplet
//E: See above
//Pseudocode:
    //Map a separate array identical to the given array so we can mutatate it without affecting the original array.
    //sort this array so that it is sorted from least to greatest
    //Of the sorted triplet, the element at index 1 will be the middle value of the triplet, so save this element as middleVariable
    //Using the unmutated original array, use indexOf(middleVariable) to get the index and return it
//My solution:
// function gimme (triplet) {
//     let sortedArray = triplet.map(e=>e).sort((a,b)=>a-b)
//     let middleVariable = sortedArray[1]
//     return triplet.indexOf(middleVariable)
//     }
//Test case:
// console.log(gimme([2,3,1]))

// 8 kyu Correct the mistakes of the character recognition software 6/30/2022
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.
//P: String
//R: Return string but correcting the above mentioned characters
//E: 51NGAP0RE -> SINGAPORE
//Pseudocode:
    //Use string replace method to replace 5 with S, 0 with O and 1 with I using /regex/g
//My solution:
// function correct(string){
// 	return string.replace(/5/g,'S').replace(/0/g,'O').replace(/1/g,'I')
// }
//Arrow syntax:
// const correct = string => string.replace(/5/g,'S').replace(/0/g,'O').replace(/1/g,'I')
//Test Case:
// console.log(correct("51NGAP0RE"))

// 8 kyu String Templates - Bug Fixing #5
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
//My solution:
// function buildString(...template){
//     return `I like ${template.join(', ')}!`;
//   }
//Arrow Syntax:
// const buildString = (...template) => `I like ${template.join(', ')}!`

// 8 kyu Is the string uppercase?
// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.
// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
//My solution - access the input using the "this" keyword:
// String.prototype.isUpperCase = function() {
//    return this == this.toUpperCase()
//   }

//7 kyu Greet Me
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
// Example:
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"
//P: string (name)
//R: Greeting "Hello Name!"
//E: See examples above
//Pseudocode:
    //convert the string to lower case, but take off the first letter and set to uppercase
    //use template literal and concatonate everything together, returning the greeting.
//My solution:
// function greet(name) {
//     let caseSensitive = name.toLowerCase().slice(1,name.length+1)
//     let capitalizedFirstLetter = name.slice(0,1).toUpperCase()
//     return `Hello ${capitalizedFirstLetter+caseSensitive}!`
// };
//Test Case:
// console.log(greet("riley"))