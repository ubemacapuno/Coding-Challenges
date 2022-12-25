//8 kyu No zeros for heros
// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway
//P: Given integer
//R: Return integer without any trailing zeros
//E: See above examples
//Pseudocode:
    //If n is zero, return 0
    //Guard clause thing: If n % 10 !== 0, return n
    //Some recursion here, keep dividing by 10 until the currcnt number % 10 isn't zero anymore. at that point, return the number:
    //If n mod 10 is zero, set current to current / 10 and recursively call noBoringZeros(current)
    //That way, whenever we finally divide it by 10 and it's no longer divisible by 10, it will be returned due to the "if (n % 10 !== 0){ return current}" clause
//My solution:
function noBoringZeros(n) {
    if(n===0){
        return 0
    }
    let current = n
    if(n % 10 !== 0){
        return current
    }else{
        current = current / 10
        return noBoringZeros(current)
    }
  }
//Test case:
console.log(noBoringZeros(0))
