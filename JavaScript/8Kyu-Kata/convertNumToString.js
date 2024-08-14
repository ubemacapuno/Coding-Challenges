// 8 kyu Convert a Number to a String!
// Instructions: We need a function that can transform a number into a string. What ways of achieving this do you know?
//My Solution:
function numberToString(num) {
    return num.toString();
  }
// Other Solutions:
const numberToString = num => num.toString();

numberToString = String;

function numberToString(num) {
  return String(num);
}