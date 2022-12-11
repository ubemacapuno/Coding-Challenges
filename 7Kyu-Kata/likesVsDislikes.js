// 7 kyu Likes Vs Dislikes
// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.
// Task
// Create a function that takes in a list of button inputs and returns the final state.
// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.
//P: list of button inputs
//R: Return the final state . . . however if the state of the second to last state is the same as the last state, return "Nothing"
//E: See above examples
//Pseudocode:
    //If the array length is 2 or more and last element of the array is the same as the second to last element of the array:
            //Return "Nothing"
    //Otherwise:
            //Return the last element.
//My solution:
const likeOrDislike = buttons => buttons.reduce((acc,c) => c == acc ? Nothing : c,Nothing)