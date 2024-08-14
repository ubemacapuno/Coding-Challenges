// 7 kyu Fix string case
// You will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
//P: given string mixed with uppercase and lowercase
//R: return the string either converted to all upper or lowercase. Upper if letters in the given string are mostly uppercase, otherwise return all in lowercase
//E: (see above)
//Pseudocode:
    //Have a variable that tracks the number lowercase letters. If lowercase letters is equal to or greater than s.length, then return lowercase. otherwise return uppercase
    //use loop to iterate through s to compare if lower or uppercase
//My solution:
// function solve(s){
//     let lowerCaseCounter = 0
//     let sLengthDividedByTwo = s.length / 2
//     let sToLowerCase = s.toLowerCase()
//     for(i=0;i<s.length;i++){
//         if(sToLowerCase[i] === s[i]){
//             lowerCaseCounter++
//         }
//     }
//     if (lowerCaseCounter >= sLengthDividedByTwo ){
//         console.log(`True: lowerCaseCounter is ${lowerCaseCounter}, sLengthDividedByTwo is ${sLengthDividedByTwo}`)
//         return sToLowerCase
//     }else{
//         console.log(`False: lowerCaseCounter is ${lowerCaseCounter} sLengthDividedByTwo is ${sLengthDividedByTwo}`)
//         return s.toUpperCase()
//     }
// }
//Refactored
function solve(s){
    let lowerCaseCounter = 0
    let sToLowerCase = s.toLowerCase()
    for(i=0;i<s.length;i++){
        if(sToLowerCase[i] === s[i]){
            lowerCaseCounter++
        }
    }
    return lowerCaseCounter >= s.length / 2 ? sToLowerCase : s.toUpperCase()
}
//Test Case:
console.log(solve("Code"))