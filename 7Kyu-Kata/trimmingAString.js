function trim(str, size) {
  if (size <= 3 && str.length > size) {
    // If requested size is 3 or less, add ellipses to indicate trimming.
    return str.slice(0, size) + "...";
  } else if (str.length <= size) {
    // If the string length is shorter than or equal to the requested size, return it as is.
    return str;
  } else {
    // If the string is greater than the requested size, trim it and add ellipses.
    return str.slice(0, size - 3) + "...";
  }
}
/** 
P: string and size(num)
R: Return string. 
If the string length is longer than the requested max string length, 
the result should end with "..."
E:  trim("Code Wars is pretty rad", 50 -> "Code Wars is pretty rad"
    trim("He", 1) -> "H..."
Pseudocode:
If requested string size is 3 or less, no ellipses
If string is smaller or equal to the requested size, just return it
otherwise, trim and add ellipses
If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.



*/
