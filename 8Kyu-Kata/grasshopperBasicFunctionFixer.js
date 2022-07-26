// 8 kyu Grasshopper - Basic Function Fixer
// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
// Can you help me fix the function?
//P: function addFive
//R: function but fixed
//E: function should return num + 5
//Pseudocode: total has the correct operation, but is never returned. Return statement should be total, not num.
//My solution
function addFive(num) {
  var total = num + 5
  return total
}
//Refactored to arrow syntax:
const addFive = num => num + 5