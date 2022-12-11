// 7 kyu Switcheroo
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
// Example:
// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'
//P: string of letters using a, b, and/or c
//R: Return string but with a and b reversed
//E: See above examples
//Pseudocode:
    //Declare a variable string that will be returned at the end
    //Use a loop and conditional:
        // If element is a, then add b to the return string
        // If element is b, then add a to the return string
//My solution:
function switcheroo(x){
    let returnString = ""
    for(let i=0; i<x.length; i++){
        if(x[i]==="a"){
            returnString += "b"
        }else if(x[i]==="b"){
            returnString += "a"            
        }else{
            returnString += x[i]
        }
    }
    return returnString
}
//Test Case:
console.log(switcheroo('aaabcccbaaa'))