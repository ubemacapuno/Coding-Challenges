// P two strings
// R one string
// E "4",  "5" --> "9"
// If either input is an empty string, consider it as zero.
// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
// Pseudocode:
// if a or b are strings, set them as 0. Add them, but return as a string.

// function sumStr(a, b) {
//   if (a === "") {
//     a = "0";
//   } else if (b === "") {
//     b = "0";
//   }
//   return String(Number(a) + Number(b));
// }

//Refactor to one-liner:

const sumStr = (a, b) => String(Number(a) + Number(b));
