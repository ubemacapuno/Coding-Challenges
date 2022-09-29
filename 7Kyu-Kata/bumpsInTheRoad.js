// 7 kyu Bumps in the Road
// Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
//P: string showing flat or bump (_, n)
//R: car dead or woohoo
//E: 
// describe("Bumps in the Road", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(bump("n"), "Woohoo!");
//       assert.strictEqual(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
//       assert.strictEqual(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
//       assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
//       assert.strictEqual(bump("______n___n_"), "Woohoo!");
//     });
//   });
//Pseudocode:
//set a variable for n
//use a loop, if there is an n, add to the counter. If counter is 15 or less, return woohoo, otherwise car dead
//Solution:
function bump(x){
    let counter = 0
    for(let i=0; i<x.length; i++){
        x[i] === "n" ? counter++ : null
    }
    return counter > 15 ? "Car Dead" : "Woohoo!"
}   
//Test Case:
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"))