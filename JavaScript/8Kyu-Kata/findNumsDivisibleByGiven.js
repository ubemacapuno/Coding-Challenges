/**
 * Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
 * First argument is an array of numbers and the second is the divisor.
 *
 * Example(Input1, Input2 --> Output)
 * [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
 *
 * Parameters: numbers (array of numbers), divisor (number)
 * Return: An array of numbers in the 'numbers' array that are divisible by the 'divisor'
 * Pseudocode: Declare a returnArray that we return at the end. Iterate through the 'numbers' array. If the number in the array is divisible, then push it to the returnArray and return it
 */

function divisibleBy(numbers, divisor) {
  let returnArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      returnArray.push(numbers[i]);
    }
  }
  return returnArray;
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

// Solution using filter. Using the filter method, filter numbers to numbers that are divisible by the divisor (number%divisor===0)

function divisibleBy(numbers, divisor) {
  return numbers.filter((number) => number % divisor === 0);
}
