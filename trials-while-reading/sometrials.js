// When forEach is called on an array it
// takes a callback function as its argument.
// (in this case an anonymus function)
let array = [1, 2, 3];
array.forEach(function(num) {
  console.log(num);
});


// An anonymus function expression:
let myFunc = function (x) {
  console.log(x);
}
myFunc(34);


// An anonymus function used as a callback
// function by setTimeout
const anAnonymusFunc1 = function() {  
  console.log("in anAnonymusFunc1");
}
setTimeout(anAnonymusFunc1, 1000);


// Arrow function declaration called from inside
// string interpolation.
const someFunction2 = (a, b) => {
  console.log(`${a} plus ${b} is ${a + b}.`);
  return a * b
} 
console.log(`someFunction2: ${someFunction2(2, 3)}`)


// Using setTimeout with Arrow Function
function someFunc3() {
  console.log("in someFunc3")
}
setTimeout(() => someFunc3() , 500);


// Simple use of setTimeout()
setTimeout(() => console.log("after 2 sec") , 2000);


// Named Function Expression with explicit name property
// 
let math = {
  'factit': function myFactorial(n) {
    console.log(n)
    if (n <= 1) {
      return 1;
    }
    return n * myFactorial(n - 1);
  }
};
math.factit(3) //3;2;1;

