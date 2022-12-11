// 8 kyu Reversed sequence
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]
// My solution:
function reverseSeq(n){
    let arr = []
   for(i=1;i<=n;i++){
       arr.unshift(i)
   }
   return arr
}
// Other similar solution:
const reverseSeq = n => {
    let arr = [];
      for (let i=n; i>0; i--) {
        arr.push(i);
        } return arr;
    };
// test case:
// reverseSeq(7)