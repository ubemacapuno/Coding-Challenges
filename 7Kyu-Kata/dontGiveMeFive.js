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
function dontGiveMeFive(start,end){
    let arrayNoFives = []
    for (i=start; i<= end; i++){
      if (!i.toString().includes('5')){
        arrayNoFives.push(i);
      }
    }
    return arrayNoFives.length;
}
//Test Case:
// console.log(dontGiveMeFive(4,17))