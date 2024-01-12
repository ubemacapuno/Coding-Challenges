/**
 * Unfinished Loop - Bug Fixing #1
 * Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
 */

function createArray(number) {
  var newArray = [];

  // The incrementer ('counter++') was missing, so 'counter' was perpetually 1, leading to an infinite loop:
  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}
