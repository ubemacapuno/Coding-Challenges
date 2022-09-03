// 8 kyu Well of Ideas - Easy Version
// For every good kata idea there seem to be quite a few bad ones!
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
//p: x which is an array, It may be empty. It can contain 'good' and 'bad' strings
//r: If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
//e:
        // assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
        // assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
        // assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
//Pseudocode:
    //set a counter variable that will be used to help return the applicable return string
    //use a loop to iterate through the array, counting for "good" and return the applicable string associated with the count.
//My solution:
function well(x){
    let goodCount = 0
    x.forEach((e) => {
    if (e === 'good') {
      goodCount++
    }
  })
    if(goodCount === 2 || goodCount ===1){
      return 'Publish!'
    }else if(goodCount > 2){
      return 'I smell a series!'
    }else{
      return 'Fail!'
    }
  }