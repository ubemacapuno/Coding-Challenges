//8Kyu Abbreviate a Two Word Name
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F
// My Solution:
function abbrevName(name){
  let firstName = name.split(" ").shift()
  let secondName = name.split(" ").pop()
  console.log(`${firstName.toUpperCase().charAt(0)}.${secondName.toUpperCase().charAt(0)}`)
}
// Test Cases:
// abbrevName('Sam Harris')
// abbrevName('patrick feeney')
// Codewars Arrow Function solution:
const abbrevName = (name) => name.split(' ').map(i => i.charAt(0).toUpperCase()).join('.');