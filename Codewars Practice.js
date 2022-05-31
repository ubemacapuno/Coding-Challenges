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
