// 7Kyu Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
// Your task is to return the number of JavaScript developers coming from Europe.
// For example, given the following list:
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.
//P: Given an array of objects
//R: Return the number of people from continent: Europe that also are Language: JavaScript
//E: See above, function will return 1
//Pseudocode:
    //if the object has both europe and javascript, add counter ++ and return the counter
//My solution:
function countDevelopers(list) {
    let counter = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i].continent === 'Europe' && list[i].language === 'JavaScript') counter++;
      }
      return counter
  }
//Refactored using forEach method:
function countDevelopers(list) {
    let counter = 0;
    list.forEach((e)=>{
      e.continent === "Europe" && e.language === "JavaScript" ? counter++ : counter
    })
    return counter
  }
//Best Practices codewars solution using filter:
function countDevelopers(list) {
    return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
  }
//Best Practices codewars solution using filter + arrow syntax:
const countDevelopers = list => list.filter(e=>e.continent === "Europe" && e.language === "JavaScript").length
//Test Case:
console.log(countDevelopers([
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Europe', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ]))