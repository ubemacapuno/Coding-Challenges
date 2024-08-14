//7 kyu Two Oldest Ages
// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].
// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
// For example (Input --> Output):
// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]
//P: Array of Nums
//R: Return the two highest numbers in format [second oldest age,  oldest age].
//E: See above examples
//Pseudocode:
    //use array.sort method to sort from least to greatest
    //return index at sorted array.length and sorted array.length-1 (two highest numbers) in the requested format
//My solution:
function twoOldestAges(ages){
    let sortedAges = ages.sort((a,b)=>a-b)
    return [sortedAges[ages.length-2], sortedAges[ages.length-1]]
}
//Best Practice method using slice:
const twoOldestAges = ages => ages.sort((a,b)=>a-b).slice(-2)
//Test  Case:
console.log(twoOldestAges([1, 2, 10, 8]))