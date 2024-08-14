//7 kyu Find the next perfect square! 06/15/2022
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
// Examples:(Input --> Output)
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square
//P: non-negative integer n
//R: next perfect square from n, or -1 if n is not a perfect square
//E: see above
//Pseudocode:
    //First test if n is a perfect square; if not, then return -1
    //If n is a perfect square, then return ((sqrt of n) + 1)^2
function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 != 0){
        return -1
    }else{
        return Math.pow((Math.sqrt(sq) + 1),2)
    }
}
//Refactored - use arrow syntax:
const findNextSquare = sq => Math.sqrt(sq) % 1 != 0 ? -1 : Math.pow((Math.sqrt(sq) + 1),2)