//7 kyu Shortest Word 06/05/2022
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
//P: String of words
//R: number (length of shortest word(s))
//E: "bitcoin take over the world maybe who knows perhaps" //3
//Psuedocode: 
    //split words into an array of words (.split(' '))
    //map the array and return the length of each element (.map(e=>e.length))
    //sort the array from  smallest to largest (.sort((a,b)=>a-b)
    //return the element at index[0], which should be the smallest word length (.shift())
//My solution:
function findShort(s){
    return s.split(' ').map(e=>e.length).sort((a,b)=>a-b).shift()
}
//refactored:
const findShort = s => s.split(' ').map(e=>e.length).sort((a,b)=>a-b).shift()
//Similar solution from other Codewars user; Math.min(...s) was used instead of .sort() and .shift():
const findShort = s => Math.min(...s.split(" ").map(a => a.length))
// Test case:
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))