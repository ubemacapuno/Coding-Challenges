
// 6 kyu Bit Counting
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
//P: Integer as an input
//R: The number of bits equal to one in the binary representation of that number
//E:
//Pseudocode:
//My solution:
  //Convert integer to binary string
  //Loop through the string, have a counter that increases everytime it sees "1"
  //Return the string

  var countBits = function(n) {
    //Convert integer to binary string:
    let binary = n.toString(2)
    //Loop through the string, have a counter that increases everytime it sees "1":
    let counter = 0
    for(let i=0; i<binary.length; i++){
        binary[i] == 1 ? counter++ : null
    }
    return counter
};
//Test cases:
console.log(countBits(10))