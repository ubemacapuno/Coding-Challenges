// 6 kyu Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
//P: String
//R: String but with "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
//E: See above examples
//P:
    //convert string to array of strings
    //loop through the array, each time checking if that element is already present in the string or not.
    //Add "(" or ")" to the return string as applicable
    //use a hashmap to store if letter is duplicate or not
//My solution:
function duplicateEncode(word){
    let returnString = ""
    let map = {} //use a hashmap here to store if letter is duplicate or not
    for (i=0;i<word.length;i++){
        let letter = word[i].toLowerCase(); //convert to same case
        //use the "in" operator, which returns true if the specified property is "IN" the specified object (ex: 'map') or its prototype chain.
        if(letter in map){
            map[letter] = true;
        }else{
            map[letter] = false
        }
    }
    for (i=0;i<word.length;i++){
        let letter = word[i].toLowerCase()
        if(isDuplicate[letter]){
            returnString += ')'
        }else{
            returnString += '('
        }
    }
    return returnString
}
//Refactored
function duplicateEncode(word){
    word = word.toLowerCase()
    let returnString = ""
    let hashMap = {} //use a hashmap here to store if letter is duplicate or not
    for (i=0;i<word.length;i++){
        hashMap[word[i]] = hashMap[word[i]] ? ')' : '(';
        //Assignment operator hashMap[word[i]] = hashMap[word[i]]. truth -> ')', falsey -> '('
    }
    for (i=0;i<word.length;i++){
        returnString += hashMap[word[i]]
        //adds the value of hashMap[word[i]] to the return string
    }
    return returnString
}
//Test case:
console.log(duplicateEncode("recede"))