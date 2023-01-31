// 8 kyu A Strange Trip to the Market
// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty". Your function should return true if you're talking with The Loch Ness Moster, false otherwise.
//P: string
//R: true or false IF string contains the following:
//tree fiddy
//3.50
//three fifty
//E: "Your girlscout cookies are ready to ship. Your total comes to tree fiddy" returns true
//Psuedocode:
//place strings inside of an array, and use some() and includes() methods to check if the string has those substrings in the array
// solution:
function isLockNessMonster(s) {
  const tree = ["tree fiddy", "3.50", "three fifty"];
  console.log(tree.some((e) => s.includes(e)));
}
//Test case:
console.log(isLockNessMonster("tree fiddy"));

// some(): tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
// includes(): determines whether an array includes a certain value among its entries, returning true or false as appropriate.
