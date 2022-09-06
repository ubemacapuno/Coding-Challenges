// 8 kyu Welcome to the City
// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
// Example:
// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
//P array with names (strings), city (string), state(string)
//R String in format of example above
//Example: see above
//Pseudocode: use join array method to get the strings in the array as strings sep. by a space. Use template literal to return in proper format
function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
//Arrow:
const sayHello = ( name, city, state ) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`

//test case:
console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))