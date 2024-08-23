/*
Complete the function which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If one of the condition above is true and the integer is even, add "Script" to the end of the string.

If none of the condition is true, return the string "mocha_missing!"

Examples
1   -->  "mocha_missing!"
3   -->  "Java"
6   -->  "JavaScript"
12  -->  "CoffeeScript"

P: integer
R: string "Java", "Coffee", "JavaScript", "CoffeeScript", "mocha_missing!"
*/

// My solution:
public class Kata
{
  public static string CaffeineBuzz(int n)
  {
    string returnString = "";

    if (n % 3 == 0 && n % 4 == 0)
    {
      returnString += "Coffee";
      if (n % 2 == 0)
      {
        returnString += "Script";
      }
    }
    else if (n % 3 == 0)
    {
      returnString += "Java";
      if (n % 2 == 0)
      {
        returnString += "Script";
      }
    }
    else
    {
      returnString += "mocha_missing!";
    }

    return returnString;

  }
}

// Clever solution:
public class Kata
{
  public static string CaffeineBuzz(int n)
  {
    if (n % 12 == 0)
    {
      return "CoffeeScript";
    }
    if (n % 6 == 0)
    {
      return "JavaScript";
    }
    if (n % 3 == 0)
    {
      return "Java";
    }
    return "mocha_missing!";
  }
}