// 7 kyu Spacify
// Modify the spacify function so that it returns the given string with spaces inserted between each character.
// spacify("hello world") // returns "h e l l o   w o r l d"
//P: string
//R: same string, but with spaces inserted between each character
//E: (spacify('hello world'),'h e l l o   w o r l d')
//Pseudocode:
    //Use a for loop and iterate through the string
    //through each iteration, add " " after each character and return the string
//My Solution:
function spacify(str) {
    let strArray = []
    for (let i=0; i<str.length-1; i++){
        strArray.push(`${str[i]} `)
    }
    return strArray.join('') + str[str.length-1]
}
//Solution using Reduce - suggestion by Eric
function spacify(str) {
    let reducedStr = [...str].reduce((accumulator,currentValue) => accumulator + `${currentValue} `,"")
    return reducedStr.slice(0,-1)
}
//Test Case:
console.log(spacify("Hello World"))