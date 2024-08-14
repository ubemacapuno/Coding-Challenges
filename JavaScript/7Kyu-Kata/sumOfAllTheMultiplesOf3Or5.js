// 7 kyu Sum of all the multiples of 3 or 5
// Your task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
// For example:
// findSum(5) should return 8 (3 + 5)
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
//P: integer n
//R: the sum of all multiples of 3 and 5
//E: see above example:
//Pseudocode:
    //First find the multiples of 3 and five between 0 and N (assuming N cannot be negative)
    //use a for loop going from  0 to n
    //when iterating, if (i) % 3 == 0 or i % 5 == 0, push it to a sum array.
    //after the loop, return the sum of the sum array using .reduce((acc,c)=>acc + c, 0)
//My solution (using an array)
function findSum(n) {
    let sumArray = []
    for (i=0; i<=n; i++){
        if (i % 3 == 0 || i % 5 == 0){
            sumArray.push(i)
        }
    }return sumArray.reduce((acc,c)=>acc + c, 0)
}

//Refactored - Array is not needed, just use an integer and add to it:
function findSum(n) {
    let sum = 0
    for (i=0; i<=n; i++){
        if (i % 3 == 0 || i % 5 == 0){
            sum += i
        }
    } return sum
}
//Test case:
// console.log(findSum(10))