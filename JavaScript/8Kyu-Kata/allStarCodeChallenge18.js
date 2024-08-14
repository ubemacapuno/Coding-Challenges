// 8 kyu All Star Code Challenge #18
// This Kata is intended as a small challenge for my students
// All Star Code Challenge #18
// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
// The first argument can be an empty string
// The second string argument will always be of length 1
//P: two strings - first string may be empty and second string will always be length 1
//R: number - count of occur
//E: ("Hello", "l")  ==>  2 (See above examples)
//Pseudocode:
    //set a variable for count; we will return this variable at the end
    //split string into an array of letters (if letters are available)
    //We will iterate through the length of the first string
    //Through every iteration, if letter === letter in the string, add to count.
    //Return the count variable at the end of the iteration
//my solution:
function strCount(str, letter){  
    let count = 0
    let strArray = str.split('')
    let strArrayLength = strArray.length
    for(i=0;i<strArrayLength;i++){
        if(strArray[i] === letter){
            count++
        }
    }
    return count
}
//Refactored - This way has one less line of code HOWEVER, it adds time complexity while saving on memory since ".length" has to be calculated on each iteration.
function strCount(str, letter){  
    let count = 0
    let strArray = str.split('')
    for(i=0;i<str.length;i++){
        if(strArray[i] === letter){
            count++
        }
    }
    return count
}
//Test Cases:
// console.log(strCount("", "z"))
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0