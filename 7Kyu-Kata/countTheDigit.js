//7 kyu Count the Digit
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
// Square all numbers k (0 <= k <= n) between 0 and n.
// Count the numbers of digits d used in the writing of all the k**2.
// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.
//P: Take integer n and digit d
//R: The count of the number of digits "d" used in the writing of all the k**2
//E: 
  //Given n = 10, d = 1 
  //k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
  //digit 1 in: 1, 16, 81, 100. The total count is then 4.
//Pseudocode:
  //Declare an array that we will push to
  //Declare a count that we will potentially add to
  //Square all the numbers between 0 and n, and push them into an array
  //Join the numbers into one long number, and iterate through it. For each value equals "d", increase a count by 1.
  //Return that count.

  //My solution:
  function nbDig(n, d) {
    //Declare an array that we will push to
    let array = []

    //Declare a count that we will potentially add to
    let count = 0

    //Square all the numbers between 0 and n, and push them into an array
    for(let i=0; i<=n; i++){
        array.push(Math.pow(i,2))
    }

    //Join the numbers into one long number, and iterate through it. For each value equals "d", increase a count by 1.
    let longNumber = array.join('')
    for(let i=0; i<=longNumber.length; i++){
        longNumber[i] == d ? count++ : null
    }
    //Return that count.
    return count
}
//Test case:
console.log(nbDig(11549, 1))
  