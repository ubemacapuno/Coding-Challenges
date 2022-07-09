// 7 kyu Check the exam
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.
// For example:
// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
//P: answer key as an array of letters, and submitted answers as an array of letters and/or space(s)
//R: score/number: +4 for correct, -1 for incorrect, 0 for blank
//E: See above
//Pseudocode:
    //Compare the 2 arrays to each other.
    //Declare a return variable of "score"
    //Make a loop to iterate through the arrays:
     //if array 2 has "" then add 0 to score
        //if index[i] if array 1 == index[i] of array 2, then +4 to the score variable
        //Otherwise subtract 1 from score
        //return score
//My solution:
function checkExam(array1, array2) {
    let returnScore = 0
    for(i=0;i<array1.length;i++){
        if(array2[i]==array1[i]){
            returnScore += 4
        }else if(array2[i]=== ""){
            returnScore += 0
        }else{
            returnScore -= 1
        }
    }
    if (returnScore > 0) {
        return returnScore;
        } else { 
        return 0;
   }
}
//Test Case
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))