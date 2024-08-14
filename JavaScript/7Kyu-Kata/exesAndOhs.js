// 7 kyu Exes and Ohs 06/04/2022
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//P:String of X and O
//R: Boolean
//E:
    // XO("ooxx") => true
    // XO("xooxx") => false
// Psuedo Code: 
    //Not case sensitive, so convert string to same case (.toLowerCase())
    //convert to an array, splitting to each character (.split(""))
    //have two separate arrays and filter for X and O: 
        // xArray.filter(filter out anything not an x)
        // xArray.filter(filter out anything not an O)
    //compare the array lengths; if equal then return true, else return false
//My solution (Passed first try!!):
function XO(str) {
    let xArray = str.toLowerCase().split("").filter(e=>e=="x")
    let oArray = str.toLowerCase().split("").filter(e=>e=="o")
    return xArray.length == oArray.length ? true : false
}
//Refactored:
function XO(str) {
    let xArray = str.toLowerCase().split("").filter(e=>e=="x")
    let oArray = str.toLowerCase().split("").filter(e=>e=="o")
    return xArray.length == oArray.length //ternary is not required to return true/false
}
// Test Case:
// console.log(XO("zzoo"))