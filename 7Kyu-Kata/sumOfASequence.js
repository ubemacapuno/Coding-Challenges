// 7 kyu Sum of a sequence
// Your task is to make function, which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).
// If begin value is greater than the end, function should returns 0
// Examples
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
//P: given begin, end, and step
//R: sum of a sequence of integers. If begin is greater than end, return 0
//E: See above
//Pseudocode:
    //Begin at begin value, increment by the step value up until you reach the end
    //Declare a variable that we will add to on each iteration of a loop and return it, named "sum"
    //Iterate from begin all the way up to less than or equal to end. Increment by step
        //for each iteration, add "i" to the sum
    //return sum at the end.
//Solution:
const sequenceSum = (begin, end, step) => {
    let sum = 0
    if(begin > end){
        return 0
    }
    for(let i=begin; i<=end; i += step){
        sum += i
        console.log(sum)
    }
    return sum
  }; 
//Test case 
console.log(sequenceSum(2,2,2))