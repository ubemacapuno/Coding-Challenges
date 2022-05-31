// 8 kyu Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// My Answer:
function greet(name){
  return (`Hello, ${name} how are you doing today?`)
}
// Solved with Arrow Syntax:
const greet = name => `Hello, ${name} how are you doing today?`;