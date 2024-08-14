// 8 kyu Remove duplicates from list
// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.
//P: Arrayy of characters
//R: Array but with duplicate characters removed
//E: 
    // Test.assertSimilar(distinct([1]), [1]);
    // Test.assertSimilar(distinct([1,2]), [1,2]);
    // Test.assertSimilar(distinct([1,1,2]), [1,2]);
//Pseudocode:
    //Per MDN: The Set object lets you store unique values of any type, whether primitive values or object references...
    //Set objects are collections of values. A value in the Set may only occur once; it is unique in the Set's collection. 

    //Create a new Set of the array and use the spread operator to capture all elements in the given array
//My solution:
function distinct(a) {
    return [...new Set(a)]
}
//Refactored using arrow function:
const distinct = a => [...new Set(a)]