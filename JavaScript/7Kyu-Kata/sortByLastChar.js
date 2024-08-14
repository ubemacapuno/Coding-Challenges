// 7 kyu Sort by Last Char
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
// All inputs will be valid.
//P: string of words x
//R: array of words, sorted alphabetically by the final char in each
//Examples:
// describe("Sort by Last Char", () => {
//     it("Testing for fixed tests", () => {
//       assert.deepEqual(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
//       assert.deepEqual(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
//       assert.deepEqual(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);    
//     })
//   });
//Pseudocode:
    //Split by word (" ")
    //sort by UTF-16 code using .charCodeAt
    function last(x){
        return x.split(' ').sort((a,b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1))
    }
    //Solution:
    console.log(last('what time are we climbing up the volcano'))