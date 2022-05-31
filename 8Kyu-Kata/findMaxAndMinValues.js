//8 kyuFind Maximum and Minimum Values of a List
// Instructions: Write a function that returns both the minimum and maximum number of the given list/array.
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]
//My solution:
function minMax(arr){
    arr.sort((a,b) => a-b);
    let maxElement = arr[arr.length-1];
    let minElement = arr[0];
    console.log(arr);
    console.log(maxElement);
    console.log([minElement,maxElement]);
  }
// Other solutions . . .
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }

const minMax = arr => [ Math.min(...arr), Math.max(...arr) ];