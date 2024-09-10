/*
According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

  P: Parameters: none
  R: Return
       - Human[]: An array of length 2 containing Human objects.
         The first object is an instance of Man, the second is an instance of Woman.
  E: Example
      God.Create() => [Man { }, Woman { }]
  P: Pseudocode
    1. Create an empty array of Human objects with length 2
    2. Set the first element of the array to a new instance of Man
    3. Set the second element of the array to a new instance of Woman
    4. Return the array
*/

public class God
{
  public static Human[] Create() => new Human[] { new Man(), new Woman() };
}
public class Human { }
public class Man : Human { }
public class Woman : Human { }