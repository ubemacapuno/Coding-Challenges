//8 Kyu Twice as old
//P: current father's age (years), current age of his sons (years)
//R: Return how many years ago the father was twice as old as the son (or in how many years he will be twice as old). Always greater than or equal to 0, no matter if it was past or future
//E: (36,7) -> 22, (55,30)-> 5, (42,21)->0
/**
 * Pseudocode:
 *
 * Use Math.abs
 * Math.abs() returns the absolute value of a number
 */

//My solution:
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
