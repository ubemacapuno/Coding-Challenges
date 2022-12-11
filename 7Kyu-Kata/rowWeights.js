// 7 kyu Row Weights
// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.
// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.
// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
//P: Array of positive integers, in which the array size is always 1 or greater
//R: Return array of two integers, where the first num is the size of Team 1 and the second num is the size of team 2
//E: See above examples
//Pseudocode:
    //Team one is the combination of elements in even indexes
    //Team two is the combination of elements in odd indexes
    //Find the sum of each team and return in an array in the format [Team1,Team2]
//My solution:
function rowWeights(array){
    let teamOne = 0
    let teamTwo = 0
    array.forEach((e, i) => {
        if(i%2===0){
            teamOne += e
        }else{
            teamTwo +=e
        }
    })
    return [teamOne,teamTwo]
  }
//Refactored using ternary operator:
function rowWeights(array){
    let teamOne = 0
    let teamTwo = 0
    array.forEach((e, i) => {
        i%2===0 ? teamOne += e : teamTwo += e
    })
    return [teamOne,teamTwo]
  }
//Refactored using less memory:
function rowWeights(array){
    let returnArray = [0,0]
    array.forEach((e, i) => {
        i%2===0 
            ? returnArray[0] += e 
            : returnArray[1] += e
    })
    return returnArray
  }
//Test case:
console.log(rowWeights([13,27,49]))