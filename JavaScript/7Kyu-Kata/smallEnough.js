// 7 kyu Small enough? - Beginner
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.
//P: array and limit
//R: true if all values in array are below or equal to the limit, else return false
//E:    //[66, 101], 200 -> true
        //[78, 117, 110, 99, 104, 117, 107, 115], 100 -> false
//Pseudocode:
        //iterate through the array and compare to limit
        //return false if false
//My solution:
function smallEnough(a, limit){
    let foundFalse = 0
    let lengthOfA = a.length
    for(let i=0; i<lengthOfA; i++){
        if(a[i] <= limit){
            foundFalse += 0
        }else{
            foundFalse += 1
            break
        }    
    }
    return foundFalse > 0 ? false : true
}
//Refactored - Change if statement around; counter not needed:
function smallEnough(a, limit){
    let lengthOfA = a.length
    for(let i=0; i<lengthOfA; i++){
        if(a[i] > limit){
            return false
        }
    }
    return true
}
//Better solution using (...a):
function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }
//Test:
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))