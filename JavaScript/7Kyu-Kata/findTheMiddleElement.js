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
function gimme (triplet) {
    let sortedArray = triplet.map(e=>e).sort((a,b)=>a-b)
    let middleVariable = sortedArray[1]
    return triplet.indexOf(middleVariable)
    }
//Test case:
// console.log(gimme([2,3,1]))