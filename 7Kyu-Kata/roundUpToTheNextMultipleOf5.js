// 7 kyu Round up to the next multiple of 5
// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?
// Examples:
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).
// You can assume that all inputs are valid integers.
//P integer as input
//R next multiple of 5 integer (higher)
//E See above examples
//Pseudocode:
    //if n % 5 == 0, return n
    //else, make a loop from n till the next integer that will make n % 5 true.
//My solution:
function roundToNext5(n){
    if(n % 5 == 0){
        return n
    }else{
        do{
            n++
        } while (n % 5 !=0)
    }
    return n
}
//Refactored - if statement not needed. Just keep the while-loop:
function roundToNext5(n){
    while (n % 5 !=0){
        n++
    }
    return n
}
//Test case:
// console.log(roundToNext5(22))