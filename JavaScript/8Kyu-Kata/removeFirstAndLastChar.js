//8 kyu Remove First and Last Character
// Create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str){
    if (str.length < 2){
        return str;
    }else{
    return str.slice(1,str.length-1)
    }
}