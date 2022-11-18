//8 kyu Regular Ball Super Ball
//Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"
//P: ballType
//R: 'regular' or whatever the balltype is
//Example: see above
//Pseudocode:
    //we are using classes, so use this.balltype
    //If there is a balltype, then .balltype of the class should be equal to balltype
    //else, return 'regular'
//Solution
class Ball {
    constructor(ballType = "regular") {
      this.ballType = ballType;
    }
  }