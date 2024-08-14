//7 kyu Greet Me
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
// Example:
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"
//P: string (name)
//R: Greeting "Hello Name!"
//E: See examples above
//Pseudocode:
    //convert the string to lower case, but take off the first letter and set to uppercase
    //use template literal and concatonate everything together, returning the greeting.
//My solution:
function greet(name) {
    let caseSensitive = name.toLowerCase().slice(1,name.length+1)
    let capitalizedFirstLetter = name.slice(0,1).toUpperCase()
    return `Hello ${capitalizedFirstLetter+caseSensitive}!`
};
//Test Case:
// console.log(greet("riley"))