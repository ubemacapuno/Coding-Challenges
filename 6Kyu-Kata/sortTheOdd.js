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
function sortArray(array) {
    let oddArray = array.filter((x) => x % 2).sort((a,b) => b - a);
    return array.map((x)=> x % 2 ? oddArray.pop() : x)
  }

// Best Practices solution:
function sortArray(array) {
    //FILTER OUT the evens and sort the odd numbers
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    console.log(odd)
    //Map array, but if x is even, then we will map odd.shift(), which will return the left-most element in the odd array (which is sorted from least to greatest)
    return array.map((x) => x % 2 ? odd.shift() : x)
  }
//Test Case:
console.log(sortArray([5, 8, 6, 3, 4]))