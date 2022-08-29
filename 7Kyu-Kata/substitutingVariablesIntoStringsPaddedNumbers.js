// 7 kyu Substituting Variables Into Strings: Padded Numbers
// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.
// Example:
// solution(5) // should return "Value is 00005"
//P: number
//R: Padded number (5 digits)
//E: See above example
//Pseudocode:
        //Make a conditional for each digit. Use length:
                //1 digit? pad 4 zeros in front
                //2 digit? pad 3 zeros in front
                //3 digit? pad 2 zeros in front
                //4 digit? pad 1 zero in front
                //5 or more digit? pad 0 digit in front
//My solution:
function solution(value){
    if(value.toString().length === 1){
        return `Value is 0000${value}`
    }else if(value.toString().length === 2){
        return `Value is 000${value}`
    }else if(value.toString().length === 3){
        return `Value is 00${value}`
    }else if(value.toString().length === 4){
        return `Value is 0${value}`
    }else if(value.toString().length >= 5){
        return `Value is ${value}`
    }
}
//Best Practice solution:
function solution(value){
    return "Value is " + ("00000" + value).slice(-5); //only 5 digits will be sliced into the string literal.
} 
//Test Case:
console.log(solution(5)) //00005