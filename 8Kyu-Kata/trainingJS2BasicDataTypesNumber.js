// 8 kyu Training JS #2: Basic data types--Number
//Set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.
//P:Given following functions
//R: return with the appropriate values of the two variables to return 100 for each function
//E: See equal1() below
//Pseudocode:
    //Using addition, subtraction, multiplication, division, and modulus, set the variables of each function to equal 100
//solution:
var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a= v1   
  var b= v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a= v3   //set number value to a
  var b= v1  //set number value to b
  return a-b;
}
function equal3(){
  var a= v1   //set number value to a
  var b= v5  //set number value to b
  return a*b;
}
function equal4(){
  var a= v4   //set number value to a
  var b= v5  //set number value to b
  return a/b;
}
function equal5(){
  var a= v6 //set number value to a
  var b= v3 //set number value to b
  return a%b
}