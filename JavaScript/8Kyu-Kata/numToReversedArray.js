// 8 kyu Convert number to reversed array of digits 06/08/2022
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):
// 348597 => [1,3,2,5,3]
// 0 => [0]
//P: Randon non-negative number
//R: Digits of this number within an array in REVERSE order
//E: 35231 => [7,9,5,8,4,3]
//Psuedocode:
    //Convert number into an array of strings n.split('')
    //reverse it .reverse()
    //map the array to convert each string element into number elements .map(e=>e*1)
//My solution:
function digitize(n) {
    return n.toString().split("").reverse().map(e=>e*1)
}
//Refactored - Arrow syntax
const digitize = n => n.toString().split("").reverse().map(e=>e*1) 
//.map(e=>e*1) can be refactored to .map(Number)
const digitize = n => n.toString().split("").reverse().map(Number)
// n.toString() can also be written as String(n)
const digitize = n => String(n).split("").reverse().map(Number)
//Test Case:
// console.log(digitize(348597))