/*
Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
power_of_two?(1024) # true
power_of_two?(4096) # true
power_of_two?(333)  # false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

P: int n
R: bool
E: 1024 -> true
   4096 -> true
   333  -> false
Pseudocode:
Math.Log: Returns the logarithm of a specified number:
- Use Math.Log to find the log of n with base 2
- If the result of the log is a whole number (meaning it is divisible by 1), return true

*/

using System;

public static class Kata
{
  public static bool PowerOfTwo(int n)
  {
    return Math.Log(n, 2) % 1 == 0;
  }
}

// Make it lambda:
using System;

public static class Kata
{
  public static bool PowerOfTwo(int n) => Math.Log(n, 2) % 1 == 0;
}