/**
 * P: Complete the given function
 * R: string that spells the word using the nato alphabet
 * E:
 * "Banana"  -->  "Bravo Alpha November Alpha November Alpha"
 * Pseudo:
 * Split the word into letters and capitalize the letters
 * Grab the value from "letters"
 * return it, add a space between each word
 */
var nato = (function () {
  var letters = {
    A: "Alpha",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliett",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "X-ray",
    Y: "Yankee",
    Z: "Zulu",
  };

  return function (word) {
    let split = word.split("");
    console.log(split);
  };
})();
