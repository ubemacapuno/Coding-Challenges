
// 7 kyu Remove the minimum
// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.
// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]
//P: array of ints
//R: array of ints with smallest value removed
//E: see above
//Psuedocode:
    //map new array and sort the new array from smallest to largest
    //shift() the new array, and hold this value in a variable "lowestInt"
    //input lowest int variable into numbers.indexOf'; hold in a new variable "lowestIntIndex"
    //use numbers.splice(lowestIntIndex,1) to remove the lowestInt, but use a copy of numbers ("numbers2") so that the original array isn't mutated.
    //return numbers2
//My solution - (sort() to find lowest number):
function removeSmallest(numbers) {
    let numbers2 = numbers.map(e=>e)
    let sortedNumbers = numbers.map(e=>e).sort((a,b)=>(a-b))
    let lowestInt = sortedNumbers.shift()
    let lowestIntIndex = numbers.indexOf(lowestInt)
    console.log(sortedNumbers)
    console.log(lowestInt)
    console.log(lowestIntIndex)
    console.log(numbers)
    numbers2.splice(lowestIntIndex,1)
    return numbers2
  }

//Other solution from other user:
//Instead of using sort, you can use Math.min() and also indexOf() to capture the smallest number:
function removeSmallest(numbers) {
    let lowest = numbers.indexOf( Math.min(...numbers) )
    return numbers.slice( 0, lowest ).concat( numbers.slice( lowest + 1 ) )
  }

//Test:
// console.log(removeSmallest([2,2,1,2,1]))