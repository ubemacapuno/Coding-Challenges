//7 kyu Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
//Parameter: String
//Rreturn: True or False
//Example: "Dermatoglyphics" --> true
//Pseudo code:
    //If string is empty, return true
    //else, make string all the same case since case doesn't matter (.toLowerCase())
    //store each letter into an array (.split(""))
    //Sort the array! Most important step! (.sort())
    //iterate through the array (for loop) - since it is sorted, any duplicates found would fail the test:
            //sortedArr[i + 1] == sortedArr[i]
            //return false if duplicates are found
    //If the array passes the loop, the code proceeds and true is returned.

function isIsogram(str){
    if(str.isEmpty){
        return true; // .isEmpty() method checks whether string is empty or not
    }else{
        str = str.toLowerCase() // return is not case-sensitive
    }
    let sortedArr = str.split('').sort()
    for(i=0;i<sortedArr.length;i++){
        if (sortedArr[i + 1] == sortedArr[i]) {
            return false //the array is sorted, so if any duplicates are found during iteration, false is returned
        }
    }
    return true
}

// Shorter but similar solution from other Codewars user:
function isIsogram(word){
    word = word.toLowerCase().split("").sort();
    for (var i=0;i<word.length-1;i++){
        if (word[i]==word[i+1]) return false;
        }
    return true;
    }
    
//Test Cases:
// console.log(isIsogram("Dermatoglyphics"))
// console.log(isIsogram(""))