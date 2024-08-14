// 8 kyu Multiplication table for number
// Your goal is to return multiplication table for number that is always an integer from 1 to 10.
//p integer 1-10
//r multiplicTION TABLE
//e 
// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50

//pseudocode:
//use loop going from 1 to 10 to create the 1 through 10 table
//declare a return string
//for each iteration, keep adding a part of the multiplication table to the string and return it.
  //Use a template literal for each iteration
//My solution:
function multiTable(number) {
    let returnString = ""
    for (let i=0; i<10; i++){
        returnString += `${i+1} * ${number} = ${(i+1) * number}\n`
    }
    return returnString.slice(0, -1)
  }
//Test case
  console.log(multiTable(5))