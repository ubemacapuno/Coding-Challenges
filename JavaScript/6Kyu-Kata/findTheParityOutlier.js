// 6 kyu Find The Parity Outlier 08/01/2022
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)
//P: Given an array of length 3 or greater containing numbers
//R: Return the outlier.
//E: see above examples
//Pseudocode:
    //very slow solution but should work!
            //Outside the loop, declare a counter for odd and a counter for even.
            //iterate through the array with a loop to determine if the majority are even or odd.
            //If odd > even, then loop through the array again, filtering out the odds. Return the even number
            //if Even > odd, then loop through the array again, filtering out the evens. Return the odd number
//My Solution:
function findOutlier(integers){
    let oddCounter = 0
    let evenCounter = 0
    for(let i=0; i<integers.length;i++){
        integers[i] % 2 === 0 ? evenCounter++ : oddCounter++
    }
    // console.log(evenCounter > oddCounter ? "even is greater, return the odd outlier" : evenCounter === oddCounter ? "Even is equal to Odd" : "Odd is greater, return the even outlier")
    if(evenCounter > oddCounter){
        return Number(integers.filter(e=>e%2 != 0))
    }else{
        return Number(integers.filter(e=>e%2 === 0))
    }
  }
//My solution Refactored:
function findOutlier(integers){
    let oddCounter = 0
    let evenCounter = 0
    for(let i=0; i<integers.length;i++){
        integers[i] % 2 === 0 ? evenCounter++ : oddCounter++
    }
    return evenCounter > oddCounter ? Number(integers.filter(e=>e%2 != 0)) : Number(integers.filter(e=>e%2 === 0))
  }
//Better solution from user meodien99:
function findOutlier(integers){
    var odds = integers.filter((e)=> e & 1);
    var evens = integers.filter((e)=> !(e & 1));
    var result = (odds.length < evens.length) ? odds.pop() : evens.pop();
    return result;
  }

//Test cases
  console.log(findOutlier([1,1,0,1,1])) //0
  console.log(findOutlier([2,6,8,10,3])) //3