/*
You get an array of numbers, return the sum of all of the positives ones.


Note: if there is nothing to sum, the sum is default to 0.

Parameters: array of numbers
Return: the sum of all positive numbers
Example: [1,-4,7,12] => 1 + 7 + 12 = 20
Pseudocode: 
  - Create a variable to store the sum
  - Loop through the array
  - If the number is positive, add it to the sum
  - Return the sum

*/

// my solutiion:

using System;

public class Kata
{
  public static int PositiveSum(int[] arr)
  {
    // Create a variable to store the sum
    int sum = 0;

    // Loop through the array
    for (int i = 0; i < arr.Length; i++) // note - arrays use Length NOT Count
    {
      // If the number is positive, add it to the sum
      if (arr[i] > 0)
      {
        sum = sum + arr[i];
      }
    }
    return sum;
  }
}

// better solution using Linq:
// using System;
// using System.Linq;

// public class Kata
// {
//   public static int PositiveSum(int[] arr)
//   {
//     return arr.Where(x => x > 0).Sum();
//   }
// }