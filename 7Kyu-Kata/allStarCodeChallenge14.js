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
function median(array) {
    let sortedArray = array.sort((a,b)=>a-b)
    let sortedArrayLengthMinusOne = sortedArray.length - 1
    if(array.length % 2 == 0){
        return ((sortedArray[Math.floor(sortedArrayLengthMinusOne/2)]) + ((sortedArray[((sortedArray.length)/2)]))) / 2
    }else{
        return sortedArray[Math.ceil((array.length/2) - 1)]
    }
}
//Test cases:
// console.log(median([1,2,3,50]))
// console.log(median([3,2,1]))
// console.log(median([33,99,100,30,29,50]))//sorted: [29, 30, 33, 50, 99, 100]