// 7 kyu Divide and Conquer
// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
// Return as a number.
//P: array of strings and integers
//R: Sum of the strings/integers as a number
//E:[9, 3, '7', '3'] returns 2
//create variable for strings
//create variable for integers
//Filter out integers from strings in x
//convert variable for strings to nums and add to integers
function divCon(x){
    let xString = x.filter(function (x) {
        return typeof x === 'string' 
      })
    let xNum = x.filter(function (x) {
    return typeof x === 'number' 
    })
    let xStringToNum = xString.map(x=>x*-1)
    let concatStringAndNum = xStringToNum.concat(xNum)
    return concatStringAndNum.reduce((a,c)=>a+c, 0)
  }

//Test case:
console.log(divCon([9, 3, '7', '3']))