// 7 kyu Sum of odd numbers
// Given the triangle of consecutive odd numbers:
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
// 1 -->  1
// 2 --> 3 + 5 = 8
//Parameter: given triangle of consecutive odd numbers and nth row
//R: the sum of the numbers in the nth row of the triangle
//E: Row 42 returns 74088
//Pseudocode:
    //Find out which numbers will be in row n
        //???
    //Return the sum of all numbers in that row
        //Use reduce array method to get sum
        //Or iterate and sum each element
    //ALTERNATIVE Pseudocode: Each row summed is equal to the index cubed! For example, row 1 is 1 cubed -> 1, row 2 is 2 cubed -> 8, row 3 is 3 cubed -> 27
//Solution:
function rowSumOddNumbers(n) {
    return n**3
}
//Arrow syntax: 
const rowSumOddNumbers = n => n**3