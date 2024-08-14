//8 kyu Beginner Series #2 Clock 5.19.2022 (First try!!)
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:
// h = 0
// m = 1
// s = 1
// result = 61000
// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
//My Solution:
function past(h, m, s){
    let hours = (0 + h) * 3.6e+6;
    let minutes = (0 + m) * 60000;
    let seconds = (0 + s) * 1000;
    return hours + minutes + seconds
  }
//Test Case:
// console.log(past(0,1,1))
//Better solution:
function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }