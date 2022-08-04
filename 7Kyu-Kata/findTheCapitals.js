
// 7 kyu Find the capitals
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
//P: String
//R: ordered list with indexes of all capital letters in the given string
//E: ('CodEWaRs') -> [0,3,4,6] ;
//Pseudocode:
        //declare a string that is an array of letters of the word argument (call it wordArray, use split('') method)
        //Declare an empty array that we will return at the end
        //Loop through the string and if the wordArray[i] === upperCaseString[i], push the INDEX to the return array (use forEach with the element and index parameters so we can grab INDEX)
        //return the returnArray
    var capitals = function (word) {
        let wordArray = word.split('')
        let UpperCaseWordArray = word.toUpperCase().split('')
        let returnArray = []
        // for(let i= 0; i < word.length; i++){
        //     if (word[i] === UpperCaseWord[i]){
        //         returnArray.push(word[i])
        //     }
        // }
        // console.log(returnArray)
        wordArray.forEach((e,i)=>{
            if(e === UpperCaseWordArray[i]){
                returnArray.push(i)
            }
        })
        // console.log(wordArray)
        // console.log(UpperCaseWordArray)
        return returnArray
    };
    console.log(capitals("Hello WOrld"))
// //Cleaned up:
var capitals = function (word) {
    let wordArray = word.split('')
    let UpperCaseWordArray = word.toUpperCase().split('')
    let returnArray = []
    wordArray.forEach((e,i)=>{
        if(e === UpperCaseWordArray[i]){
            returnArray.push(i)
        }
    })
    return returnArray
};

//Using the for-loop method that was commented out instead of forEach:
var capitals = function (word) {
    let returnArray = []
    let UpperCaseWord = word.toUpperCase()
    for(let i= 0; i < word.length; i++){
        if (word[i] === UpperCaseWord[i]){
            returnArray.push(i)
        }
    }
    return returnArray
};
//Test Case - Note: does not work if numbers are present in the string!:
console.log(capitals("Hello WOrld123123123123"))