// 7 kyu Two to One
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
//P: 2 strings s1 and s2
//R: Longest possible string containing distinct letters, taken only once
//E: See above
//Psuedocode:
    //split both strings and concatonate them so it's one large array of letters
    //Sort the array of letters
    //Map the array, but have a conditional that only maps elements without repeating them.
//My solution:
function longest(s1, s2) {
    let longestStr = s1 + s2
    let longestArr = longestStr.split('')
    let sortedLongestArr = longestArr.sort()
    let res = [...new Set(sortedLongestArr)]
    return res.join("")
  }
//Refactored:
function longest(s1, s2) {
    let sortedLongestArr = (s1 + s2).split('').sort()
    return ([...new Set(sortedLongestArr)]).join("")
  }
//Refactored:
function longest(s1, s2) {
    return ([...new Set((s1 + s2).split('').sort())]).join("")
  }
//Refactored:
const longest = (s1,s2) => ([...new Set((s1 + s2).split('').sort())]).join("")
//Test Case:
// console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"))