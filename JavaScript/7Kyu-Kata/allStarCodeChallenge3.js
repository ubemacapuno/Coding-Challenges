// 7 kyu All Star Code Challenge #3
// Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").
//P: string
//R: String but filter out the vowels
//E: drake -> drk, aeiou -> ""
//Pseudocode:
    //Create a loop that iterates through the str length
    //declare a return string
    //if charAt(i) is not a vowel, strRemovedVowels+charAt(i)
    // return the string
    var removeVowels = function(str){
        let strRemovedVowels = ""
        for(i=0;i<str.length;i++){
            if(str.charAt(i) != "a" && str.charAt(i) != "e" && str.charAt(i) != "i" && str.charAt(i) != "o" && str.charAt(i) != "u"){
                strRemovedVowels += str.charAt(i)
            }    
        }
        return strRemovedVowels
    }
    //Test Case:
    console.log(removeVowels("drake"))