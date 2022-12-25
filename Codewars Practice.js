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

// 7 kyu Calculate Two People's Individual Ages
// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:
// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative
//P: Sum and Difference of two peoples' ages
//R: pair of values (oldest first) or null
//E:    63, -14 -> null
//      24, 4 -> 14, 10
//      50, 5 ->
//Pseudocode:
    // if sum < 0 return null
    // if difference < 0 return null
    // else
        //let value1 = oldest age
        //let value 2 = younger age
//My solution:
// function getAges(sum,difference){
//     if(sum < 0){
//         return null
//     }else if(difference < 0){
//         return null
//     }else{
//         let oldest = (sum + difference)/2
//         let youngest = oldest - difference
//         if(oldest >= 0 && youngest >= 0){
//             return [oldest, youngest] 
//         }else{
//             return null
//         }
//     }
// }
//Refactored:
// function getAges(sum,difference){
//     if(sum < 0 || difference < 0){
//         return null
//     }else{
//         let oldest = (sum + difference)/2
//         let youngest = oldest - difference
//         if(oldest >= 0 && youngest >= 0){
//             return [oldest, youngest] 
//         }else{
//             return null
//         }
//     }
// }
//Test:
// console.log(getAges(63,-14))

// 7 kyu Summing a number's digits
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
// For example: (Input --> Output)
// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.
//P: integer
//R: Sum of the absolute value of each of the number's digits
//E: see above examples
//Pseudocode:
    //obtain the absolute value of number (or convert to positive)
    //convert number to array of numbers
    //sum the numbers in the array and return the sum
//My solution: 
// function sumDigits(number) {
//     let absNumber = Math.abs(number)
    //Recall how to convert number to array of numbers using String primitive, split, and map.
//     let numberArray = String(absNumber).split('').map((absNumber)=>{
//         return Number(absNumber)
//     })
//     return numberArray.reduce((a,b)=>a+b,0)
// }
//Test Case:
// console.log(sumDigits(99))

// 6 kyu Mexican Wave
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
// 1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example - wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
//P: lowercase string
//R: Array of the string in which the elements are the string doing the Mexican wave
//E: wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
//Pseudocode:
    //declare a variable for the return array that will be added to for each loop
        //for loop will go from 0 to str.length, and each time the loop finishes, push the string with the appropriate letter being capitalized
        //The letter to be capitalized will be str[i] -> str[i].toUpperCase()
        //concatonate the appropriate letters before and after str[i] when applicable:
            //str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1)
//My solution:
// function wave(str){
//     let returnArray = []
//     for(i=0;i<str.length;i++){
//         if (str[i] === " "){
//             continue
//         }else{
//             returnArray.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
//         }
//     }
//     return returnArray
// }
//Test case:
// console.log(wave("hello"))

// 6 kyu Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
//P: String
//R: String but with "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
//E: See above examples
//P:
    //convert string to array of strings
    //loop through the array, each time checking if that element is already present in the string or not.
    //Add "(" or ")" to the return string as applicable
    //use a hashmap to store if letter is duplicate or not
//My solution:
// function duplicateEncode(word){
//     let returnString = ""
//     let map = {} //use a hashmap here to store if letter is duplicate or not
//     for (i=0;i<word.length;i++){
//         let letter = word[i].toLowerCase(); //convert to same case
//         //use the "in" operator, which returns true if the specified property is "IN" the specified object (ex: 'map') or its prototype chain.
//         if(letter in map){
//             map[letter] = true;
//         }else{
//             map[letter] = false
//         }
//     }
//     for (i=0;i<word.length;i++){
//         let letter = word[i].toLowerCase()
//         if(isDuplicate[letter]){
//             returnString += ')'
//         }else{
//             returnString += '('
//         }
//     }
//     return returnString
// }
// //Refactored
// function duplicateEncode(word){
//     word = word.toLowerCase()
//     let returnString = ""
//     let hashMap = {} //use a hashmap here to store if letter is duplicate or not
//     for (i=0;i<word.length;i++){
//         hashMap[word[i]] = hashMap[word[i]] ? ')' : '(';
//         //Assignment operator hashMap[word[i]] = hashMap[word[i]]. truth -> ')', falsey -> '('
//     }
//     for (i=0;i<word.length;i++){
//         returnString += hashMap[word[i]]
//         //adds the value of hashMap[word[i]] to the return string
//     }
//     return returnString
// }
// //Test case:
// console.log(duplicateEncode("recede"))

// 7 kyu Categorize New Member - FIRST TRY!!
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
//P: List of pairs; integer for age and integer for handicap
//R: Array stating wheter the respective member is to be placed in SENIOR or OPEN categeory
//E: See above examples
//Pseudocode:
    //iterate through the lists. If index 0 is 55 or greater AND index 1 is greater than 7, return "Senior". Otherwise return "Open"
//My solution:
// function openOrSenior(data){
//     let openOrSeniorArray = []
//     data.forEach((e)=>{
//         if(e[0]>=55 && e[1]>7){
//             openOrSeniorArray.push('Senior')
//         }else{
//             openOrSeniorArray.push("Open")
//         }
//     })
//     return openOrSeniorArray
//   }
// //My solution refactored using Ternary Operation:
// function openOrSenior(data){
//     let openOrSeniorArray = []
//     data.forEach((e)=>{
//         e[0]>=55 && e[1]>7 ? openOrSeniorArray.push('Senior') : openOrSeniorArray.push("Open")
//     })
//     return openOrSeniorArray
// }
// //Test Case:
// console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]))

// 7 kyu Check the exam
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.
// For example:
// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
//P: answer key as an array of letters, and submitted answers as an array of letters and/or space(s)
//R: score/number: +4 for correct, -1 for incorrect, 0 for blank
//E: See above
//Pseudocode:
    //Compare the 2 arrays to each other.
    //Declare a return variable of "score"
    //Make a loop to iterate through the arrays:
     //if array 2 has "" then add 0 to score
        //if index[i] if array 1 == index[i] of array 2, then +4 to the score variable
        //Otherwise subtract 1 from score
        //return score
//My solution:
// function checkExam(array1, array2) {
//     let returnScore = 0
//     for(i=0;i<array1.length;i++){
//         if(array2[i]==array1[i]){
//             returnScore += 4
//         }else if(array2[i]=== ""){
//             returnScore += 0
//         }else{
//             returnScore -= 1
//         }
//     }
//     if (returnScore > 0) {
//         return returnScore;
//         } else { 
//         return 0;
//    }
// }
// //Test Case
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))


// for reference: 
// function duplicateEncode(word){
//     word = word.toLowerCase()
//     let returnString = ""
//     let hashMap = {} //use a hashmap here to store if letter is duplicate or not
//     for (i=0;i<word.length;i++){
//         hashMap[word[i]] = hashMap[word[i]] ? ')' : '(';
//         //Assignment operator hashMap[word[i]] = hashMap[word[i]]. truth -> ')', falsey -> '('
//     }
//     for (i=0;i<word.length;i++){
//         returnString += hashMap[word[i]]
//         //adds the value of hashMap[word[i]] to the return string
//     }
//     return returnString
// }

// 6 kyu Two Sum
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
// Based on: http://oj.leetcode.com/problems/two-sum/
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
//P: Array of Numbers
//R: Array containing two different nums in the array that add together to equal the target value (aka "complement pair")
//E: See above
//Pseudocode:
//          Loop through the array; as we are iterating, compare the complement pairs to see if they add up to target.
//          Use a hashmap to record pairs we have already seen, so that we're not going over the same pairs
//My solution:
// function twoSum(numbers, target) {
//     // Use a hashmap to record pairs we have already seen:
//     let hashMap = {}
//     for(i=0; i<numbers.length; i++){
//         let value = numbers[i]
//         let complementPair = target - value
//         if(hashMap[complementPair] !== undefined){
//             //If the map DOES contain the complement pair, we want to return the array:
//             return [hashMap[complementPair], i] //return hashMap [complement pair], index i
//         }else{
//             //If the map does NOT contain the complement pair, we'll record it in the hashmap to record we've seen it:
//             hashMap[value] = i
//         }
//     }
//   }
//Test case:
// console.log(twoSum([1, 2, 3], 4)) //[0, 2] or [2, 0]

// 8 kyu Exclamation marks series #1: Remove an exclamation mark from the end of string
// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
//P: String
//R: Same string but with exclamation mark removed if present at the end of the original.
//E: See above examples
//Pseudocode:
//          if charAt(end of string) is "!", then splice it out and return the string
//My solution:
// function remove (string) {
//     if(string.charAt(string.length-1)==="!"){
//         return string.slice(0,string.length-1)
//     }else{
//         return string
//     }
//   }
// //Refactored:
// const remove = string => string.charAt(string.length-1)==="!" ? string.slice(0,string.length-1) : string
// //Refactored - for slice, going from RIGHT TO LEFT, you can use negative indices:
// const remove = string => string.charAt(string.length-1)==="!" ? string.slice(0,-1) : string
// //Test Cases:
// console.log(remove("hi!!"))
// console.log(remove("hi"))

// 8 kyu All Star Code Challenge #18
// This Kata is intended as a small challenge for my students
// All Star Code Challenge #18
// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
// The first argument can be an empty string
// The second string argument will always be of length 1
//P: two strings - first string may be empty and second string will always be length 1
//R: number - count of occur
//E: ("Hello", "l")  ==>  2 (See above examples)
//Pseudocode:
    //set a variable for count; we will return this variable at the end
    //split string into an array of letters (if letters are available)
    //We will iterate through the length of the first string
    //Through every iteration, if letter === letter in the string, add to count.
    //Return the count variable at the end of the iteration
//my solution:
// function strCount(str, letter){  
//     let count = 0
//     let strArray = str.split('')
//     let strArrayLength = strArray.length
//     for(i=0;i<strArrayLength;i++){
//         if(strArray[i] === letter){
//             count++
//         }
//     }
//     return count
// }
//Refactored - This way has one less line of code HOWEVER, it adds time complexity while saving on memory since ".length" has to be calculated on each iteration.
// function strCount(str, letter){  
//     let count = 0
//     let strArray = str.split('')
//     for(i=0;i<str.length;i++){
//         if(strArray[i] === letter){
//             count++
//         }
//     }
//     return count
// }
//Test Cases:
// console.log(strCount("", "z"))
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

// 7 kyu All Star Code Challenge #16
// This Kata is intended as a small challenge for my students
// All Star Code Challenge #16
// Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.
// noRepeat("aabbccdde") // => "e"
// noRepeat("wxyz") // => "w"
// noRepeat("testing") // => "e"
// Note: ONLY letters from the english alphabet will be used as input There will ALWAYS be at least one non-repeating letter in the input string
//p: string
//r: returns first letter in the string that is not repeated in the entire string
//e: See above examples
//Pseudocode:
//          iterate through the string.
//          if indexOf(str[i]) is the same as lastIndexOf(str[i]), then return str[i]
//          This will be correct, because during the loop, the function will grab the first index, comparing to the last index; if there is only one instance of the letter, the indexes will be the same!
//          Otherwise, it will continue down the loop till it finds the character that does not repeat.
//My solution:
// function noRepeat(str) {
//     for(i=0;i<str.length;i++){
//         if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
//             return str[i]
//         }
//     }
// }
// //Other solution using for...of loop:
// function noRepeat(str) {  
//     for(var i of str) if(str.split(i).length == 2) return i
//   }
// //Test cases:
// // noRepeat("aabbccdde") // => "e"
// // noRepeat("wxyz") // => "w"
// // noRepeat("testing") // => "e"
// console.log(noRepeat("aabbccdde"))

// Leetcode 1470. Shuffle the Array
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
// Example 1:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
// Example 2:
// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]
// Example 3:
// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]
//Parameters: Input = array of numbers and integer n that splits the number
//Return:  Same array but card shuffled 
//Pseudocode:
        //Create variable piles (example: let piles = )
        //loop through nums to cut cards
        //After building piles, sample each item to a new array. Return new array
// var shuffle = function(nums, n) {
//     let piles = []
//     for (let i=0; i<nums.length;i+=n){
//         let pile = nums.slice(i,i+n)
//         piles.push(pile)
//     }
//     let result = []
//     for (let i=0; i<n; i++){
//         let pickup = piles.map(pile => pile[i]).filter(num => num != undefined)
//         result = result.concat(pickup)
//     }
//     return result
// };

//leetcode 2053. Kth Distinct String in an Array - Come back later
// var kthDistinct = function (arr, k) {
//   let tally = {};
//   arr.reduce((tally, string) => {
//     if (Number.isInteger(tally[string])) {
//       //increment
//     } else {
//       tally[string] = 1;
//     }

//     return tally;
//   }, tally);
//   console.log(tally)
// };
// console.log(kthDistinct(["d","b","c","b","c","a"],2))

// 7 kyu Race Ceremony
// The national go-kart racing competition is taking place in your local town and you've been called for building the winners podium with the available wooden blocks. Thankfully you are in a wood-rich area, number of blocks are always at least 6.
// Remember a classic racing podium have three platforms for first, second and third places. First place is the highest and second place is higher than third. Also notice that platforms are arranged as 2nd - 1st - 3rd.
// The organizers want a podium that satisfies:
// The first place platform has the minimum height posible
// The second place platform has the closest height to first place
// All platforms have heights greater than zero.
// Task
// Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.
// Examples (input -> output)
// 11 ->   [4, 5, 2]
// 6  ->   [2, 3, 1]
// 10 ->   [4, 5, 1]
//7 -> [2,4,1]
//10000 -> [33334, 33335, 33331]]
//Parameters: integer of blocks available
//R: array for second, first, and last place.
//E: See examples above
//Pseudocode:
        //Per the examples, second place is Math.ceil(blocks/3), first place is secondPlace + 1, thirdPlace is the remainder. This works in all cases EXCEPT for when blocks is 7.
        //Return all three variables in array [secondPlace, firstPlace, thirdPlace]
//My solution:
// function racePodium(blocks) {
//   if (blocks == 7) {
//     return [2, 4, 1]; //Without this statement, the else will return 3, 4, 0.
//   } else { //This statement works for all test cases EXCEPT for blocks == 7
//     let secondPlace = Math.ceil(blocks / 3);
//     let firstPlace = secondPlace + 1;
//     let thirdPlace = Math.ceil(blocks - secondPlace - firstPlace);
//     return [secondPlace, firstPlace, thirdPlace];
//   }
// }
// //Solution from other user - Instead of making an else for blocks == 7, 
// //they made a condition to -- and ++ secondPlace and thirdPlace respectively when thirdPlace is < 1:
// function racePodium(blocks) {
//     let first=Math.ceil(blocks/3+1);
//     let second = first-1;
//     let third = blocks - first - second;
//     if (third<1) {second--;third++}
//     return [second,first,third];
//   }
// //Test Cases:
// console.log(racePodium(8))

// // LeetCode 206. Reverse Linked List
// // Given the head of a singly linked list, reverse the list, and return the reversed list.
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
// //  * @param {ListNode} head
// //  * @return {ListNode}
// //  */
// //Pseudocode:
// //The last node points to null (aka tail points to null)
// //We eventually want the first node to point to null once everything is reversed (aka head will point to null . . . becoming the new tail)
// //We want to point the nodes to the previous node:
//     //Create a variable ("previous") and set it to null
//     //That way we take what WAS the head, and essentially make it the tail
//     //And then we will work our way to reassign the nodes' next properties to the number before it
// //Iterative solution:        
// var reverseList = function(head) {
//     let previous = null //use previous so the head will be the new tail
//     let next = null //

//     while(head != null){//"while head is not the tail/null (only tails point to null):
//         //The purpose of this loop is to keep updating head to be the next node in the chain (That is how we are iterating.):
//         next = head.next
//         head.next = previous//connection has been severed for head.
//         previous = head //We need to sever the other connections
//         head = next
//         //Once head DOES equal null, we have reached the end of reversing the list since the head will now be the tail. 
//        // We can then return previous
//     }
//     return previous
// }
//Test case (array...not linked list)
// console.log(reverseList([1,2,3,4,5]))

// LeetCode 9. Palindrome Number
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Constraints:
// -231 <= x <= 231 - 1
//Parameter: integer x
//Return: True if palindrome, else False
//Examples: see above
//Pseudocode:
    //declare a separate variable reversedNumber, which will be reversed of x:
            //let reversedNumber = String(x).split('').reverse()
// var isPalindrome = function(x) {

//     let stringNumber = String(x)
//     let reversedNumber = String(x).split('').reverse().join('')
//     return stringNumber === reversedNumber ? true : false
    
// };
//Test Case
// console.log(isPalindrome(1231))

// Follow up: Could you solve it without converting the integer to a string?

// 8 kyu Is he gonna survive?
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise :)
//P: # bullets, # dragons
//R: True if hero has enough bullets to kill all the dragons, otherwise False
//Example: 
// (hero(10, 5), true);
// (hero(7, 4), false);
// (hero(4, 5), false);
// (hero(100, 40), true);
// (hero(1500, 751), false);
// (hero(0, 1), false);
//Pseudocode: 
    //if bullets is >= 2*dragons, return true otherwise return false
//My solution:
// function hero(bullets, dragons){
//     return bullets >= dragons * 2 ? true : false
// }
// //Arrow function:
// const hero = (b,d) => b >= d * 2 ? true : false

// 6 kyu Sort the odd
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
//P: Array of nums
//R: Array of nums with odd numbers sorted, but even numbers stay in the same position
//Examples: see above
//Pseudocode:
        //filter out the original array (maybe declare new array for this so it doesn't mutate...call it oddArray) and REMOVE the even nums.
        //map the array but have a condition that if the element is odd, shift the odd array.
        //Let's mess with this a bit . . . try sorting from least to GREATEST, and instead of shift, do pop! sort((a,b)=>b-a)
//My solution:
// function sortArray(array) {
//     let oddArray = array.filter((x) => x % 2).sort((a,b) => b - a);
//     return array.map((x)=> x % 2 ? oddArray.pop() : x)
//   }

// // Best Practices solution:
// function sortArray(array) {
//     //FILTER OUT the evens and sort the odd numbers
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     console.log(odd)
//     //Map array, but if x is even, then we will map odd.shift(), which will return the left-most element in the odd array (which is sorted from least to greatest)
//     return array.map((x) => x % 2 ? odd.shift() : x)
//   }
// //Test Case:
// console.log(sortArray([5, 8, 6, 3, 4]))

// 8 kyu Exclusive "or" (xor) Logical Operator
// Overview
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:
// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
//P: a and b, two expressions to be evaluated
//R: True if exactly one of the two expressions evaluate to true, false otherwise
//E: false, false //false (see above examples)
//Pseudocode:
    //evaluate if a == b. Return false, otherwise return true
//my solution:
// const xor = (a,b) => a == b ? false : true
// //Refactored:
// const xor = (a,b) => a != b

// 7 kyu Divide and Conquer
// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
// Return as a number.
//P: array of strings and integers
//R: Sum of the strings/integers as a number
//E:[9, 3, '7', '3'] returns 2
//create variable for strings
//create variable for integers
//Filter out integers from strings in x
//convert variable for strings to nums and add to integers
// function divCon(x){
//     let xString = x.filter(function (x) {
//         return typeof x === 'string' 
//       })
//     let xNum = x.filter(function (x) {
//     return typeof x === 'number' 
//     })
//     let xStringToNum = xString.map(x=>x*-1)
//     let concatStringAndNum = xStringToNum.concat(xNum)
//     return concatStringAndNum.reduce((a,c)=>a+c, 0)
//   }
// //Test case:
// console.log(divCon([9, 3, '7', '3']))

// Leet Code 26 Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
//P: array of nums sorted in non-decreasing order
//R: return k (k is the number of elements AFTER REMOVING DUPLICATES)
//E:
        // Input: nums = [1,1,2]
        // Output: 2, nums = [1,2,_]    
        // Input: nums = [0,0,1,1,1,2,2,3,3,4]
        // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]     
//Pseudocode:
        //declare a variable that will find the length of the array after removing the duplicates (k)
        //create a for loop that will check to see if nums[i] is != nums[i-1] (basically checking if the index your looking at is not equal to the previous index)
        //if true, then set the array[i] equal to array[k], and increment k (k++). Return k
//My solution:
// var removeDuplicates = function(nums) {
//     let k = 0
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] != nums[i-1]){
//             nums[k] = nums[i]
//             k++
//         }
//     }
//     return k
// };
//test case:
//input: [0,0,1,1,1,2,2,3,3,4]
//Go through the loop one step at a time to visually keep track of i, k, and nums:
//i: 0 1 2 3 4 5 6
//k: 0 1 2 3
//nums: [0,1,2,3,4,2,2,3,4]
//Other solution that pertains more to JavaScript, since JS has a slice method and can mutate the original array length, and return the length (not all languages can do this, hence the solution above is still valid):
// const removeDuplicates = nums => {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + 1]) {
//             nums.splice(i, 1);
//             i--;
//         }
//     }
//     return nums.length;
// };

// 7 kyu All Star Code Challenge #3
// Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").
//P: string
//R: String but filter out the vowels
//E: drake -> drk, aeiou -> ""
//Pseudocode:
    //Create a loop that iterates through the str length
    //declare a return string
    //if charAt(i) is not a vowel, strRemovedVowels+charAt(i)
    // return the string
// var removeVowels = function(str){
//     let strRemovedVowels = ""
//     for(i=0;i<str.length;i++){
//         if(str.charAt(i) != "a" && str.charAt(i) != "e" && str.charAt(i) != "i" && str.charAt(i) != "o" && str.charAt(i) != "u"){
//             strRemovedVowels += str.charAt(i)
//         }    
//     }
//     return strRemovedVowels
// }
// //Test Case:
// console.log(removeVowels("drake"))

// 7 kyu Small enough? - Beginner
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.
//P: array and limit
//R: true if all values in array are below or equal to the limit, else return false
//E:    //[66, 101], 200 -> true
        //[78, 117, 110, 99, 104, 117, 107, 115], 100 -> false
//Pseudocode:
        //iterate through the array and compare to limit
        //return false if false
//My solution:
// function smallEnough(a, limit){
//     let foundFalse = 0
//     let lengthOfA = a.length
//     for(let i=0; i<lengthOfA; i++){
//         if(a[i] <= limit){
//             foundFalse += 0
//         }else{
//             foundFalse += 1
//             break
//         }    
//     }
//     return foundFalse > 0 ? false : true
// }
// //Refactored - Change if statement around; counter not needed:
// function smallEnough(a, limit){
//     let lengthOfA = a.length
//     for(let i=0; i<lengthOfA; i++){
//         if(a[i] > limit){
//             return false
//         }
//     }
//     return true
// }
// //Better solution using (...a):
// function smallEnough(a, limit){
//     return Math.max(...a) <= limit
//   }
// //Test:
// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))

// 7 kyu All Star Code Challenge #1
// Write a function, called sumPPG, that takes two NBA player objects/struct/Hash/Dict/Class and sums their PPG
//Parameters: playerOne, playerTwo (objects)
//Return: sum of playerOne and playerTwo PPG
//Example:
// var iverson = new NBAplayer("Iverson", "76ers", 11.2);
// var jordan = new NBAplaer("Jordan", "bulls", 20.2);
// sumPPG(iverson, jordan); // => 31.4
//Pseudocode:
        //use dot notation or bracket notation to add the ppg properties from playerOne and playerTwo
//My solution - dot notation
// function sumPPG(playerOne, playerTwo){
//     return playerOne.ppg + playerTwo.ppg
// }
// //My solution - bracket notation
// function sumPPG(playerOne, playerTwo){
//       return playerOne['ppg'] + playerTwo['ppg']
// }
// //Arrow syntax solutions:
// const sumPPG = (playerOne, playerTwo) => playerOne.ppg + playerTwo.ppg
// const sumPPG = (playerOne, playerTwo) => playerOne['ppg'] + playerTwo['ppg']

// All Star Code Challenge #14 - Find the median
// Your non-profit company has assigned you the task of calculating some simple statistics on donations. You have an array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.
// The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.
// Write a function that takes an array of integers as an argument and returns the median of those integers.
// Notes:
// The sorting step is vital.
// Input arrays are non-empty.
//P: array of integers
//R: median of the array of integers. If even, the two middle values are averaged.
//E:Median of [33,99,100,30,29,50] is 41.5. // Median of [3,2,1] is 2.
//Pseudocode:
        //sort the array. If odd, return the element at the middle index. Middle index (if odd) is  Math.ceil((array.length/2) - 1)
        //If even, find the average of the sorted array at [((((array.length)-1)/2)] + ((array.length/2))) / 2
//My solution:
// function median(array) {
//     let sortedArray = array.sort((a,b)=>a-b)
//     let sortedArrayLengthMinusOne = sortedArray.length - 1
//     if(array.length % 2 == 0){
//         return ((sortedArray[Math.floor(sortedArrayLengthMinusOne/2)]) + ((sortedArray[((sortedArray.length)/2)]))) / 2
//     }else{
//         return sortedArray[Math.ceil((array.length/2) - 1)]
//     }
// }
//Test cases:
// console.log(median([1,2,3,50]))
// console.log(median([3,2,1]))
// console.log(median([33,99,100,30,29,50]))//sorted: [29, 30, 33, 50, 99, 100]

// 7 kyu Reverse list - 7/21/2022
// Write reverseList function that simply reverses lists.
//P: Array
//R: return array but reversed
//E: Use "reverse"
//Pseudocode: 
    //Use array.reverse() method to return a reversed array
    //Try using a loop for another solution. Declare an empty array, add to the array during a loop, return the array
//My solutions:
// function reverseList(arr) {
//     return arr.reverse();
//   }
// //Refactored - Arrow syntax:
// const reverseList = arr => arr.reverse()
// //My solution using for loop:
// function reverseList(arr) {
//     let reversedArray = []
//     for(let i=0; i < arr.length; i++){
//         reversedArray.unshift(arr[i])        
//     }
//     return arr.reverse();
//   }
// //Test Case:
// console.log(reverseList([29, 30, 33, 50, 99, 100]))

// // 6 kyu Your order, please
// // Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// // Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// // If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// // Examples
// // "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// // "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// // ""  -->  ""
// //P: String
// //R: Sort the string; each word has a number which represents the position the word should have in the result. Return empty string if given empty string.
// //E: See above
// //Pseudocode:
// //          split the string into array of words
// //          set a variable for the return array
// //          map an array that sorts by number - here's how:
// //              //use for each to loop through each word in the array of words
//                 //in the loop: 
//                     //declare a variable x to split each word by character (let x = word.split(''))
//                     //declare a variable num to find each character as a number (let num = x.find(x => x*1))
//                     //push([word,num*1]) to the return array
//                 //returnArray should now be an array of arrays that include the split words along with the number order. Example: ['4of',4]
//                 //use sort to sort sort the returnArray least to greatest: 
//                     // returnArray.sort((a,b)=>a[1]-b[1])
//                 //use map and splice out the element at index 1 Example: ['4of',4] becomes ['4of']
//                     //.map(x=>x.splice(1,1))
//                 //use join (' ') on the return array and return it 
//                     //return returnArray.join(' ')
// //My solution:
// function order(words){
//     let splitOrder = words.split(' ') //split the string into array of words
//     let returnArray = [] //set a variable for the return array
//     splitOrder.forEach(word => { //use for each to loop through each word in the array of words
//         let x = word.split('') //declare a variable x to split each word by character (let x = word.split(''))
//         let num = x.find(x => x*1)  //declare a variable num to find each character as a number (let num = x.find(x => x*1))
//         returnArray.push([word,num*1])  //push([word,num*1]) to the return array
//     })
//     //returnArray should now be an array of arrays that include the split words along with the number order. Example: ['4of',4]
//     returnArray.sort((a,b)=>a[1]-b[1]).map(x=>x.splice(1,1))
//    //returnArray SUBARRAYS are now sorted .sort((a,b)=>a[1]-b[1]) , and the element at [1] should be removed .map(x=>x.splice(1,1)) - Example: ['4of',4] becomes ['4of']
//     return returnArray.join(' ')
//     // returnArray is now a string joined by ' '
//   }
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
// //output: 'Fo1r the2 g3ood 4of th5e pe6ople'

// 8 kyu The Feast of Many Beasts
// There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// // Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
//P: Two strings: beast and dish
//R: Return true if the dish string starts and ends with the same letters as the best string
//E: See example above
//Pseudocode:
        //Use charAt and compare. If charAt 0 and charAt beast.length and dish.length are equal, return true. else return false

// const feast = (beast, dish) => beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1) ? true : false
//My solution:
// function feast(beast, dish) {
//     if(beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1)){
//         return true
//     }else{
//         return false
//     }
// }
// //Refactored using arrow syntax and ternary operator:
// const feast = (beast, dish) => beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1) ? true : false
// //Refactored using arrow syntax and ternary operator and BRACKET NOTATION (I didn't know brackets could be used on strings!! Learn something new everyday):
// const feast = (beast, dish) => beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1] ? true : false
// console.log(feast("brown bear", "bear claw"))

// 7 kyu Fix string case
// You will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
//P: given string mixed with uppercase and lowercase
//R: return the string either converted to all upper or lowercase. Upper if letters in the given string are mostly uppercase, otherwise return all in lowercase
//E: (see above)
//Pseudocode:
    //Have a variable that tracks the number lowercase letters. If lowercase letters is equal to or greater than s.length, then return lowercase. otherwise return uppercase
    //use loop to iterate through s to compare if lower or uppercase
//My solution:
// function solve(s){
//     let lowerCaseCounter = 0
//     let sLengthDividedByTwo = s.length / 2
//     let sToLowerCase = s.toLowerCase()
//     for(i=0;i<s.length;i++){
//         if(sToLowerCase[i] === s[i]){
//             lowerCaseCounter++
//         }
//     }
//     if (lowerCaseCounter >= sLengthDividedByTwo ){
//         console.log(`True: lowerCaseCounter is ${lowerCaseCounter}, sLengthDividedByTwo is ${sLengthDividedByTwo}`)
//         return sToLowerCase
//     }else{
//         console.log(`False: lowerCaseCounter is ${lowerCaseCounter} sLengthDividedByTwo is ${sLengthDividedByTwo}`)
//         return s.toUpperCase()
//     }
// }
//Refactored
// function solve(s){
//     let lowerCaseCounter = 0
//     let sToLowerCase = s.toLowerCase()
//     for(i=0;i<s.length;i++){
//         if(sToLowerCase[i] === s[i]){
//             lowerCaseCounter++
//         }
//     }
//     return lowerCaseCounter >= s.length / 2 ? sToLowerCase : s.toUpperCase()
// }
// //Test Case:
// console.log(solve("Code"))
// // 8 kyu Grasshopper - Basic Function Fixer
// // Fix the function
// // I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
// // Can you help me fix the function?
// //P: function addFive
// //R: function but fixed
// //E: function should return num + 5
// //Pseudocode: total has the correct operation, but is never returned. Return statement should be total, not num.
// //My solution
// function addFive(num) {
//     var total = num + 5
//     return total
//   }
// //Refactored to arrow syntax:
// const addFive = num => num + 5

// 7 kyu All Star Code Challenge #20
// Create a function called addArrays() that combines two arrays of equal length, summing each element of the first with the corresponding element in the second, returning the "combined" summed array.
// Raise an error if input arguments are not of equal length.
// addArrays([1,2],[4,5]); // => [5,7]
// addArrays([1,2,3],[4,5]); // => Error
//P: two arrays
//R: If both arrays are of equal length, map a new array that takes in array1[i] + array2[i]
//E: See examples above
//Pseudocode:
        //Declare empty array for return array
        //Add a condition to throw Error if lengths are not equal
        //If lengths are equal,
        //return the return array
//My solution:
// function addArrays(array1, array2) {
//     let returnArray = []
//     if(array1.length != array2.length){
//         throw new Error('Arrays not equal length')
//     }else{
//         for(let i=0; i<array1.length;i++){
//             returnArray.push(array1[i] + array2[i])
//         }
//     }
//     return returnArray
// }
// //Use map:
// function addArrays(array1, array2) {
//     if(array1.length != array2.length){
//         throw new Error('Arrays not equal length')
//     }
//     return array1.map((e,i) => array1[i] + array2[i])              
// }
// //use ternary (very unreadable, don't actually do this in real-life scenario):
// const addArrays = (array1, array2) => array1.length != array2.length ? (function(){throw new Error('Arrays not equal length')}()) : array1.map((e,i) => array1[i] + array2[i])   
// //Test Cases:
// console.log(addArrays([1,2,3],[4,5]))

// // 8 kyu Training JS #7: if..else and ternary operator
// // Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
// // number	price (cents)
// // n < 5	100
// // n >= 5 and n < 10	95
// // n >= 10	90
// // You can use if..else or ternary operator to complete it.
// //P: Given n, number of customers to buy hot dogs
// //R: Return a number that the customer needs to pay
// //E: 4 should return 400 (n*100), 5 should return 475 (n*95), 10 should return 900 (n*90)
// //Pseudocode:
//         //Using the three conditions, use ternary operator. Since there are three conditions, add at least two conditions in the function:
// //My solution using ternary operator:
// const saleHotdogs = n => n < 5 ? n*100 : n >= 5 && n < 10 ? n*95 : n*90
// //refactored using parentheses:
// const saleHotdogs = n => n*(n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90)

// 7 kyu Area of an arrow
// An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.
// a and b are integers and > 0
// Write a function which returns the area of the arrow.
//P: Given nums a and b (view diagram) which are sides of a rectangle
//R: Return the area of the arrow in the rectangle that is formed by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.
//E: (arrowArea(4,2), 2), (arrowArea(7,6), 10.5), (arrowArea(25,25), 156.25)
//Pseudocode:
        //declare variables for a,b,c of right triangle made inside the arrow.
        //Use pythagorean theorom.
        //Once area of half the triangle is determined, multiply it by 2 and return it
//My solution:
// function arrowArea(a,b) {
//     let smallA = a/2
//     let smallB = b/2
//     return smallA * smallB
// }
// //Refactored:
// const arrowArea = (a,b) => (a/2) * (b/2)
// //Test Case:
// console.log(arrowArea(25,25))

// 8 kyu The Wide-Mouthed frog!
// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide
//P: animal as a string
//R: Return small if the argument is 'alligator' in ANY case (lower, upper, doesn't matter), otherwise return wide.
//E: alligator returns small, toucan returns wide
//Pseudocode:
    //Use conditional statement to return small if the argument is alligator, otherwise return wide
//My solution:
// const mouthSize = animal => animal.toLowerCase() === 'alligator' ? 'small' : 'wide'

// 6 kyu All Star Code Challenge #15 - RETURN TO THIS LATER. Too hard
// Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.
// rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
// Note: The original string should be included in the output array The order matters. Each element of the output array should be the rotated version of the previous element. The output array SHOULD be the same length as the input string The function should return an emptry array with a 0 length string, '', as input
//P: Given a string
//R: Return an array. Each element of the output array should be the rotated version of the previous element. output array SHOULD be the same length as the input string
//E: // rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
//Pseudocode:
        //Declare a variable and set it as (str); we will mutate this variable.
        //Declare an array for the return; we will keep pushing elements into this array and return it at the end
        //for the length of the string, we will add to the array 

//My solution:
// function rotate(str){
//     // let mutableStr = str
//     let strArray = []
//     let returnArray = []
//     // return mutableStr.split('')
//     for(let i=0;i<str.length-1;i++){
//         strArray.push(str[i+1])
//         console.log(strArray)
//     }
//     strArray.push(str[0])
// }
// console.log(rotate("Hello"))

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
// function compute(n){
//     let expressionValue = 1
//     if(n%2 === 0 || n < 3){
//         return 0
//     }else{
//         for(let i=3;i<=n;i+=2){
//             expressionValue += (1/Math.pow(i,2))
//         }
//         return expressionValue
//     } 
// }
// //Test cases:
// console.log(compute(-1))
// console.log(compute(8))
// console.log(compute(9))

// 7 kyu Factorial
// Your task is to write function factorial.
//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n
//P: number
//R: number! (product of all positive integers less than or equal to n)
//Examples:
// Test.assertEquals(factorial(0), 1);
// Test.assertEquals(factorial(1), 1);
// Test.assertEquals(factorial(4), 24);
// Test.assertEquals(factorial(7), 5040);
// Test.assertEquals(factorial(17), 355687428096000);
//Pseudocode:
        //declare a variable that will accumulate the product; this will be returned at the end
        //use a for loop. from 1 to n, keep multiplying to the declared variable.
// function factorial(n){
//     let accumulator = 1
//     for(let i=1;i<=n;i++){
//         accumulator *= i
//     } 
//     return accumulator
// }
//Test Case:
// console.log(factorial(0))

// 7 kyu Length and two values.
// Given an integer n and two other values, build an array of size n filled with these two values alternating.
//P: integer n and two values
//R: array of size n, with the values alternating
// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []
//Pseudocode:
    //declare an empty array, we will push to this and return at the end
    //use a for loop from 0 to <n , in which we will push first value and then push second value to the array
// function alternate(n, firstValue, secondValue){
//     let returnArray = []
//     for(let i=0;i<n;i++){
//         returnArray.push(firstValue)
//         returnArray.push(secondValue)
//     }
//     return returnArray.slice(0,n)
// }
// //Test cases:
// console.log(alternate(20, 'blue', 'red'))
// console.log(alternate(11, true, false))
// console.log(alternate(0, "lemons", "apples"))

// // 6 kyu Find The Parity Outlier 08/01/2022
// // You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// // Examples
// // [2, 4, 0, 100, 4, 11, 2602, 36]
// // Should return: 11 (the only odd number)
// // [160, 3, 1719, 19, 11, 13, -21]
// // Should return: 160 (the only even number)
// //P: Given an array of length 3 or greater containing numbers
// //R: Return the outlier.
// //E: see above examples
// //Pseudocode:
//     //very slow solution but should work!
//             //Outside the loop, declare a counter for odd and a counter for even.
//             //iterate through the array with a loop to determine if the majority are even or odd.
//             //If odd > even, then loop through the array again, filtering out the odds. Return the even number
//             //if Even > odd, then loop through the array again, filtering out the evens. Return the odd number
// //My Solution:
// function findOutlier(integers){
//     let oddCounter = 0
//     let evenCounter = 0
//     for(let i=0; i<integers.length;i++){
//         integers[i] % 2 === 0 ? evenCounter++ : oddCounter++
//     }
//     // console.log(evenCounter > oddCounter ? "even is greater, return the odd outlier" : evenCounter === oddCounter ? "Even is equal to Odd" : "Odd is greater, return the even outlier")
//     if(evenCounter > oddCounter){
//         return Number(integers.filter(e=>e%2 != 0))
//     }else{
//         return Number(integers.filter(e=>e%2 === 0))
//     }
//   }
// //My solution Refactored:
// function findOutlier(integers){
//     let oddCounter = 0
//     let evenCounter = 0
//     for(let i=0; i<integers.length;i++){
//         integers[i] % 2 === 0 ? evenCounter++ : oddCounter++
//     }
//     return evenCounter > oddCounter ? Number(integers.filter(e=>e%2 != 0)) : Number(integers.filter(e=>e%2 === 0))
//   }
// //Better solution from user meodien99:
// function findOutlier(integers){
//     var odds = integers.filter((e)=> e & 1);
//     var evens = integers.filter((e)=> !(e & 1));
//     var result = (odds.length < evens.length) ? odds.pop() : evens.pop();
//     return result;
//   }
// //Test cases
//   console.log(findOutlier([1,1,0,1,1])) //0
//   console.log(findOutlier([2,6,8,10,3])) //3

// 8 kyu Pre-FizzBuzz Workout #1
// This is the first step to understanding FizzBuzz.
// Parameters: Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
// Return: Your expected output is an array of positive integers from 1 to n (inclusive).
// Your job is to write an algorithm that gets you from the input to the output.
// Examples:
// Test.assertSimilar(preFizz(1), [1], `Array should be from 1 to 1`);
// Test.assertSimilar(preFizz(2), [1,2], `Array should be from 1 to 2`);
// Test.assertSimilar(preFizz(3), [1,2,3], `Array should be from 1 to 3`);
// Test.assertSimilar(preFizz(4), [1,2,3,4], `Array should be from 1 to 4`);
// Test.assertSimilar(preFizz(5), [1,2,3,4,5], `Array should be from 1 to 5`);
//Pseudocode:
    //iterate from 1 to n, push n to an array, return the array
//My solution:
// function preFizz(n) {
//     let returnArray = []
//     for(let i=1; i<=n; i++){
//         returnArray.push(i)
//     }
//     return returnArray
// }
// //Test Case:
// console.log(preFizz(1))

// 8 kyu Training JS #2: Basic data types--Number
//Set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.
//P:Given following functions
//R: return with the appropriate values of the two variables to return 100 for each function
//E: See equal1() below
//Pseudocode:
    //Using addition, subtraction, multiplication, division, and modulus, set the variables of each function to equal 100
//solution:
// var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
// function equal1(){
//   var a= v1   
//   var b= v1   
//   return a+b;
// }
// //Please refer to the example above to complete the following functions
// function equal2(){
//   var a= v3   //set number value to a
//   var b= v1  //set number value to b
//   return a-b;
// }
// function equal3(){
//   var a= v1   //set number value to a
//   var b= v5  //set number value to b
//   return a*b;
// }
// function equal4(){
//   var a= v4   //set number value to a
//   var b= v5  //set number value to b
//   return a/b;
// }
// function equal5(){
//   var a= v6 //set number value to a
//   var b= v3 //set number value to b
//   return a%b
// }

// 8 kyu Reversing Words in a String
// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
// Example (Input --> Output)
// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
//P: Given string
//R: Return string, but with the words reversed
//E: See examples above
//Pseudocode:
        //convert string to array of words (.split(' ') method), reverse the array, and join. Then return the string.
//My solution:
// function reverse(string){
//     return string.split(' ').reverse().join(' ')
//   }
// console.log(reverse("Hi There."))
// //Refactored using arrow function syntax:
// const reverse = string => string.split(' ').reverse().join(' ')

// 7 kyu Find the capitals
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
//P: String
//R: ordered list with indexes of all capital letters in the given string
//E: ('CodEWaRs') -> [0,3,4,6] ;
//Pseudocode:
        //declare a string that is an array of letters of the word argument (call it wordArray, use split('') method)
        //Declare an empty array that we will return at the end
        //Loop through the string and if the wordArray[i] === upperCaseString[i], push the INDEX to the return array (use forEach with the element and index parameters so we can grab INDEX)
        //return the returnArray
//     var capitals = function (word) {
//         let wordArray = word.split('')
//         let UpperCaseWordArray = word.toUpperCase().split('')
//         let returnArray = []
//         // for(let i= 0; i < word.length; i++){
//         //     if (word[i] === UpperCaseWord[i]){
//         //         returnArray.push(word[i])
//         //     }
//         // }
//         // console.log(returnArray)
//         wordArray.forEach((e,i)=>{
//             if(e === UpperCaseWordArray[i]){
//                 returnArray.push(i)
//             }
//         })
//         // console.log(wordArray)
//         // console.log(UpperCaseWordArray)
//         return returnArray
//     };
//     console.log(capitals("Hello WOrld"))
// //Cleaned up:
// var capitals = function (word) {
//     let wordArray = word.split('')
//     let UpperCaseWordArray = word.toUpperCase().split('')
//     let returnArray = []
//     wordArray.forEach((e,i)=>{
//         if(e === UpperCaseWordArray[i]){
//             returnArray.push(i)
//         }
//     })
//     return returnArray
// };

//Using the for-loop method that was commented out instead of forEach:
// var capitals = function (word) {
//     let returnArray = []
//     let UpperCaseWord = word.toUpperCase()
//     for(let i= 0; i < word.length; i++){
//         if (word[i] === UpperCaseWord[i]){
//             returnArray.push(i)
//         }
//     }
//     return returnArray
// };
// //Test Case - does not work if numbers are present in the string!:
// console.log(capitals("Hello WOrld123123123123"))

// 7 kyu Switcheroo
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
// Example:
// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'
//P: string of letters using a, b, and/or c
//R: Return string but with a and b reversed
//E: See above examples
//Pseudocode:
    //Declare a variable string that will be returned at the end
    //Use a loop and conditional:
        // If element is a, then add b to the return string
        // If element is b, then add a to the return string
//My solution:
// function switcheroo(x){
//     let returnString = ""
//     for(let i=0; i<x.length; i++){
//         if(x[i]==="a"){
//             returnString += "b"
//         }else if(x[i]==="b"){
//             returnString += "a"            
//         }else{
//             returnString += x[i]
//         }
//     }
//     return returnString
// }
// //Test Case:
// console.log(switcheroo('aaabcccbaaa'))

// 7 kyu Find the stray number
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
//Parameters: odd-length array of integers (odd-length >= 3)
//Return: return the single different number
//Examples: see above
//Pseudocode:
        //sort the array from least to greatest.
        //if element at index 0 is the same as element as index 1 (meaning the stray number is NOT located at index 0 and 1), then return index[array.length-1]. Otherwise, return element at index 0
//My Solution:
// function stray(numbers) {
//     numbers.sort((a,b)=>a-b)
//     return Number(numbers[0]) === Number(numbers[1]) ? Number(numbers[numbers.length-1]) : Number(numbers[0])
//   }
// //Test case:
// console.log(stray([1, 1, 2,1,1,1]))

// 8 kyu Grasshopper - Terminal game move function
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Example:
// move(3, 6) should equal 15
//Parameters: 2 nums: current position, and the dice number
//Return: number of the new position
//Example: move(3,6) equals 15. Player starts on position 3. 3 + (6*2) = 15
//Pseudocode:
        //(dice roll * 2) plus current position equals the new position
// function move (position, roll) {
//   return (roll * 2) + position
// }
// //refactored:
// const move = (position,roll) => roll * 2 + position

// 7 kyu Flatten and sort an array
// Challenge:
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
// Example:
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
// Addendum:
// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well
//Parameters: 2-d array of integers
//Return: 1-d array sorted
//Example: see above
//Pseudocode:
    //Declare an array that we will return (returnArray) at the end
    //Loop through the elements of the multi-dim array and push each element into the returnArray
    //Sort returnArray in ascending order and return it
//My solution:
// "use strict";
// function flattenAndSort(array) {
//     let returnArray = []
//     array.forEach((e)=>returnArray.push(e))
//     return returnArray.flat().sort((a,b)=>(a-b))
// }
// //Refactored (shortened but not as readable):
// const flattenAndSort = array => array.flat().sort((a,b)=>a-b)
// //Test Case:
// console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))

// 7 kyu Is this a triangle?
//Parameters: three nums for three sides of a potential triangle (a,b,c)
//Return: true if triangle, false if not a triangle
//Examples:
// assert.strictEqual(isTriangle(1,2,2), true);
// assert.strictEqual(isTriangle(7,2,2), false);
//Pseudocode:
        //Create an array called isTriangleArray in a way that it is set up like [a,b,c]
        //sort the array from smallest to largest
        //If isTriagleArray[0] + isTriagleArray[1] is greater than isTriagleArray[2] and none of the values are 0, then return true. Otherwise return false
//My solution:
// function isTriangle(a,b,c){
//     let isTriangleArray = [a,b,c]
//     if(a <= 0 || b <= 0 || c <= 0){
//         return false;
//     }else{
//         let sortedIsTriangleArray = isTriangleArray.sort((a,b)=>a-b)
//         return sortedIsTriangleArray[0] + sortedIsTriangleArray[1] > sortedIsTriangleArray[2] ? true : false
//     }
// }
// //Refactored:
// function isTriangle(a,b,c){
//     if(a <= 0 || b <= 0 || c <= 0){
//         return false;
//     }else{
//         let sortedIsTriangleArray = [a,b,c].sort((a,b)=>a-b)
//         return sortedIsTriangleArray[0] + sortedIsTriangleArray[1] > sortedIsTriangleArray[2]
//     }
// }
// //Test Case:
// console.log(isTriangle(2,2,8))

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
// const fibonacci = n => {
//     if (n <= 1)
//          return n;
//      return fibonacci(n-1) + fibonacci(n-2);
//  };

// 7 kyu Recursion #1 - Factorial
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,
// 5! = 5 * 4 * 3 * 2 * 1 = 120.
// The value of 0! is 1.
// #Your task
// You have to create the function factorial that receives n and returns n!. You have to use recursion.
//Parameters: integer n
//Return: return n! but must use recursion in the function
//Examples:
//   it(`factorial(0)`, () => {
//     Test.assertEquals(factorial(0), 1);
//   });
//   it(`factorial(1)`, () => {
//     Test.assertEquals(factorial(1), 1);
//   });
//   it(`factorial(2)`, () => {
//     Test.assertEquals(factorial(2), 2);
//   });
//   it(`factorial(3)`, () => {
//     Test.assertEquals(factorial(3), 6);
//   });
// });
//Pseudocode:
        //Think of having to call factorial(something)
        //If n is 0, return 1
        //return n * factorial(n-1), this is because with factorials, you are multiplying all integers from n down to 1 (once it hits 0, 1 is returned).
//My solution:
// const factorial = n => {
//     return n === 0 ? 1 : n * factorial(n-1)
// };
// //Refactored:
// const factorial = n => n === 0 ? 1 : n*factorial(n-1)

// 5 kyuHuman Readable Time
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
// You can find some examples in the test fixtures.
//Parameters: non-negative integer (seconds)
//Return: Return the time in a human readable format (HH:MM:SS)
//Examples:
// strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');
// strictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');
// strictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');
// strictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');
// strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
// strictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
// strictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
// strictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
// strictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
// strictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
//Pseudocode:
        //There will be three main variables, HH MM SS
            //find out how many hours will need to be returned and have an HH variable
                    //HH will be seconds / 60 * 60
            //find out how many minutes will need to be returned and have a MM variable
            //find out how many seconds will need to be returned and have a SS variable
            //Make sure all floats are integers. We can do this using parseInt(string, radix) for all HH MM SS, but omit radix parameter since we are using base 10 numbers
            //Have a string leading '0' for each HH MM SS
            //must only return the last TWO digits. For example, we don't want 36000 seconds to return 010:00:00, we want 10:00:00.
                //To address this, we should use .slice(-2) so that we are only returning up to 2 digits
            //We can use a template literal for the function return, example `${HH}:${MM}:${SS}`
//My solution:
// function humanReadable (seconds) {
//     let HH = ('0' + parseInt(seconds / (60 * 60))).slice(-2)
//     let MM = ('0' + parseInt(seconds / 60 % 60)).slice(-2)
//     let SS = ('0' + parseInt(seconds % 60)).slice(-2)
//     return `${HH}:${MM}:${SS}`
//   }
// //Test case
// console.log(humanReadable(36000))

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
// function fizzbuzz(n){
//     let fizzbuzzArray = []
//     for(let i=1;i<=n;i++){
//         if(i%3===0 && i%5===0){
//             fizzbuzzArray.push("FizzBuzz")
//         }else if(i%3===0){
//             fizzbuzzArray.push("Fizz")
//         }else if(i%5===0){
//             fizzbuzzArray.push("Buzz")
//         }else{
//             fizzbuzzArray.push(i)
//         }
//     }
//     return fizzbuzzArray
// }
// //Test case:
// console.log(fizzbuzz(30))

// 6 kyu Sum of Digits / Digital Root - Recursion
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
//Parameters: Given non-negative integer (n)
//Return: digital root (recursive sum of all the digits in a number)
//Examples: See above
//pseudocode:
    //convert to string and split into an array, iterate through the array and take the sum
    //is sum.length greater less than 10?? then convert to string and split into an array, iterate through the array and take the sum
    //Otherwise, return sum
// //My solution:
// function digitalRoot(n) {
//     let result = 0
//     //if n is less than 10, return n since n is single digit:
//     if (n<10){
//         return n
//     }
//     //convert n to string, split into an array, and then map an array, and during the map, add the number/element from the array to "result"
//     String(n).split('').map(number => {
//         result += Number(number);
//       });
//     //Recursively call digitalRoot, but now passing in "result". If the argument ever becomes less than 10, then it will return due to the "if (n<10){return n}" condition. Otherwise argument will be mapped and added to "result", and will be recursively called again.
//     return digitalRoot(result)
// }
// //Test Case
// console.log(digitalRoot(942)) //6
// console.log(digitalRoot(16)) //7

// 7 kyu Recursion 101
// In this Kata, you will be given two positive integers a and b and your task will be to apply the following operations:
// i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
// ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
// iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].
// a and b will both be lower than 10E8.
// More examples in tests cases. Good luck!
//Parameters: given two positive integers a, b
//Return: [a,b] if a=0 or b=0 ...see conditions above
//Examples: See on codewars
//Pseudocode:
    //The logic is all written above already, just write the conditions in Javascript with their respective return clauses.
// function solve(a,b){
//     if(a===0 || b===0){
//         return [a,b]
//     }
//     if (a >= 2*b){
//         a = a - 2*b
//         return solve(a,b)
//     }
//     if (b >= 2*a){
//         b = b -2*a
//         return solve(a,b)
//     }
//     return [a,b]
// }

// // 8 kyu Reverse List Order
// // In this kata you will create a function that takes in a list and returns a list with the reverse order.
// //Parameter: given array
// //Return: return the array in reverse
// //Example:
// // * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// // * [9, 2, 0, 7]  -> [7, 0, 2, 9]
// //Pseudocode:
// //My solution:
// function reverseList(list) {
//     return list.reverse()
// }
// // //Refactored to arrow function:
// const reverseList = list => list.reverse()
// //Solution without using reverse() array method:
// //Declare an empty array called returnArray
// //Iterate through 'list' array using a loop, and use unshift() method to add to the returnArray
// function reverseList(list) {
//     let returnArray = []
//     list.forEach(element => returnArray.unshift(element))
//     return returnArray
// }
// //Test Case:
// console.log(reverseList([1, 2, 3, 4]))

// 8Kyu Parse nice int from char problem 
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
//Parameters: String
//Return: Return the first character of the string as a number
//Example: "1 year old"  returns 1 with a type of number
//Pseudocode: Return the first index aka [0] of the string, but convert it to a number:
//My solution:
// function getAge(inputString){
//     return inputString[0]*1
//     }
// //Refactored:
// const getAge = inputString => inputString[0]*1

// // 8 kyu Super Duper Easy
// //Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
// function problem(x){
//     return typeof x === 'number' ? x*50 + 6 : "Error"
//   }
// // refactored:
// const problem = x => typeof x === 'number' ? x*50 + 6 : "Error"

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
// function collatz(n) {
//     let collatzArray = []
//     while (n != 1){
//         if(n%2 === 0){
//             collatzArray.push(n/2)
//             // console.log(collatzArray)
//             n = n/2
//         }else{
//             collatzArray.push(3 * n + 1)
//             // console.log(collatzArray)
//             n = 3 * n + 1
//         }
//     }
//     return collatzArray.length + 1
// }
// //Test Case
// console.log(collatz(73567465519280238573)) //561

// // 7kyu Predict your age!
// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
// In honor of my grandfather's memory we will write a function using his formula!
// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.
// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
//Parameters: list of ages(nums)
//Return: return a value using the following - "multiply each number by itself, add them, take the square root, divide by two"
//Examples:
//Pseudocode:
    //create an array with all parameters (ages 1-8)
    //iterate through the array and return a new array that has each number squared to satisfy "Multiply each number by itself"
    //in the new array, add all the elements together and save this value
    //Take the square root of this value, and then divide it by two and return it
//My solution:
// function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
//     let predictAgeArray = [age1, age2, age3, age4, age5, age6, age7, age8]
//     let predictAgeArrayMultiplied = []
//     for(i=0;i<8;i++){
//         predictAgeArrayMultiplied.push(Math.pow(predictAgeArray[i],2))
//     }
//     return Math.floor(Math.sqrt(predictAgeArrayMultiplied.reduce((a,c)=> a + c,0))/2) //use reduce to get the sum, then use Math.sqrt to get the square root, then divide it by two, and then use Math.floor to round down
// }
// //Best Practices solution - uses map instead of for loop and extra array:
// function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
//     let predictAgeArray = [age1, age2, age3, age4, age5, age6, age7, age8]
//     return Math.floor(Math.sqrt(predictAgeArray.map(a => a * a).reduce((b,c) => b + c)) / 2)
//   }
// //Test Case:
// console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))

// 8 kyu I love you, a little , a lot, passionately ... not at all
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
//P: num
//R: phrase (listed phrases above)
//E: (7),"I love you")
//Pseudocode:
    // if % 6 === 1 "I love you" and so on . . .
//Solution:
// function howMuchILoveYou(nbPetals) {
//     if(nbPetals % 6 === 1){
//         return "I love you"
//     }else if(nbPetals % 6 === 2){
//         return "a little"
//     }else if(nbPetals % 6 === 3){
//         return "a lot"
//     }else if(nbPetals % 6 === 4){
//         return "passionately"
//     }else if(nbPetals % 6 === 5){
//         return  "madly"
//     }else{
//         return "not at all"
//     }
// }

// // 6 kyu Find the unique number
// // There is an array with some numbers. All numbers are equal except for one. Try to find it!
// // findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// // findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// // It’s guaranteed that array contains at least 3 numbers.
// // The tests contain some very huge arrays, so think about performance.
// //P: Array with numbers
// //R: the unique number in the array
// //E: See above
// //Pseudocode:
//     //Sort the array from least to greatest
//     //if array[0] === array[1] then return array[array.length], otherwise return array[0]
// //My solution:
// function findUniq(arr) {
//     arr.sort((a,b) => a-b)
//     return arr[0] === arr[1] ? arr[arr.length-1] : arr[0]
// }
// //using pop and shift:
// function findUniq(arr) {
//     arr.sort((a,b) => a-b)
//     return arr[0] === arr[1] ? arr.pop() : arr.shift()
// }

// //Test cases:
// console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
// console.log(findUniq([ 1, 1, 2, 1, 1 ]))
// console.log(findUniq([ 3, 10, 3, 3, 3 ]))

// 8 kyu Opposites Attract
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function lovefunc(flower1, flower2){
//     return flower1 % 2 !== flower2 % 2
//   }

// //Refactored:
// const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2

//   console.log(lovefunc(0,0))

//   8 kyu Is it a palindrome?
//   Write a function that checks if a given string (case insensitive) is a palindrome.
//P: String
//R: true or false
//E "hello" false "AbBa true
//Pseudocode: use reverse and toLowerCase methods; if they are equal to the string then return true. OR try using a loop without using reverse method
//my solution using a loop WITHOUT reverse:
// function isPalindrome(x) {
//     let rev = []
//     for(let i=0; i<x.length; i++){
//         rev.unshift(x[i])
//     }
//     return rev.join('').toLowerCase() === x.toLowerCase()
//   }
// //solution with reverse method:
// const isPalindrome = (x) => {
//     return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
//   }
// //Test Case:
// console.log(isPalindrome('abbaasfa'))

// 4 kyu Don't give me five! Really!
// This kata is the performance version of Don't give me five by user5036852.
// Your mission, should you accept it, is to return the count of all integers in a given range which do not contain the digit 5 (in base 10 representation).
// You are given the start and the end of the integer range. The start and the end are both inclusive.
// Examples:
// 1,9 -> 1,2,3,4,6,7,8,9 -> return 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> return 12
// The result may contain fives. ;-)
// The start will always be smaller than the end. Both numbers can be also negative.
// The regions can be very large and there will be a large number of test cases. So brute force solutions will certainly time out!
// Good luck, warrior!
//P: start and end nums
//R: number of all integers in the range which do NOT contain the digit "5"
//E: 
    // 1,9 -> 1,2,3,4,6,7,8,9 -> return 8
    // 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> return 12
//Pseudocode:
//Use a loop going from start to end
//As the loop iterates, if the number does not end with 5, push to the array
//return the count of the array

// function dontGiveMeFive(start, end){
//     let returnArr = []
//     for(let i=start; i<=end; i++){
//         if(i.toString().endsWith('5') === false){
//             returnArr.push(i)
//         }
//     }
//     return returnArr.length
// }
// console.log(dontGiveMeFive(-90000000000000, 900000000000000))

//7 kyu The Coupon Code
// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
//P: enteredCode, correctCode, currentDate, expirationDate
//R: true or false
//E: 
        // checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
        // checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
        // checkCoupon('123','123','September 5, 2014','October 1, 2014'), true)
        // checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false)
//Pseudocode:
//Conditional statements - if enteredCode === correctCode and currentDate <= expirationDate, return TRUE else false
//To convert the date from string to date so that we can use comparison operators, use Date.parse(dateStringHere)
//My solution:
// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//     return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)
// }
// //Arrow fxn:
// const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)

// 8 kyu altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.
//P: String
//R: String with casings of each letter flipped (uppercase letters changed to lowercase, etc.)
//E:
//Pseudocode: 
    //Recall that String.prototype.toAlternatingCase is an object, so use "this" to refer to the object on which we are applying the function to
    //Split the string into an array
    //Map a NEW array, converting the element (letter in this case) to lowercase if it was originally uppercase, or upper to lower.
    //use join method to convert back to string and return it
//My solution:
// String.prototype.toAlternatingCase = function () {
//     return this.split('').map(e=>{
//         if(e===e.toUpperCase()){
//             return e.toLowerCase()
//         }else{
//             return e.toUpperCase()
//         }
//     }).join('')
//   }

//Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//P: String of letters and numbers
//R: The count of distinct case-insensitive alphabetic characters and numeric digits
//E: 
        // "abcde" -> 0 # no characters repeats more than once
        // "aabbcde" -> 2 # 'a' and 'b'
        // "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
        // "indivisibility" -> 1 # 'i' occurs six times
        // "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
        // "aA11" -> 2 # 'a' and '1'
        // "ABBA" -> 2 # 'A' and 'B' each occur twice
//Pseudocode:
//Since we are dealing with case insensitive characters, apply .toLowerCase() method
//Declare an empty object
//With that object, add property with the same name as the value we want to check (we will be iterating through every character to look for duplicates)
//If the character we are checking is already in the object, we will add to a counter. If the character is not already in the object, we will assign a value of 1 to the key
//Return counter.
//Solution:
// function duplicateCount(text){
//     let hashMap= {}
//     let lowerCaseText = text.toLowerCase()
//     let counter = 0
//     for (let i=0; i<lowerCaseText.length; i++){
//         //If the key has not been seen before in the map, then assign a value of 1:
//         if(hashMap[lowerCaseText[i]] === undefined){
//             hashMap[lowerCaseText[i]] = 1
//         //If the key HAS been seen before in the hashmap, then add 1 to that value. Also increase the counter ++
//         }else if(hashMap[lowerCaseText[i]] < 2) {
//             hashMap[lowerCaseText[i]] +=1
//             counter++
//         }
//     }
//     return counter
//   }

// 8 kyu Double Char
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!
//P: String
//R: Return string in which each character is repeated once
//E: See examples above
//Pseudocode:
    //Declare an empty string
    //Use a for loop to iterate through the string argument
    //During each iteration, add the string[i] + string[i] to the declared string
    //Return the string
//My solution:
// function doubleChar(str) {
//     let returnString = ""
//     for (let i=0; i<str.length; i++){
//         returnString += str[i] + str[i]
//     }
//     return returnString
//   }
// //Test Case
// console.log(doubleChar("1234!_"))

// // Palindrome strings
// // A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
// // Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.
// // Examples(Input ==> Output)
// // "anna"   ==> true
// // "walter" ==> false
// // 12321    ==> true
// // 123456   ==> false
// //P: Given NUMBER or STRING
// //R: true if palindrome, false if not palindrome
// //E: see examples above
// //Pseudocode:
//         //If input is a number, convert it to a string first and set to a variable
//         // if the string is equal to the string.split('').reverse().join('') return true else return false
// //My solution:
// function isPalindrome(line) {
//     return String(line) === String(line).split('').reverse().join('')
//   }
// //Test
// console.log(isPalindrome(5454))
// //Arrow syntax:
// const isPalindrome = line => String(line) === String(line).split('').reverse().join('')

// //7 kyu Convert an array of strings to array of numbers
// // Oh no!
// // Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
// // You need to cast the whole array to the correct type.
// // Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
// // ie:["1", "2", "3"] to [1, 2, 3]
// // Note that you can receive floats as well.
// //P: array of STRINGS
// //R: Same array but with NUMBERS
// //E: see above
// //Pseudocode:
//         //map an array, but use Number primitive
// //my solution:
// function toNumberArray(stringarray){
//     return stringarray.map(e => Number(e))
// }
// //Arrow Syntax:
// const toNumberArray = stringarray => stringarray.map(e => Number(e))
// //Test Case:
// console.log(toNumberArray(["1", "2", "3"]))

// 6 kyu Count characters in your string
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.
//P: string with characters
//R: Object with each character as a key, and value to represent how many times the character shows up in the string. If string is empty, object should be empty object literal
//E: aba -> {'a': 2, 'b': 1}
//Pseudocode:
        //Declare an empty object literal that we will return at the end
        //split the string into an array
        //use forEach:
            //if object[element] is true (meaning the letter is already in the object), then increase object[element] by 1
            //If object[element] is false (meaning the letter is NOT yet in the object), then object[element] = 1. Basically we are recording we saw it one time into the object.
        //return the object
//My solution:
// function count (string) {  
//     let returnObject = {}
//     let stringArray = string.split('')
//     stringArray.forEach( e => {
//       if(returnObject[e] == true){
//         returnObject[e]++
//       }else{
//         returnObject[e] = 1
//       }
//     })
//     return returnObject
//   }
// //Refactored - removed stringArray variable, used ternary:
// function count (string) {  
//     let returnObject = {}
//     string.split('').forEach( e => returnObject[e] ? returnObject[e]++ : returnObject[e] = 1 )
//     return returnObject
//   }

// // 7 kyu Substituting Variables Into Strings: Padded Numbers
// // Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.
// // Example:
// // solution(5) // should return "Value is 00005"
// //P: number
// //R: Padded number (5 digits)
// //E: See above example
// //Pseudocode:
//         //Make a conditional for each digit. Use length:
//                 //1 digit? pad 4 zeros in front
//                 //2 digit? pad 3 zeros in front
//                 //3 digit? pad 2 zeros in front
//                 //4 digit? pad 1 zero in front
//                 //5 or more digit? pad 0 digit in front
// //My solution:
// function solution(value){
//     if(value.toString().length === 1){
//         return `Value is 0000${value}`
//     }else if(value.toString().length === 2){
//         return `Value is 000${value}`
//     }else if(value.toString().length === 3){
//         return `Value is 00${value}`
//     }else if(value.toString().length === 4){
//         return `Value is 0${value}`
//     }else if(value.toString().length >= 5){
//         return `Value is ${value}`
//     }
// }
// //Best Practices:
// function solution(value){
//     return "Value is " + ("00000" + value).slice(-5); //only 5 digits will be sliced into the string literal.
// } 
// //Test Case:
// console.log(solution(5)) //00005

// 7 kyu Alternate capitalization
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.
//P: string with all lowercase letters
//R: string with letters at even indexes are capitalized
//E:
    // Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
    // Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
    // Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
    // Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
//Pseudocode:
    //declare two empty strings, oddCpital and evenCapital
    //use a for loop. 
        //For evenCapital, if index is odd then use toUpperCase method
         //For evenCapital, if index is odd then use toUpperCase method
         //return [oddCapital, evenCapital]
//My solution:
// function capitalize(s){
//     let oddCapital = ""
//     let evenCapital = ""
//     let sCopy = s
//     for (let i=0; i<s.length; i++){
//         i % 2 === 0 ? evenCapital += s[i] : evenCapital += s[i].toUpperCase() 
//     }
//     for (let i=0; i<sCopy.length; i++){
//         i % 2 != 0 ? oddCapital += sCopy[i] : oddCapital += sCopy[i].toUpperCase() 
//     }
//     return [oddCapital, evenCapital]
//   };
//   //Test Case:
//   console.log(capitalize("codewarriors"))

// 8 kyu Do I get a bonus?
// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).
//P: Salary will be an integer, and bonus a boolean.
//R: If bonus is true, return salary multiplied by 10. If false, then return salary
//My solution:
// function bonusTime(salary, bonus) {
//     return bonus ? `£${salary*10}` : `£${salary}`
//     }
// //Arrow solution:
// const bonusTime = (salary,bonus) => bonus ? `£${salary*10}` : `£${salary}`

// // 8 kyu 5 without numbers !!
// // Write a function that always returns 5
// // Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
// // Good luck :)
// //P: None
// //R: 5 but without using characters 0123456789*+-/
// //E: No example just return 5!!!!
// //Pseudocode: Use length property to return a 5
// //My solution:
// const unusualFive = () => [...'lmfao'].length;

// Imagine you are trying to roll a ball a certain distance down a road. The ball will have a starting speed that slowly degrades due to friction and cracks in the road. Every time the ball rolls a distance equal to its speed or rolls over a crack, its speed decreases by 1. Given a speed of s which the ball starts rolling, and a roadmap r of the street represented by a string, return whether or not the ball will be able to make it past the end of the road (True or False).
// NOTES
// A ball with 0 speed is motionless.
// If a ball happens to roll over a crack, the speed decrease must only take effect after the ball has rolled a distance equal to its speed. For example, if the speed was 10, but the ball hit 2 cracks before rolling 10 distance, the ball's speed should stay at 10 until it has reached 10 distance, in which the speed should decrease to 7 (-2 from cracks and -1 due to friction).
// On the roadmap, "_" represents flat ground and "x" represents a crack
// The length of the roadmap will be equal to the distance to the ball's final destination
// The ball must fall off of the edge of the road for the code to be considered valid.
//P: Speed represented by s and a roadmap, represented by r
//R: true or false (true if the ball will make it past the end of the road, false if not)
//E: 
    // A speed of 100, and a roadmap of '_' should return True because the ball would be moving too quickly for friction to be applied and there are no cracks on the road.
    // A speed of 1, and a roadmap of '___________' should return False because friction would stop the ball after 1 distance
//Pseudocode:
    //equal to or less than 0 returns false
    //
// function ballTest(s, r) {
//     let totalLength = r.length
//     let totalCrack = 0
//     let totalFlat = 0
//     let initialSpeed = s
//     for(let i=0; i<r.length; i++){
//         if(r[i]==="x"){
//             totalCrack++
//         }else{
//             totalFlat++
//         }
//     }
//     console.log(`Initial Speed ${s}`)
//     console.log(`totalLength ${totalLength}`)
//     console.log(`totalCrack ${totalCrack}`)
//     console.log(`totalFlat ${totalFlat}`)

//     if(s<=0 || (s - totalCrack + initialSpeed) > 0){
//         return false
//     }else if(totalFlat === 0 && totalCrack > s || totalCrack === 0 && totalFlat > s){
//         return false
//     }else{
//         true
//     }   
// }
// //Test case:
// console.log(ballTest(24, "xxxxxxxxxx_____x___xx__xx____________x__________x_")) //true

// // 8 kyu Contamination #1 -String-
// // An AI has infected a text with a character!!
// // This text is now fully mutated to this character.
// // If the text or the character are empty, return an empty string.
// // There will never be a case when both are empty as nothing is going on!!
// // Note: The character is a string of length 1 or an empty string.
// // Example
// // text before = "abc"
// // character   = "z"
// // text after  = "zzz"
// //P: String and single character
// //R: Return the string but replaced with the single character. However return empty string if string or character are empty
// //E:
//         // Test.assertEquals(contamination("abc","z"), "zzz")
//         // Test.assertEquals(contamination("","z"), "")
//         // Test.assertEquals(contamination("abc",""), "")
//         // Test.assertEquals(contamination("_3ebzgh4","&"), "&&&&&&&&")
//         // Test.assertEquals(contamination("//case"," "), "      ")
// //Pseudocode:
//     //Use a for loop. up to the length of the string, add "char" to a return string
// //My solution:
// function contamination(text, char){
//     let returnString = ""
//     for(let i=0; i<text.length; i++){
//         returnString += char
//     }
//     return returnString
//   }
// console.log(contamination("ffff","g"))

// 8 kyu Well of Ideas - Easy Version
// For every good kata idea there seem to be quite a few bad ones!
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
//p: x which is an array, It may be empty. It can contain 'good' and 'bad' strings
//r: If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
//e:
        // assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
        // assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
        // assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
//Pseudocode:
    //set a counter variable that will be used to help return the applicable return string
    //use a loop to iterate through the array, counting for "good" and return the applicable string associated with the count.
//My solution:
// function well(x){
//     let goodCount = 0
//     x.forEach((e) => {
//     if (e === 'good') {
//       goodCount++
//     }
//   })
//     if(goodCount === 2 || goodCount ===1){
//       return 'Publish!'
//     }else if(goodCount > 2){
//       return 'I smell a series!'
//     }else{
//       return 'Fail!'
//     }
//   }

// 6 kyu Simple Encryption #1 - Alternating Split
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
// Examples:
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.
// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

//Encrypt function
//P:Given a string "text" and an integer N
//R: String but with odd indexes concatonated with even indexes; this happens N times
//E: 
        // encrypt("012345", 1)  =>  "135024"
        // encrypt("012345", 2)  =>  "135024"  ->  "304152"
        // encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
//Pseudocode:
        //split string to array
        //map the odd indexes to an "odd" array
        //map the even indexes to an "even" array
        //concatonate these and return as a STRING! Maybe at this point, use recursion:
            //For the occurence of N times - think about how to recursively call this function n times??

//Decrypt function
//P:Given text and integer n
//R: Return the original text prior to encryption
//E: ("hsi  etTi sats!", 1), "This is a test!")
//Pseudocode:
        //
//My attempt:
// function encrypt(text, n){
//     if(n<=0){
//         return text
//     }
//     let oddArray = []
//     let evenArray = []
//     let textArrayOdd = text.split('') //will mutate on map
//     let textArrayEven = text.split('') //will mutate on map
//     oddArray = textArrayOdd.filter((e,i)=>i%2!=0)
//     evenArray = textArrayOdd.filter((e,i)=>i%2===0)
//     let concatWithText = oddArray.concat(evenArray).join('')
//     let nTracker = n-1
//     if(nTracker<=0){
//         return concatWithText
//     }else{
//         console.log(concatWithText, nTracker)
//         return encrypt(concatWithText, nTracker)
//     }
// }

// function decrypt(encryptedText, n){
//     if(n<=0 || !encryptedText){
//         return encryptedText
//     }
//     let mid = encryptedText.length/2
//     let first = encryptedText.split('').slice(mid)
//     let second = encryptedText.split('').slice(0,mid)
//     let returnArr = []
//     for (let i=1; i<encryptedText.length;i++){
//         if(i%2===i-1){
//             returnArr.push(second[i])
//             returnArr.push(first[i])
//         }else{
//             returnArr.push(first[i])
//             returnArr.push(second[i])
//         }
//     }
//     return decrypt(returnArr.join(''),n-1)
// }

// // console.log(encrypt("This is a test!", -1))
// console.log(decrypt("hsi  etTi sats!", 1))

// // 8 kyu Welcome to the City
// // Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
// // Example:
// // sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// // This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
// //P array with names (strings), city (string), state(string)
// //R String in format of example above
// //Example: see above
// //Pseudocode: use join array method to get the strings in the array as strings sep. by a space. Use template literal to return in proper format
// function sayHello( name, city, state ) {
//     return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
// }
// //Arrow:
// const sayHello = ( name, city, state ) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`

// //test case:
// console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))

// // 8 kyu Capitalization and Mutability
// // Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
// // Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
// // Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
// // Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
// // Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
// // Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
// //P: word lowercase
// //R: word with word[0] uppercase
// //E: word -> Word
// //Pseudocode: set word[0] to uppercase and concatonate with word.slice(1)
// //Solution:
// function capitalizeWord(word) {
//     return `${word[0].toUpperCase()}${word.slice(1)}`
//   }
// //Arrow: 
// const capitalizeWord = word => `${word[0].toUpperCase()}${word.slice(1)}`

// // 8 kyu Count the Monkeys!
// // You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// // As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
// // For example(Input --> Output):
// // 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //  1 --> [1]
// //P: Given a number n
// //R: Return an array starting from 1 going up to n
// //E: see above examples
// //Pseudocode:
//     //Use a loop that pushes 1 to n to an array that will be returned
// //My solution:
// function monkeyCount(n) {
//     let returnArr = []
//     for(let i=1; i<=n; i++){
//         returnArr.push(i)
//     }
//     return returnArr
// }

// // 7 kyu Sum of odd numbers
// // Given the triangle of consecutive odd numbers:
// //              1
// //           3     5
// //        7     9    11
// //    13    15    17    19
// // 21    23    25    27    29
// // Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
// // 1 -->  1
// // 2 --> 3 + 5 = 8
// //Parameter: given triangle of consecutive odd numbers and nth row
// //R: the sum of the numbers in the nth row of the triangle
// //E: Row 42 returns 74088
// //Pseudocode:
//     //Find out which numbers will be in row n
//         //???
//     //Return the sum of all numbers in that row
//         //Use reduce array method to get sum
//         //Or iterate and sum each element
//     //ALTERNATIVE Pseudocode: Each row summed is equal to the index cubed! For example, row 1 is 1 cubed -> 1, row 2 is 2 cubed -> 8, row 3 is 3 cubed -> 27
// //Solution:
//     function rowSumOddNumbers(n) {
//         return n**3
//     }
// //Arrow syntax: 
// const rowSumOddNumbers = n => n**3

// //7 kyu Two Oldest Ages
// // The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].
// // The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
// // For example (Input --> Output):
// // [1, 2, 10, 8] --> [8, 10]
// // [1, 5, 87, 45, 8, 8] --> [45, 87]
// // [1, 3, 10, 0]) --> [3, 10]
// //P: Array of Nums
// //R: Return the two highest numbers in format [second oldest age,  oldest age].
// //E: See above examples
// //Pseudocode:
//     //use array.sort method to sort from least to greatest
//     //return index at sorted array.length and sorted array.length-1 (two highest numbers) in the requested format
// //My solution:
// function twoOldestAges(ages){
//     let sortedAges = ages.sort((a,b)=>a-b)
//     return [sortedAges[ages.length-2], sortedAges[ages.length-1]]
// }
// //Best Practice method using slice:
// const twoOldestAges = ages => ages.sort((a,b)=>a-b).slice(-2)
// //Test  Case:
// console.log(twoOldestAges([1, 2, 10, 8]))

// // 7 kyu Sum of Minimums!
// // Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
// // For Example:
// // [ [ 1, 2, 3, 4, 5 ], [ 5, 6, 7, 8, 9 ], [ 20, 21, 34, 56, 100 ]]
//         // #  minimum value of row is 1
//         // #  minimum value of row is 5
//         // #  minimum value of row is 20
// // So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.
// // Note: You will always be given a non-empty list containing positive values.
// // ENJOY CODING :)
// //P: 2-D Array of size m*n
// //R: return the sum of the minimum values in each row
// //E: see above 
// //Pseudocode:
//     //map an array containing only the subarray's minimum values
//     //use reduce method to get the sum of the newly mapped array and return that sum
// //My solution:
// function sumOfMinimums(arr) {
//     let arrayOfMinValues = arr.map(e=>(Math.min(...e)))
//     return arrayOfMinValues.reduce((a,c) => a+c,0)
// }
// //Best practices solution - combines map and reduce and uses less memory:
// function sumOfMinimums(arr) {
//     return arr.reduce((p, c) => p + Math.min(...c), 0);
// }
// //Test case:
// console.log(sumOfMinimums([ [ 1, 2, 3, 4, 5 ], [ 5, 6, 7, 8, 9 ], [ 20, 21, 34, 56, 100 ]]))

// 7 kyu Counting Array Elements
// Write a function that takes an array and counts the number of each unique element present.
// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}
//P: given an array
//Returns object with the number of each unique element present
//E: See above
//Pseudocode:
    //Declare an empty object that we will add to and return at the end
    //iterate throuugh the array and add to the object:
        //If the element has not been seen, make a key and assign value of 1
        //If the element has been seen, increase the value ++
    //Return the object
//My solution:

// function count(array){
//     const map = {}
//     array.forEach(function(value, key) {
//       if (!map[value]) {
//         map[value] = 1
//       } else {
//         map[value] ++
//       }
//     })
//     return map;
//   }
// 7 kyu Spacify
// Modify the spacify function so that it returns the given string with spaces inserted between each character.
// spacify("hello world") // returns "h e l l o   w o r l d"
//P: string
//R: same string, but with spaces inserted between each character
//E: (spacify('hello world'),'h e l l o   w o r l d')
//Pseudocode:
    //Use a for loop and iterate through the string
    //through each iteration, add " " after each character and return the string
//My Solution:
// function spacify(str) {
//     let strArray = []
//     for (let i=0; i<str.length-1; i++){
//         strArray.push(`${str[i]} `)
//     }
//     return strArray.join('') + str[str.length-1]
// }
// //Solution using Reduce - suggestion by Eric
// function spacify(str) {
//     let reducedStr = [...str].reduce((accumulator,currentValue) => accumulator + `${currentValue} `,"")
//     return reducedStr.slice(0,-1)
// }
// //Test Case:
// console.log(spacify("Hello World"))

// 7 kyu No oddities here
// Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers. Return the good values in the order they are given.
//P Array of nums
//R same array but without the odd nums
//Examples
    // assert.deepEqual( noOdds( [0,1] ), [0] )
    // assert.deepEqual( noOdds( [0,1,2,3] ), [0,2] )
//Pseudocode:
  //Use arr.filter method and filter for even numbers only (n%2===0), and return.
//My solution:
// const noOdds = values => values.filter(e=>e%2===0)

// // 7 kyu Row Weights
// // Scenario
// // Several people are standing in a row divided into two teams.
// // The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// // Task
// // Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// // Notes
// // Array size is at least 1.
// // All numbers will be positive.
// // Input >> Output Examples
// // rowWeights([13, 27, 49])  ==>  return (62, 27)
// // Explanation:
// // The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.
// // rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// // Explanation:
// // The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.
// // rowWeights([80])  ==>  return (80, 0)
// // Explanation:
// // The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
// //P: Array of positive integers, in which the array size is always 1 or greater
// //R: Return array of two integers, where the first num is the size of Team 1 and the second num is the size of team 2
// //E: See above examples
// //Pseudocode:
//     //Team one is the combination of elements in even indexes
//     //Team two is the combination of elements in odd indexes
//     //Find the sum of each team and return in an array in the format [Team1,Team2]
// //My solution:
// function rowWeights(array){
//     let teamOne = 0
//     let teamTwo = 0
//     array.forEach((e, i) => {
//         if(i%2===0){
//             teamOne += e
//         }else{
//             teamTwo +=e
//         }
//     })
//     return [teamOne,teamTwo]
//   }
// //Refactored using ternary operator:
// function rowWeights(array){
//     let teamOne = 0
//     let teamTwo = 0
//     array.forEach((e, i) => {
//         i%2===0 ? teamOne += e : teamTwo += e
//     })
//     return [teamOne,teamTwo]
//   }
// //Refactored using less memory:
// function rowWeights(array){
//     let returnArray = [0,0]
//     array.forEach((e, i) => {
//         i%2===0 
//             ? returnArray[0] += e 
//             : returnArray[1] += e
//     })
//     return returnArray
//   }
// //Test case:
// console.log(rowWeights([13,27,49]))

// 7 kyu Array element parity
// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.
// Examples:
// [1, -1, 2, -2, 3] => 3
// 3 has no matching negative appearance
// [-3, 1, 2, 3, -1, -4, -2] => -4
// -4 has no matching positive appearance
// [1, -1, 2, -2, 3, 3] => 3
// (the only-positive or only-negative integer may appear more than once)
//P: Given an array of integers
//R: Return the integer that does not have a +/- pair
//E: see above examples
//Pseudocode:
    //Use a for loop; iterate through the array. If in the look, arr.includes arr[i] doesn't contain -1 * arr[i], then push arr[i] to a return array
    //For a test case that contains double of an element, we will return only element 0 instead of the whole array
// //My solution - using includes array method:
// function solve(arr){
//     let returnArray = []
//     for(let i=0; i<arr.length; i++){
//         if(arr.includes(-arr[i]) === false){
//             returnArray.push(arr[i])
//         }
//     }
//     return returnArray[0]
// };
// //Test Case
// console.log(solve([1, -1, 2, -2, 3, 3]))

// // 7Kyu Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
// // You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
// // Your task is to return the number of JavaScript developers coming from Europe.
// // For example, given the following list:
// // var list1 = [
// //   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
// //   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
// //   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
// //   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// // ];
// // your function should return number 1.
// //P: Given an array of objects
// //R: Return the number of people from continent: Europe that also are Language: JavaScript
// //E: See above, function will return 1
// //Pseudocode:
//     //if the object has both europe and javascript, add counter ++ and return the counter
// //My solution:
// function countDevelopers(list) {
//     let counter = 0
//     for (let i = 0; i < list.length; i++) {
//         if (list[i].continent === 'Europe' && list[i].language === 'JavaScript') counter++;
//       }
//       return counter
//   }
// //Refactored using forEach method:
// function countDevelopers(list) {
//     let counter = 0;
//     list.forEach((e)=>{
//       e.continent === "Europe" && e.language === "JavaScript" ? counter++ : counter
//     })
//     return counter
//   }
// //Best Practices codewars solution using filter:
// function countDevelopers(list) {
//     return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
//   }
// //Best Practices codewars solution using filter + arrow syntax:
// const countDevelopers = list => list.filter(e=>e.continent === "Europe" && e.language === "JavaScript").length
// //Test Case:
// console.log(countDevelopers([
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//     { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Europe', age: 28, language: 'JavaScript' },
//     { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//     { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
//   ]))

//7 Kyu Coding Meetup #2 
// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an array where each object will have a new property 'greeting' with the following string value:
// Hi < firstName here >, what do you like the most about < language here >?
// For example, given the following input array:
// var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ];
// your function should return the following array:
// [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?'
//   },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?'
//   } 
// ];
//P: Given an array of objects
//R: Give each object in the given array a new property in which it says the above greeting, and then return the array
//Examples: See above
//Pseudocode:
    //use map to apply method to each object in the original array
//My solution using map:
// function greetDevelopers(list) {
//     return list.map(e => ({...e, greeting: `Hi ${e.firstName}, what do you like the most about ${e.language}?`}))
//   }
// //Refactored using arrow syntax:
// const greetDevelopers = list => list.map(e => ({...e, greeting: `Hi ${e.firstName}, what do you like the most about ${e.language}?`}))
// //Test Case:
// console.log(greetDevelopers([
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
//   ]))

//7 kyu Maximum Product
//Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
//P: Array of integers
//R: return the max product from multiplying 2 adjacent numbers in the array
//Examples:
        // adjacentElementsProduct([1, 2, 3]); ==> return 6
        // Explanation:
        // The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
        // adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
        // Explanation:
        // Max product obtained from multiplying 5 * 10  =  50 .
        // adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
        // Explanation:
        // The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
//Pseudocode:
        //iterate through the array and multiply e * array[i+1]
        //push the product to another array
        //return the max value in this other array
//My solution:
// function adjacentElementsProduct(array) {
//     let arrayOfProducts = []
//     array.forEach((e,i) => arrayOfProducts.push(e*array[i+1]))
//     //Since .forEach() iterates through the whole length of the array,
//     //the last product will always be NaN since the last element of the array
//     //multiplied by "array[i+1]" will be NaN. Because of this,
//     //we will slice out the last element (NaN) from arrayOfProducts
//     return Math.max(...arrayOfProducts.slice(0,-1))
//   }
// //Test Case:
// console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]))

// // 7 kyu Minimize Sum Of Array (Array Series #1)
// // Task Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
// // Notes Array/list will contain positives only .
// //P: Array of integers
// //R: Return the min sum obtained from summing each two integers' product
// //Examples:
//         // minSum({5,4,2,3}) ==> return (22) 
//         //Explanation:
//         // The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
//         // minSum({12,6,10,26,3,24}) ==> return (342)
//         // Explanation:
//         // The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
//         // minSum({9,2,8,7,5,4,0,6}) ==> return (74)
//         // Explanation:
//         // The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74
// //Pseudocode:
//     //Looking through the examples, the smallest integer in the array is always paired with the largest integer, and so on.
//     //The array lengths will always be even - sort the array from least to greatest.
//     //Pair up the integers so that the first element always is paired with last element, second element paired with second-to-last element, etc
//     //push the products into an array, and get the sum of that array. Return the array.
// //My solution:
// function minSum(arr) {
//     let productArr = []
//     let sortedArr = arr.sort((a,b) => a-b)
//     //Iterate through half of the array, push product to productArr
//     for(let i=0; i<arr.length/2; i++){ 
//         productArr.push(sortedArr[i]*sortedArr[arr.length-1-i])    
//     }
//     //return the sum of productArr
//     return productArr.reduce((acc,c) => acc + c , 0) 
// }
// //test case:
// console.log(minSum([12,6,10,26,3,24]))

// // 8 kyu Remove duplicates from list
// // Define a function that removes duplicates from an array of numbers and returns it as a result.
// // The order of the sequence has to stay the same.
// //P: Arrayy of characters
// //R: Array but with duplicate characters removed
// //E: 
//     // Test.assertSimilar(distinct([1]), [1]);
//     // Test.assertSimilar(distinct([1,2]), [1,2]);
//     // Test.assertSimilar(distinct([1,1,2]), [1,2]);
// //Pseudocode:
//     //Per MDN: The Set object lets you store unique values of any type, whether primitive values or object references...
//     //Set objects are collections of values. A value in the Set may only occur once; it is unique in the Set's collection. 

//     //Create a new Set of the array and use the spread operator to capture all elements in the given array
// //My solution:
// function distinct(a) {
//     return [...new Set(a)]
// }
// //Refactored using arrow function:
// const distinct = a => [...new Set(a)]

// 8 kyu Total amount of points
// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:
// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
//P: Array of football matches
//R: Total score
//E: See above
//Pseudocode:
    //Use reduce method on the array, comparing c[0] to c[2]. 
    //In other words, for each element, it will compare the element @ index 0 to the same element @ index 2
    //If 0 > 2 then add 3 to the accumulator. if 0 = 2, add 1 to the accumulator. if 0 < 2, add 0 to the accumulator. 
    //Since it's reduce method, the accumulator will be returned.
//My solution:
// const points = games => games.reduce((acc,c) => acc + (c[0] > c[2] ? 3 : c[0] === c[2] ? 1: 0), 0)

// // 8 kyu Removing Elements
// // Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// // Example:
// // ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// // None of the arrays will be empty, so you don't have to worry about that!
// //P: Array (never empty)
// //R: Array with every second element removed from the array
// //E: See above
// //Pseudocode:
//     //Map a new array referencing the old array, but only map elements that are in indexes that are even?
//     //I ended up using FILTER method, not map. Filter for indexes that are even (i%2===0)
// //My solution (filter):
// function removeEveryOther(arr){
//     return arr.filter((e,i)=> i % 2 === 0)
//   }
// //My solution using Map method:
// function removeEveryOther(arr){
//     let returnArr = []
//     arr.map((e,i)=> i % 2 === 0 ? returnArr.push(e) : null)
//     return returnArr
//   }
// //Refactored arrow function:
// const removeEveryOther = arr => arr.filter((e,i)=> i % 2 === 0)
// //Test Case:
// console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))

// // 8 kyu Find the first non-consecutive number
// // Your task is to find the first element of an array that is not consecutive.
// // By not consecutive we mean not exactly 1 larger than the previous element of the array.
// // E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// // If the whole array is consecutive then return null.
// // The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
// // If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
// // 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )
// //P: array of at least 2 elements (numbers)
// //R: If the whole array is consecutive, return null. Otherwise return the first non-consecutive number.
// //E: See above example
// //Pseudocode:
//     //iterate through the array. if the element of the next index + 1 is greater than element of the current index, then return the element of the current index.
// //solution:
//     function firstNonConsecutive(arr) {
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i - 1] + 1 !== arr[i]) return arr[i];
//         }
//         return null;
//     }
// //Test:
// console.log(firstNonConsecutive([1,2,3,7))

// // 7 kyu Add property to every object in array
// // Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
// // After adding the property the result should be:
// // var questions = [{
// //     question: "What's the currency of the USA?",
// //     choices: ["US dollar", "Ruble", "Horses", "Gold"],
// //     corAnswer: 0,
// //     usersAnswer: null
// // }, {
// //     question: "Where was the American Declaration of Independence signed?",
// //     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
// //     corAnswer: 0,
// //     usersAnswer: null
// // }];
// //P: Given an array of objects
// //R: Return the array of objects after having added usersAnswer: null to each object
// //E: See above example
// //Pseudocode:
//     //use map to apply userAnswer = null to each object in the original array
// //My solution:
// questions.map(function(element){
//     element.usersAnswer = null;
//   });

// 7 kyu Likes Vs Dislikes
// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.
// Task
// Create a function that takes in a list of button inputs and returns the final state.
// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.
//P: list of button inputs
//R: Return the final state . . . however if the state of the second to last state is the same as the last state, return "Nothing"
//E: See above examples
//Pseudocode:
    //If the array length is 2 or more and last element of the array is the same as the second to last element of the array:
            //Return "Nothing"
    //Otherwise:
            //Return the last element.
//My solution:
// const likeOrDislike = buttons => buttons.reduce((acc,c) => c == acc ? Nothing : c,Nothing)

// // 7 kyu Sort arrays - 1
// // Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.
// //P: unsorted array
// //R: sorted array (lexicographical order)
// //E: (sortme(['one', 'two', 'three' ]) returns ["one", "three", "two"])
// //Pseudocode: use sort method on the given array
// //My solution:
// const sortme = names => names.sort()

// // 8 kyu Basic Training: Add item to an Array
// // Add the value "codewars" to the websites array.
// // After your code executes the websites array should == ["codewars"]
// // The websites array has already been defined for you using the following code:
// // var websites = [];
// //P: Given empty array called 'websites'
// //R: your code executes the websites array should == ["codewars"]
// //E: websites == ["codewars"]
// //Pseudocode:
//     //use push method to push string 'codewars' to the empty array
//     //use bracket of element 0 to equal string codewars
// //Solutions:
// websites.push("codewars")
// websites[0]="codewars"

// // 6 kyu Break camelCase
// // Complete the solution so that the function will break up camel casing, using a space between words.
// // Example
// // "camelCasing"  =>  "camel Casing"
// // "identifier"   =>  "identifier"
// // ""             =>  ""
// //P: Given a string
// //R: Break up the camel casing, placing a string between words
// //E: See examples above
// //Pseudocode:
//     //Have an empty string that we will add to and return at the end.
//     //Use a loop which will iterate through the string. 
//     //If a capital letter is found, add a space plus the letter to the returnString.
//     //Otherwise just add the character to the returnString
// // my solution:
// function solution(string) {
//     let returnString = ""
//     for(let i=0; i<string.length;i++){
//         if(string[i] === string[i].toUpperCase()){
//             returnString += ` ${string[i]}`
//         }else{
//             returnString += `${string[i]}`
//         }
//     }
//     return returnString
// }
// //Test Case:
// console.log(solution(''))

// // 8 kyu Define a card suit
// // You get any card as an argument. Your task is to return the suit of this card (in lowercase).
// // Our deck (is preloaded):
// // ('3♣') -> return 'clubs'
// // ('3♦') -> return 'diamonds'
// // ('3♥') -> return 'hearts'
// // ('3♠') -> return 'spades'
// //P: card
// //R: suit of card in lowercase (string)
// //E: See above
// //Pseudocode:
// // Use if-else statement for the card and suits, using the "includes" string method for each condition
// //My solution:
// function defineSuit(card) {
//     if(card.includes('♣')){
//         return 'clubs'
//     }else if(card.includes('♦')){
//         return 'diamonds'
//     }else if(card.includes('♥')){
//         return 'hearts'
//     }else if(card.includes('♠')){
//         return 'spades'
//     }
//   }
// //Refactor - ternary:
// function defineSuit(card) {
//     return card.includes('♣') ? 'clubs'
//           : card.includes('♦') ? 'diamonds'
//           : card.includes('♥') ? 'hearts'
//           : card.includes('♠') ? 'spades'
//           : null
//   }
// //Test case:
// console.log(defineSuit('3♣'))

// 7 kyuDrone Fly-By
// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.
// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.
// Return the resulting lamps string. See example tests for more clarity.
//P: 2 strings, lamps (x=off, o=on) and drone (T=position)
//R: The resulting lamps string
//Examples:
        // describe("Drone Fly-By", () => {
        //     it("Testing for fixed tests", () => {
        //       assert.strictEqual(flyBy('xxxxxx', '====T'), 'ooooox');
        //       assert.strictEqual(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
        //       assert.strictEqual(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 
        //     })
        //   })
//Pseudocode:
    //Find the length of the drone and store as a number
    //make an array that will be the same length as the lamps
            //The start of the array will be o's that are equal to the length of the drones
            //The rest of the length will be "x" if available.
//My solution:
// function flyBy(lamps, drone){
//     let returnArr = []
//     let droneLength = drone.length
//     let lampsFragment = lamps.length - drone.length
//     let lampsArr = lamps.split('')
//     for(let i=0; i<droneLength; i++){
//         returnArr.push("o")
//     }
//     for(let i=0; i<lampsFragment; i++){
//         returnArr.push("x")
//     }
//     if(drone.length > lamps.length){
//         return returnArr.slice(0, lamps.length).join('')
//     }else{
//         return returnArr.join('')
//     }
// }
// //Refactor:
// function flyBy(lamps, drone){
//     let returnArr = []
//     for(let i=0; i<drone.length; i++){
//         returnArr.push("o")
//     }
//     for(let i=0; i<lamps.length - drone.length; i++){
//         returnArr.push("x")
//     }
//     return drone.length > lamps.length ? returnArr.slice(0, lamps.length).join('') : returnArr.join('')
// }
// //Test:
// console.log(flyBy('xxx', '==============T'))

// // 7 kyu Bumps in the Road
// // Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
// //P: string showing flat or bump (_, n)
// //R: car dead or woohoo
// //E: 
// // describe("Bumps in the Road", () => {
// //     it("Testing for fixed tests", () => {
// //       assert.strictEqual(bump("n"), "Woohoo!");
// //       assert.strictEqual(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
// //       assert.strictEqual(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
// //       assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
// //       assert.strictEqual(bump("______n___n_"), "Woohoo!");
// //     });
// //   });
// //Pseudocode:
// //set a variable for n
// //use a loop, if there is an n, add to the counter. If counter is 15 or less, return woohoo, otherwise car dead
// //Solution:
// function bump(x){
//     let counter = 0
//     for(let i=0; i<x.length; i++){
//         x[i] === "n" ? counter++ : null
//     }
//     return counter > 15 ? "Car Dead" : "Woohoo!"
// }   
// //Test Case:
// console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"))

// // 6 kyu Replace With Alphabet Position
// // In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// // If anything in the text isn't a letter, ignore it and don't return it.
// // "a" = 1, "b" = 2, etc.
// // Example
// // alphabetPosition("The sunset sets at twelve o' clock.")
// // Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
// //P: String'
// //R: String but every letter is assigned a number value (1-26)
// //E: see above
// //Pseudocode:
// //Set text toLowerCase()
// //set a variable "alphabet" that includes the whole alphabet in a string
// //Declare an empty array that will be pushed to and returned and joined(' ') at the end of the function
// //Iterate through "text"
//   //use indexOf(text[i])
//     //if -1, continue
//     //Otherwise, push to the array (index + 1) since a === 1, b === 2, etc.
// //Solution:
// function alphabetPosition(text) {
//     text = text.toLowerCase()
//     const alphabet = "abcdefghijklmnopqrstuvwxyz"
//     let alphabetArr = []
//     //iterate through text:
//     for (let i=0; i<text.length; i++){
//         let alphabetIndex = alphabet.indexOf(text[i])
//             //alphabet.indexOf(text[i]) returns -1 for characters that aren't in alphabet variable.
//             //Don't push anything to the array and continue the interation:
//         if (alphabetIndex === -1){
//             continue
//         }else{
//             //Otherwise, push the index "+ 1" because per the question, a is index 1, not 0.
//             alphabetArr.push(alphabetIndex + 1)
//         }
//     }
//     return alphabetArr.join(' ')
//   }
// //Test:
// console.log(alphabetPosition("The sunset sets at twelve o' clock."))

// // 7 kyu Sort by Last Char
// // Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// // If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
// // All inputs will be valid.
// //P: string of words x
// //R: array of words, sorted alphabetically by the final char in each
// //Examples:
// // describe("Sort by Last Char", () => {
// //     it("Testing for fixed tests", () => {
// //       assert.deepEqual(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
// //       assert.deepEqual(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
// //       assert.deepEqual(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);    
// //     })
// //   });
// //Pseudocode:
//     //Split by word (" ")
//     //sort by UTF-16 code using .charCodeAt
// function last(x){
//     return x.split(' ').sort((a,b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1))
// }
// //Solution:
// console.log(last('what time are we climbing up the volcano'))


// // 7 kyu Alphabet war
// // There is a war and nobody knows - the alphabet war!
// // There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// // Task
// // Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// // The left side letters and their power:

// //  w - 4
// //  p - 3
// //  b - 2
// //  s - 1
// // The right side letters and their power:

// //  m - 4
// //  q - 3
// //  d - 2
// //  z - 1
// // The other letters don't have power and are only victims.

// // Example
// // alphabetWar("z");        //=> Right side wins!
// // alphabetWar("zdqmwpbs"); //=> Let's fight again!
// // alphabetWar("zzzzs");    //=> Right side wins!
// // alphabetWar("wwwwwwz");  //=> Left side wins!
// //P: string of letters
// //R: Left side wins!, let's fight again! or Right side wins!
// //E: see examples above

// //Pseudocode:
//     //declare var for left side letters
//     //declare var for right side letters
//     //use a loop and conditions; if left side letters are seen, add to left side variable (do the same for the right)
//     //return which side has the highest score, otherwise return fight again
// //My solution:
// function alphabetWar(fight){
//     let leftSideScore = 0
//     let rightSideScore = 0
//     for(let i=0; i<fight.length; i++){
//         if(fight[i]==="w"){
//             leftSideScore += 4
//         }else if(fight[i]==="p"){
//             leftSideScore += 3
//         }else if(fight[i]==="b"){
//             leftSideScore += 2
//         }else if(fight[i]==="s"){
//             leftSideScore += 1
//         }else if(fight[i]==="m"){
//             rightSideScore += 4
//         }else if(fight[i]==="q"){
//             rightSideScore += 3
//         }else if(fight[i]==="d"){
//             rightSideScore += 2
//         }else if(fight[i]==="z"){
//             rightSideScore += 1
//         }
//     }
//     return leftSideScore > rightSideScore ? "Left side wins!" 
//     : rightSideScore > leftSideScore ? "Right side wins!"
//     : "Let's fight again!"
// }
// //Test case:
// // console.log(alphabetWar("wwwwwwz"))

// // 7kyu Caffeine Script
// // Complete the function caffeineBuzz, which takes a non-zero integer as its argument.
// // If the integer is divisible by 3, return the string "Java".
// // If the integer is divisible by 3 and divisible by 4, return the string "Coffee"
// // If one of the condition above is true and the integer is even, add "Script" to the end of the string.
// // If none of the condition is true, return the string "mocha_missing!"
// // caffeineBuzz(1)   => "mocha_missing!"
// // caffeineBuzz(3)   => "Java"
// // caffeineBuzz(6)   => "JavaScript"
// // caffeineBuzz(12)  => "CoffeeScript"

// //P:non-zero integer
// //R: 
//     // return java if divisible by 3 
//     // coffee if divisible by 3 and 4
//     //If one above is true and integer is even, add script to the end of the string
//     //if no condition is true return mocha missing
// //E: see above
// //Pseudocode:
// //have a condition for the 3 and 4, coffee
// //have condition for 3, java
// //if coffee or java and even, add script
// function caffeineBuzz(n){
//     if (n % 12 === 0) return 'CoffeeScript'
//     if (n % 6 === 0) return 'JavaScript'
//     if (n % 3 === 0) return 'Java'
//     return 'mocha_missing!'
//   }

// console.log(caffeineBuzz(12))


// // 8 kyu Vowel remover
// // Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// // Examples
// // "hello"     -->  "hll"
// // "codewars"  -->  "cdwrs"
// // "goodbye"   -->  "gdby"
// // "HELLO"     -->  "HELLO"
// // don't worry about uppercase vowels
// // y is not considered a vowel for this kata

// //P string
// //R string with lowercase vowels removed
// //E see above
// //Pseudocode: 
//     //iterate through the string, and if a lowercase vowel is seen, don't include it in the return
// //My solution:
// function shortcut (string) {
//     let stringArr = string.split('')
//     return stringArr.filter(e => e!== "o" && e!== "e" && e !== "i" && e != "a" && e !== "u")
//   }

// //refactored:
// const shortcut = string => string.split('').filter(e => e!== "o" && e!== "e" && e !== "i" && e != "a" && e !== "u").join('')
// //Test case:
// console.log(shortcut("helloo!"))


// // 8 kyu Multiplication table for number
// // Your goal is to return multiplication table for number that is always an integer from 1 to 10.
// //p integer 1-10
// //r multiplicTION TABLE
// //e 
// // For example, a multiplication table (string) for number == 5 looks like below:

// // 1 * 5 = 5
// // 2 * 5 = 10
// // 3 * 5 = 15
// // 4 * 5 = 20
// // 5 * 5 = 25
// // 6 * 5 = 30
// // 7 * 5 = 35
// // 8 * 5 = 40
// // 9 * 5 = 45
// // 10 * 5 = 50

// //pseudocode:
// //use loop going from 1 to 10 to create the 1 through 10 table
// //declare a return string
// //for each iteration, keep adding a part of the multiplication table to the string and return it.
//   //Use a template literal for each iteration
// //My solution:
// function multiTable(number) {
//     let returnString = ""
//     for (let i=0; i<10; i++){
//         returnString += `${i+1} * ${number} = ${(i+1) * number}\n`
//     }
//     return returnString.slice(0, -1)
//   }
// //Test case
//   console.log(multiTable(5))

// // 7 kyu Sum of a sequence
// // Your task is to make function, which returns the sum of a sequence of integers.
// // The sequence is defined by 3 non-negative values: begin, end, step (inclusive).
// // If begin value is greater than the end, function should returns 0
// // Examples
// // 2,2,2 --> 2
// // 2,6,2 --> 12 (2 + 4 + 6)
// // 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// // 1,5,3  --> 5 (1 + 4)
// //P: given begin, end, and step
// //R: sum of a sequence of integers. If begin is greater than end, return 0
// //E: See above
// //Pseudocode:
//     //Begin at begin value, increment by the step value up until you reach the end
//     //Declare a variable that we will add to on each iteration of a loop and return it, named "sum"
//     //Iterate from begin all the way up to less than or equal to end. Increment by step
//         //for each iteration, add "i" to the sum
//     //return sum at the end.
// //Solution:
// const sequenceSum = (begin, end, step) => {
//     let sum = 0
//     if(begin > end){
//         return 0
//     }
//     for(let i=begin; i<=end; i += step){
//         sum += i
//         console.log(sum)
//     }
//     return sum
//   }; 
// //Test case 
// console.log(sequenceSum(2,2,2))

// // 8 kyu Simple multiplication
// // This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
// //P: Integer
// //R: integer*8 if integer is even. Otherwise integer*9
// //Example: 2 -> 16, 1 -> 9
// //Pseudocode: use conditional - if even, do this. otherwise, do that
// //my solution
// function simpleMultiplication(number) {
//     return number % 2 === 0 ? number*8 : number*9
// }
// //refactored:
// const simpleMultiplication = number => number % 2 === 0 ? number*8 : number*9

// // 8 Kyu
// // How many lightsabers do you own?
// // Inspired by the development team at Vooza, write the function that
// // accepts the name of a programmer, and
// // returns the number of lightsabers owned by that person.
// // The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
// // Note: your function should have a default parameter.
// // For example(Input --> Output):
// // "anyone else" --> 0
// // "Zach" --> 18
// //P: Name of programmer
// //R: # of lightsabers owned by programmer
// //E: Zach -> 18
// //Pseudocode:
//     //Have a conditional that returns 0 UNLESS the argument is zach. then return 18.
// //My solution:
// const howManyLightsabersDoYouOwn = name => name === "Zach" ? 18 : 0

// 7Ku - Halving Sum
// Task Given a positive integer n, calculate the following sum:
// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.
// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47
//P integer n
//R return the sum of integer n plus n/2, n/4 ... until you get 1.
//E 25  =>  25 + 12 + 6 + 3 + 1 = 47
//Pseudocode:
//It's not really n/2 but more n/2 rounded down to integer
    //This would be using Math.floor
    //we do this UNLESS num ===1. If n is 1, we return 1.
    //otherwise...Use recursion!
    //return num plus halvingSum(Math.floor(num/2))
//My solution: 
// const halvingSum = num => num === 1 ? 1 : num+halvingSum(Math.floor(num/2))


// // 8Kyu If you can't sleep, just count sheep!!
// // Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
// //P integer
// //R counting sheep string with integer from 1 to num
// //E see above example
// //Pseudocode:
//   //Make a loop iterating from to num
//   //on each iteration, add to a return sring the following:
//     //(num sheep...)
// var countSheep = function (num){
//     let rString = ''
//     for(let i=1; i<=num; i++){
//         rString += `${i} sheep...`       
//     }
//     return rString
//   }
// //Test case
// console.log(countSheep(3))

// //8 kyu Regular Ball Super Ball
// //Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
// // If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
// // ball1 = new Ball();
// // ball2 = new Ball("super");
// // ball1.ballType     //=> "regular"
// // ball2.ballType     //=> "super"
// //P: ballType
// //R: 'regular' or whatever the balltype is
// //Example: see above
// //Pseudocode:
//     //we are using classes, so use this.balltype
//     //If there is a balltype, then .balltype of the class should be equal to balltype
//     //else, return 'regular'
// //Solution
// class Ball {
//     constructor(ballType = "regular") {
//       this.ballType = ballType;
//     }
//   }

// //7Kyu Spoonerize Me
// //A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.
// // In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

// // "not picking" --> "pot nicking"

// // Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example. A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. Though spoonerisms are about letters in words in the domain of written and spoken language, numbers are included in the inputs for the random test cases and they require no special treatment.

// // NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.

// // Once you have completed this kata, a slightly more challenging take on the idea can be found here: http://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd
// //P given two words
// //R return the two words but with the first letters of the words swapped
// //Example not picking -> pot nicking
// //Pseudocode:
//     //use split to place them in array
//     //In a string literal, piece them together:
//         //First word:
//             //Combine the second element's first string (arr[0][1]) and string-concat this with the rest of the first word (arr[0].slice(1)) 
//         //Second Word:  
//             //Combine the first element's first string (arr[0][0]) and string-concat this with the rest of the second word (arr[1].slice(1)) 
//         //Return the string!

// //My solution:
// function spoonerize(words) {
//     let wordsSplit = words.split(' ')
//     return `${wordsSplit[1][0]+wordsSplit[0].slice(1)} ${wordsSplit[0][0]+wordsSplit[1].slice(1)}`
// }
// //TEST
// console.log(spoonerize("not picking"))

// //7 kyu Count the Digit
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
// Square all numbers k (0 <= k <= n) between 0 and n.
// Count the numbers of digits d used in the writing of all the k**2.
// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.
//P: Take integer n and digit d
//R: The count of the number of digits "d" used in the writing of all the k**2
//E: 
  //Given n = 10, d = 1 
  //k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
  //digit 1 in: 1, 16, 81, 100. The total count is then 4.
//Pseudocode:
  //Declare an array that we will push to
  //Declare a count that we will potentially add to
  //Square all the numbers between 0 and n, and push them into an array
  //Join the numbers into one long number, and iterate through it. For each value equals "d", increase a count by 1.
  //Return that count.

  //My solution:
//   function nbDig(n, d) {
//     //Declare an array that we will push to
//     let array = []

//     //Declare a count that we will potentially add to
//     let count = 0

//     //Square all the numbers between 0 and n, and push them into an array
//     for(let i=0; i<=n; i++){
//         array.push(Math.pow(i,2))
//     }

//     //Join the numbers into one long number, and iterate through it. For each value equals "d", increase a count by 1.
//     let longNumber = array.join('')
//     for(let i=0; i<=longNumber.length; i++){
//         longNumber[i] == d ? count++ : null
//     }
//     //Return that count.
//     return count
// }
// //Test case:
// console.log(nbDig(11549, 1))

// // 7 kyu Find Count of Most Frequent Item in an Array
// // Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
// // Example
// // input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// // ouptut: 5 
// // The most frequent number in the array is -1 and it occurs 5 times.
// //P: array of numbers
// //R: return the count of the most frequent item of the array
// //E: See above example:
// //Pseudocode:
//     //Iterate through the array
//     //create a map that keeps track of the element and how many times in the array it has been seen
//     //return the element that has been seen the most amount of times. In an object, this is Object.values(object)
//     //Returning the highest values, use Math.max and spread operator
// //My solution:
// function mostFrequentItemCount(collection) {
//     if(collection.length === 0){
//         return 0
//     }
//     let hashmap={}

//     //When element hasn't been seen, add that key to the object. 
//     //If element has been seen, add one to the value of that element
//     collection.forEach(element => hashmap[element] = (hashmap[element] || null)+1)
//     let array = Object.values(hashmap)
//     return(Math.max(...array))
//   }
// //Test case:
// // console.log(mostFrequentItemCount([3, -1, -1])) //returns 2


// 7 kyu Survive the attack
// Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

// CONDITIONS

// Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array.
// EXAMPLES

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
// //0 survivors                4 survivors
// //return true


// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
// //2 survivors  (16 damage)   2 survivors (6 damage)
// //return false

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]  
// //1 survivors                3 survivors 
// //return true

//P: two arrays of numbers
//R: True if defenders survive, false if attackers survive
//E:    
    // (hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false);
    // ([1, 3, 5, 7], [2, 4, 6, 8]), true);
//Pseudocode:
    //early return: have a length checker - if attackers.length > defenders.length, return false. else if attackers.length < defenders.length, return true
    //iterate through both arrays and have a score tracker for attackers and defenders. If defenders is greater, return true, if attackers is greater, return false.
    //If survivors on both sides are equal, then compare the initial sums of both arrays. If defender sum is equal to or greater than attacker sum, return true. Otherwise return false.
//My solution:
// function hasSurvived(attackers, defenders){
//     if(attackers.length > defenders.length){
//         return false
//     }else if(attackers.length < defenders.length){
//         return true
//     }
//     let survivorDefense = 0
//     let survivorOffense = 0
//     let defenderInitialAttack = defenders.reduce((acc,c) => acc + c,0)
//     let attackerInitialAttack = attackers.reduce((acc,c) => acc + c,0)
//     for(let i = 0; i < attackers.length; i++){
//         if(attackers[i] > defenders[i]){
//             survivorOffense += 1
//         }else if(attackers[i] < defenders[i]){
//             survivorDefense +=1
//         }
//     }
//     if(survivorDefense > survivorOffense){
//         return true
//     }else if(survivorOffense > survivorDefense){
//         return false
//     }else{
//         if(defenderInitialAttack >= attackerInitialAttack){
//             return true
//         }else{
//             return false
//         }
//     }
// }
// //Test:
// console.log(hasSurvived([71,53,38,67,3,6,27,57,93,40],[82,65,32,62,14,23,20,20,53,73]))

// 6 kyu Bit Counting
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
//P: Integer as an input
//R: The number of bits equal to one in the binary representation of that number
//E:
//Pseudocode:
//My solution:
  //Convert integer to binary string
  //Loop through the string, have a counter that increases everytime it sees "1"
  //Return the string

// var countBits = function(n) {
//     //Convert integer to binary string:
//     let binary = n.toString(2)
//     //Loop through the string, have a counter that increases everytime it sees "1":
//     let counter = 0
//     for(let i=0; i<binary.length; i++){
//         binary[i] == 1 ? counter++ : null
//     }
//     return counter
// };
// //Test cases:
// console.log(countBits(10))

// //7Kyu Largest pair sum in array
// // Given a sequence of numbers, find the largest pair sum in the sequence.
// // For example
// // [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// // [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// // Input sequence contains minimum two elements and every element is an integer.
// //P given a sequence of numbers
// //R return the largest pair sum in the sequence
// //E See examples
// //Pseudocode
// // Sort the array
// // Return the sum of the last and second-to-last index

// //My solution:
// function largestPairSum (numbers) {
//     let sortedArray = numbers.sort((a,b) => (a-b))
//     return sortedArray[sortedArray.length - 1] + sortedArray[sortedArray.length -2]
//   }
// //Test case:
// console.log(largestPairSum([-100,-29,-24,-19,19]))

// // //8Kyu Grasshopper - Debug sayHello
// // Debugging sayHello function
// // The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
// // Example output:
// // Hello, Mr. Spock
// //P: Given name/string
// //R: Return "Hello, [name]"
// //E: See above
// //Pseudocode:
//   //rewrite the code so that it takes in the name as an argument in the return string.
//   //For example, implement a template literal string of `Hello, ${name}`
// //My solution:
// const sayHello = name => `Hello, ${name}`

//8 kyu No zeros for heros
// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway
//P: Given integer
//R: Return integer without any trailing zeros
//E: See above examples
//Pseudocode:
    //If n is zero, return 0
    //Guard clause thing: If n % 10 !== 0, return n
    //Some recursion here, keep dividing by 10 until the currcnt number % 10 isn't zero anymore. at that point, return the number:
    //If n mod 10 is zero, set current to current / 10 and recursively call noBoringZeros(current)
    //That way, whenever we finally divide it by 10 and it's no longer divisible by 10, it will be returned due to the "if (n % 10 !== 0){ return current}" clause
    
//My solution:
// function noBoringZeros(n) {
//     if(n===0){
//         return 0
//     }
//     let current = n
//     if(n % 10 !== 0){
//         return current
//     }else{
//         current = current / 10
//         return noBoringZeros(current)
//     }
//   }
// //Test case:
// console.log(noBoringZeros(0))

