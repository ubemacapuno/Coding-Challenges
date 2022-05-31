// 7 kyu Anagram Detection
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
function isAnagram (test, original) {
    return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
  }
