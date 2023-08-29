/**
 * Third Angle of a Triangle 8Kyu
 * You are given two interior angles (in degrees) of a triangle.
 * Write a function to return the 3rd.
 * Note: only positive integers will be tested.
 * P: two interior angles in degrees
 * R: Return the third angle
 * E: (30,60) -> 90, (60,60)->60
 * Pseudocode:
 * ONLY POSITIVE NUMBERS are tested!
 * return 180 minus the two arguments
 *
 */
//My solution:
function otherAngle(a, b) {
  return 180 - Math.abs(a + b);
}
//Arrow function:
const otherAngle = (a, b) => 180 - Math.abs(a + b);
