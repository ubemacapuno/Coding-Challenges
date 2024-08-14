//6Kyu Array.diff 06/21/2022
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
//P: two arrays of any length a,b
//R: array removing any shared value in arrays a and b
//E: see above
//Psuedocode:
    //The return array is a filtered array a
    //The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    //combine !arrayFilter.includes() with the filter method, and the new array will filter out elements included in the arrayFilter array.
    //filtering: a.filter(e => !b.includes(e))
//My solution:
function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e))  
}
//Refactored:
const arrayDiff = (a,b) => a.filter(e => !b.includes(e))  
//Test Case
// console.log(arrayDiff([1,2,2,2,3],[2]))