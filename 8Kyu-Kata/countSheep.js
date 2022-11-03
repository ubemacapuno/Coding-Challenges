// 8Kyu If you can't sleep, just count sheep!!
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
//P integer
//R counting sheep string with integer from 1 to num
//E see above example
//Pseudocode:
  //Make a loop iterating from to num
  //on each iteration, add to a return sring the following:
    //(num sheep...)
    var countSheep = function (num){
        let rString = ''
        for(let i=1; i<=num; i++){
            rString += `${i} sheep...`       
        }
        return rString
      }
    //Test case
    console.log(countSheep(3))