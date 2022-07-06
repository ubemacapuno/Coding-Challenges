// 6 kyu Mexican Wave
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
// 1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example - wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
//P: lowercase string
//R: Array of the string in which the elements are the string doing the Mexican wave
//E: wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
//Pseudocode:
    //declare a variable for the return array that will be added to for each loop
        //for loop will go from 0 to str.length, and each time the loop finishes, push the string with the appropriate letter being capitalized
        //The letter to be capitalized will be str[i] -> str[i].toUpperCase()
        //concatonate the appropriate letters before and after str[i] when applicable:
            //str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1)
//My solution:
function wave(str){
    let returnArray = []
    for(i=0;i<str.length;i++){
        if (str[i] === " "){
            continue
        }else{
            returnArray.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
        }
    }
    return returnArray
}
//Test case:
console.log(wave("hello"))