/**
P: array of integers and/or floats
R: return the sum of the even values of the sequence
E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] returns 30
Pseudocode:
  push even numbers into a new array
  use reduce method (using an accumulator) to sum the numbers in the new array
*/

function sumEvenNumbers(input) {
  let evenIntegerArray = [];
  for (let i = 0; i < input.length; i++) {
    if (Number.isInteger(input[i]) && input[i] % 2 === 0) {
      // Check if the element is an integer and even using isInteger and modulus
      evenIntegerArray.push(input[i]);
    }
  }
  return evenIntegerArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  ); //use Reduce to sum the evenIntegerArray
}
