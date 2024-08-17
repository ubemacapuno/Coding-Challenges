/*
Given a string of space separated numbers, return the highest and lowest number.

Examples
Kata.HighAndLow("1 2 3 4 5");  // return "5 1"
Kata.HighAndLow("1 2 -3 4 5"); // return "5 -3"
Kata.HighAndLow("1 9 3 4 -5"); // return "9 -5"

P: string of space separated numbers
R: string of space separated numbers
E: (see above)
Pseudocode:
split the numbers out into a string array, convert to an integer array, sort it, then with string interpolation, return the element in the last index, add a space, and the element in the first index 
*/
using System;
using System.Linq;

public static class Kata
{
  public static string HighAndLow(string numbers)
  {
    // separate `numbers` into a list - let's use Split(' ');
    string[] numberStrings = numbers.Split(' ');

    // convert to an integer array so we can use Sort() later:
    int[] numberInts = numberStrings.Select(int.Parse).ToArray(); // NOTE: Use int.Parse for string number to integer conversion

    // now sort this array with the Array.Sort() method:
    Array.Sort(numberInts);

    // return the last and first indexes in a string:
    return $"{sortedSplitNumbers[^1]} {sortedSplitNumbers[0]}";
  }
}