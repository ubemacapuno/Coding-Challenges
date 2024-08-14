/** 
 * In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:
years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them
Examples can be found in the test fixture.
*/

// P year (number)
// R Boolean
// E 2000 returns true, 2021 returns false
// Pseudocode:
// If the year is divisible by 100, it returns true only if it is also divisible by 400.
// Otherwise, it returns false.
// For all other years not divisible by 100, it returns true only if they are divisible by 4.

// function isLeapYear(year) {
//   if (year % 100 === 0) {
//     return year % 400 === 0;
//   } else {
//     return year % 4 === 0;
//   }
// }

// Less-readable one-liner for fun:
const isLeapYear = (year) =>
  year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
