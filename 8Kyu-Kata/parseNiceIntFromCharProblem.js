// 8Kyu Parse nice int from char problem 
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
// Parameters: String
// Return: Return the first character of the string as a number
// Example: "1 year old"  returns 1 with a type of number
// Pseudocode: Return the first index aka [0] of the string, but convert it to a number:
// My solution:
function getAge(inputString){
    return inputString[0]*1
    }
//Refactored:
const getAge = inputString => inputString[0]*1