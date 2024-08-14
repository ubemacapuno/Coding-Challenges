// 8 kyu Area or Perimeter
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// Example(Input1, Input2 --> Output):
// 6, 10 --> 32
// 3, 3 --> 9
//P: length and width of 4-sided polygon
//R: area if square, perimeter if rectangle
//E: See above examples
//P: if length equals width, return length*width, otherwise return (width *  2) + (length * 2)
//My solution:
const areaOrPerimeter = (l,w) => l == w ? l * w : (l * 2) + (w * 2)