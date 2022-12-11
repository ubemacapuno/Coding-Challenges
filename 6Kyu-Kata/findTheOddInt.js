// 6 kyu Find the odd int 06/06/2022
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
//P: array of integers
//R: integer that appears odd # of times
//E: [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
//Psuedocode:
    //sort the array
    //come up with algo to iterate through the array and return the element when element is found odd # of times!
        //solution: Use reduce; as it iterates, subtract the accumulator from the current value.
        // If an integer is there an even amount of times, it will return 0 since it is evenly balancing itself to 0. 
        // If an element is there an ODD amount of times, the reduce function will return the difference of the current value and the accumulator (0). That way at the end, since only ONE integer appears an odd # of times per the problem,
        //the reduce function returns that integer (current value will also be the same as the element)!
        function findOdd(A) {
            console.log(A.sort((a, b) => a - b))
            return A.sort((a, b) => a - b).reduce((a, b) => b - a, 0)
            }
        //Explained in other words:
        //Typically we use reduce method to get the sum of an iteration. .reduce((a, b) => a - b, 0) 
        // But this way, we're using reduce as a way to balance out to 0; .reduce((a, b) => b - a, 0)
        // Whatever value is left is the value that couldn't balance itself out to 0 due to being in the array an odd # of times!
        // Arrow syntax solution:
        const findOdd = A => A.sort((a, b) => a - b).reduce((a, b) => b - a, 0)
        //Test Case:
        // console.log(findOdd([0,1,0,1,0,2,2,5,5]))