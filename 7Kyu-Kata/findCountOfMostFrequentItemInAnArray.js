// 7 kyu Find Count of Most Frequent Item in an Array
// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.
//P: array of numbers
//R: return the count of the most frequent item of the array
//E: See above example:
//Pseudocode:
    //Iterate through the array
    //create a map that keeps track of the element and how many times in the array it has been seen
    //return the element that has been seen the most amount of times. In an object, this is Object.values(object)
    //Returning the highest values, use Math.max and spread operator
//My solution:
function mostFrequentItemCount(collection) {
    if(collection.length === 0){
        return 0
    }
    let hashmap={}

    //When element hasn't been seen, add that key to the object. 
    //If element has been seen, add one to the value of that element
    collection.forEach(element => hashmap[element] = (hashmap[element] || null)+1)
    let array = Object.values(hashmap)
    return(Math.max(...array))
  }
//Test case:
// console.log(mostFrequentItemCount([3, -1, -1])) //returns 2