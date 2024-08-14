using System;

// P: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// R: A string that says "Even" or "Odd"
// E: 2 -> "Even"
// P: Check if the number is even by checking if the number is divisible by 2. If it is return "Even" else return "Odd"

// My solution:
namespace Solution
{
  public class SolutionClass
  {
    public static string EvenOrOdd(int number)
    {
      if (number % 2 == 0)
      {
        return "Even";
      }
      else
      {
        return "Odd";
      }
    }
  }
}

// A better solution using a ternary operator:
namespace Solution
{
  public class SolutionClass
  {
    public static string EvenOrOdd(int number)
    {
      return number % 2 == 0 ? "Even" : "Odd";
    }
  }
}