// 8 kyu Correct the mistakes of the character recognition software 6/30/2022
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//P: String
//R: Return string but correcting the above mentioned characters
//E: 51NGAP0RE -> SINGAPORE
//Pseudocode:
    //Use string replace method to replace 5 with S, 0 with O and 1 with I using /regex/g
//My solution:
function correct(string){
	return string.replace(/5/g,'S').replace(/0/g,'O').replace(/1/g,'I')
}
//Arrow syntax:
const correct = string => string.replace(/5/g,'S').replace(/0/g,'O').replace(/1/g,'I')
//Test Case:
// console.log(correct("51NGAP0RE"))