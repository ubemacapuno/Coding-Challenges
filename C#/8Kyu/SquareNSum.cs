/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
P: int[] numbers
R: int
E: [1, 2, 2] => 9
P: 
  - use the sum method from linq to sum the numbers squared
  - return the sum
*/
// import linq
using System.Linq;
public static class Kata
{
  public static int SquareSum(int[] numbers)
  {
    return numbers.Sum(num => num * num);
  }
}

// solution without linq - iterate through the array and sum the squared numbers
public static class Kata
{
  public static int SquareSum(int[] numbers)
  {
    int sum = 0;
    foreach (int num in numbers)
    {
      sum += num * num;
    }
    return sum;
  }
}