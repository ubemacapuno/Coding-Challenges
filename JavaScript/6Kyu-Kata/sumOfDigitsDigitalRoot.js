// 6 kyu Sum of Digits / Digital Root - Recursion
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
//Parameters: Given non-negative integer (n)
//Return: digital root (recursive sum of all the digits in a number)
//Examples: See above
//pseudocode:
    //convert to string and split into an array, iterate through the array and take the sum
    //is sum.length greater less than 10?? then convert to string and split into an array, iterate through the array and take the sum
    //Otherwise, return sum
//My solution:
function digitalRoot(n) {
    let result = 0
    //if n is less than 10, return n since n is single digit:
    if (n<10){
        return n
    }
    //convert n to string, split into an array, and then map an array, and during the map, add the number/element from the array to "result"
    String(n).split('').map(number => {
        result += Number(number);
      });
    //Recursively call digitalRoot, but now passing in "result". If the argument ever becomes less than 10, then it will return due to the "if (n<10){return n}" condition. Otherwise argument will be mapped and added to "result", and will be recursively called again.
    return digitalRoot(result)
}
//Test Case
console.log(digitalRoot(942)) //6
console.log(digitalRoot(16)) //7