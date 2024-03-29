// 8 Kyu
// How many lightsabers do you own?
// Inspired by the development team at Vooza, write the function that
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
// Note: your function should have a default parameter.
// For example(Input --> Output):
// "anyone else" --> 0
// "Zach" --> 18
//P: Name of programmer
//R: # of lightsabers owned by programmer
//E: Zach -> 18
//Pseudocode:
    //Have a conditional that returns 0 UNLESS the argument is zach. then return 18.
//My solution:
const howManyLightsabersDoYouOwn = name => name === "Zach" ? 18 : 0