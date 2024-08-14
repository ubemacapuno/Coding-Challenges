// 5 kyu Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
//P: String of words
//R: String with words converted
//E: pigIt('Hello world !');     // elloHay orldway !
//Pseudocode:
    //split string into array by words: str.split(' ')
    //map through the array: e => e.substring(1) + word[0] + 'ay'
    //return the joined array
//My solution:
function pigIt(str){
    let wordsOfStr = str.split(' ') //splits the string into an array of each word
    let translatedWords = wordsOfStr.map(word => {
        let alphabetLetters = /[a-zA-Z]/;
        return word.match(alphabetLetters) ? word.substring(1) + word[0] + 'ay' : word; 
        //during the mapping, if the "word" matches the letters in the alphabetLetters array(regex),
        //then it returns the word at substring(1) + index0 of word + "ay", otherwise returns the "word"
    })
    return translatedWords.join(' ')
}
//Test case:
// console.log(pigIt("pig latin"))

//Lessons Learned:
//string.match() retrieves the result of matching a string against a regex
//MDN Example of .match()
// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);
// console.log(found);
// expected output: Array ["T", "I"]