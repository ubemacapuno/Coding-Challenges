// 7 kyu How many are smaller than me?
// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.
// For example:
// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]
//P: Given an array of integers
//R: returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.
//E: See above
//Pseudocode:
    //
    //We need to loop through the array.
    //Set an array for the return (returnArr)
    //Set a variable (counter) that will COUNT the indexes to the right of arr[i]
    //Set a variable (base) that will track which index we're looking at to compare indexes to the right of
        //make another loop that is checking the indexes to the right of the base
        //push elements to an array that are LESS than the base
    //Return the returnArr
    
//My solution:
function smaller(nums) {
    //Return array:
    let returnArr = []
    //Counter:
    let counter = 0
    //Base:
    let base = 0

    for (let i = 0; i < nums.length; i++) {
        base = nums[i];
        counter = 0;
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[j] < base) counter++;
        }
        returnArr.push(counter);
      }
    return returnArr
}