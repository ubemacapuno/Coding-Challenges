//8 kyu Fake Binary 06/02/2022
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string
//My solution:
function fakeBin(x){
    let xArray = x.split('').map(Number) //convert string to an array of numbers
    let xStringAnswer = '' //return answer will be stored in this variable
    xArray.forEach(e=>{ //use forEach + conditional to concat. '0' and '1' to xStringAnswer
        if(e < 5){
            xStringAnswer += '0'
        }else{
            xStringAnswer += '1'
        }
    })
    return xStringAnswer
}
//Refactored solution:
    //get rid of xArray
    //incorporate ternary operation
function fakeBin(x){
    let xStringAnswer = ''
    x.split('').map(Number).forEach(e=>{
       return e < 5 ? xStringAnswer += '0' : xStringAnswer += '1'
    })
    return xStringAnswer
}