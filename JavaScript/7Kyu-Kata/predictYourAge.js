// // 7kyu Predict your age!
// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
// In honor of my grandfather's memory we will write a function using his formula!
// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.
// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
//Parameters: list of ages(nums)
//Return: return a value using the following - "multiply each number by itself, add them, take the square root, divide by two"
//Examples:
//Pseudocode:
    //create an array with all parameters (ages 1-8)
    //iterate through the array and return a new array that has each number squared to satisfy "Multiply each number by itself"
    //in the new array, add all the elements together and save this value
    //Take the square root of this value, and then divide it by two and return it
//My solution:
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let predictAgeArray = [age1, age2, age3, age4, age5, age6, age7, age8]
    let predictAgeArrayMultiplied = []
    for(i=0;i<8;i++){
        predictAgeArrayMultiplied.push(Math.pow(predictAgeArray[i],2))
    }
    return Math.floor(Math.sqrt(predictAgeArrayMultiplied.reduce((a,c)=> a + c,0))/2) //use reduce to get the sum, then use Math.sqrt to get the square root, then divide it by two, and then use Math.floor to round down
}
//Best Practices solution - uses map instead of for loop and extra array:
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let predictAgeArray = [age1, age2, age3, age4, age5, age6, age7, age8]
    return Math.floor(Math.sqrt(predictAgeArray.map(a => a * a).reduce((b,c) => b + c)) / 2)
  }
//Test Case:
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))