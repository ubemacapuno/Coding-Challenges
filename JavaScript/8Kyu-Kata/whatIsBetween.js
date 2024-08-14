// 8 kyu What is between? 06/20/2022
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]
//P 2 integers where a < b
//R array of all integers between a and b including a and b
//E see above 1-4
//Psuedocode:
    //create a for loop from a to b (if they're equal, don't need for loop, just return a or b). as the loop iterates, it pushes i to the array to be returned

//My solution:
function between(a, b) {
    let betweenArray = []
    if(a==b){
        return a
    }
    for(i=a;i<=b;i++){
        betweenArray.push(i)
    }
    return betweenArray
  }

//Test:
console.log(between(-2,4))