// function checkAlive (health) {
//   if (health <= 0) {
//     return false
//   } else {
//     return true
//   }
// }

// P Health - whole number between -10 and 10
// R true if player's health is greater than 0, or false if it is 0 or below
// E 5 -> true, 0 -> false
// Pseudo: Change argument of the if statement to check if health is less than or equal to 0

// Arrow Syntax solution:
const checkAlive = (health) => health > 0;
