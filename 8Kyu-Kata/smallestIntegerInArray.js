// 8 kyu Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.
// My Answer:
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let sortedArray = args.sort((a,b) => a-b); //This sorts the array from smallest to largest
      return (sortedArray[0]); 
    }
  }
//   ANOTHER SOLUTION using Math.min(...args):
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }