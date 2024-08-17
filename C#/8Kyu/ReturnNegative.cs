/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
Kata.MakeNegative(1);  // return -1
Kata.MakeNegative(-5); // return -5
Kata.MakeNegative(0);  // return 0

p: An integer
r: A negative integer
e: 1 -> -1
pseudocode: Check if a number is less than 0. If it is, return the number. Otherwise multiply it by negative 1 and return it.

*/

// My solution:
using System;

public static class Kata
{
  public static int MakeNegative(int number)
  {
    return number < 0 ? number : -number;
  }
}

// Another solution using Abs() method:
// return -Math.Abs(number);