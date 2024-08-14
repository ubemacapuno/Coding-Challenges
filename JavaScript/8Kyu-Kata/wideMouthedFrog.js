// 8 kyu The Wide-Mouthed frog!
// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide
//P: animal as a string
//R: Return small if the argument is 'alligator' in ANY case (lower, upper, doesn't matter), otherwise return wide.
//E: alligator returns small, toucan returns wide
//Pseudocode:
    //Use conditional statement to return small if the argument is alligator, otherwise return wide
//My solution:
const mouthSize = animal => animal.toLowerCase() === 'alligator' ? 'small' : 'wide'