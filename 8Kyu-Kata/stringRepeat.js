// 8 kyu String repeat
// Write a function called repeatStr which repeats the given string string exactly n times.
// My Answer:
function repeatStr (n, s) {
  return String(s.repeat(n)); //syntax is repeat(value)
}
// Arrow Syntax Answer from CodeWars:
repeatStr = (n, s) => s.repeat(n)