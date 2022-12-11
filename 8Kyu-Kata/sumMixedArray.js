//8 kyu Sum Mixed Array 05.20.2022
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
//My Solution:
function sumMix(x){
   return x.map(e=>e*1).reduce(
    (a, c) =>a + c,0);
}
//My Solution as an Arrow Function:
const sumMix = x => x.map(e=>e*1).reduce((a, c) =>a + c,0);
//Test Cases:
// console.log(sumMix([1,2,3,"4"]));