/**
 * Write a function that returns the total surface area and volume of a box as an array: [area, volume]
 * 
 * P: width, height, depth (nums)
 * R: Surface area and volume as an array [area, volume]
 * E: Given 4, 2, 6 -> [88, 48]
 * Pseudocode:
 * 
 *    set vars for area and volume, and empty array
 *    push area and volume to an array
 */

 function getSize(width, height, depth){
  let array = []
  let area = (2*width*height) + (2*width*depth) + (2*height*depth)
  let volume = width * depth * height

   array.push(area, volume)
   return array

   
  }
  
  // can also do return [area, volume] and not use push method at all, or use a var for array:
  function getSize(width, height, depth){
    let area = (2*width*height) + (2*width*depth) + (2*height*depth)
    let volume = width * depth * height
    return [area, volume]     
  }
