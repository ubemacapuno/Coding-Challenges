// 7 kyu Categorize New Member - FIRST TRY!!
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
//P: List of pairs; integer for age and integer for handicap
//R: Array stating wheter the respective member is to be placed in SENIOR or OPEN categeory
//E: See above examples
//Pseudocode:
    //iterate through the lists. If index 0 is 55 or greater AND index 1 is greater than 7, return "Senior". Otherwise return "Open"
//My solution:
function openOrSenior(data){
    let openOrSeniorArray = []
    data.forEach((e)=>{
        if(e[0]>=55 && e[1]>7){
            openOrSeniorArray.push('Senior')
        }else{
            openOrSeniorArray.push("Open")
        }
    })
    return openOrSeniorArray
  }
//My solution refactored using Ternary Operation:
function openOrSenior(data){
    let openOrSeniorArray = []
    data.forEach((e)=>{
        e[0]>=55 && e[1]>7 ? openOrSeniorArray.push('Senior') : openOrSeniorArray.push("Open")
    })
    return openOrSeniorArray
}
//Test Case:
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]))