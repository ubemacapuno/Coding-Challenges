// 6 kyu Two Sum
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
// Based on: http://oj.leetcode.com/problems/two-sum/
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
//P: Array of Numbers
//R: Array containing two different nums in the array that add together to equal the target value (aka "complement pair")
//E: See above
//Pseudocode:
//          Loop through the array; as we are iterating, compare the complement pairs to see if they add up to target.
//          Use a hashmap to record pairs we have already seen, so that we're not going over the same pairs
//My solution:
function twoSum(numbers, target) {
    // Use a hashmap to record pairs we have already seen:
    let hashMap = {}
    for(i=0; i<numbers.length; i++){
        let value = numbers[i]
        let complementPair = target - value
        if(hashMap[complementPair] !== undefined){
            //If the map DOES contain the complement pair, we want to return the array:
            return [hashMap[complementPair], i] //return hashMap [complement pair], index i
        }else{
            //If the map does NOT contain the complement pair, we'll record it in the hashmap to record we've seen it:
            hashMap[value] = i
        }
    }
  }
//Test case:
// console.log(twoSum([1, 2, 3], 4)) //[0, 2] or [2, 0]