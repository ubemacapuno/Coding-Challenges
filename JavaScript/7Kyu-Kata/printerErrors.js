// 7 kyu Printer Errors 06/08/2022
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.
// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"
// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"
//P: string of letters ("control string")
//R: string fraction; numerator is num of errors, denominator is the length of the control string 
//E: "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz" -> "3/56"
//Psuedocode:
    //let denominator = s.length
    //let numerator = 0
    //create an array (named 'printerCodeErrors') that contain all the error codes (all letters after m in the alphabet)
    //iterate through the array: 
        //During each iteration (forEach), when e is equal to e in the printerCodeErrors array (includes(e)), add 1 to the numerator.
    //return numerator / denominator in a template literal
//My solution:
function printerError(s) {
    let printerCodeErrors = ['n','o','p','q','r','s','t','u','v','w','x','y','z']
    let denominator = s.length
    let numerator = 0
    s.split('').forEach(e => printerCodeErrors.includes(e) === true ? numerator += 1 : numerator += 0)
    return `${numerator}/${denominator}`
}
//Other Codewars user used the following If-statement instead of creating an array of code errors:
// if (s[i] > "m") {
//     numerator++;
//   }
//Refactored using inspiration from the above hint from other user:
function printerError(s) {
    let denominator = s.length
    let numerator = 0
    s.split('').forEach(e => e > "m" ? numerator ++ : numerator)
    return `${numerator}/${denominator}`
}
//Test Case:
// console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'))