//05.13.2022 8Kyu Get the mean of an array
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
// function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
//   }
//sum the array and divide by the number of elements.
function getAverage(marks){
    return marks.reduce((a,c)=>a+c,0)/marks.length
  }
// console.log(getAverage([100,110]))
//Arrow function solution:
const getAverage = (marks) => Math.floor(marks.reduce((a,c)=>a+c,0)/marks.length)