// Basic function declaration
function getData1() {
  console.log("in getData1");
}
getData1();


// Assigning a basic function declaration to a variable 
let getData2 = function getData2() {
  console.log("in getData2");
}
getData2();


// Assigning a anonymous function declaration to a variable 
let getData3 = function () {
  console.log("in getData3");
}
getData3();


// Imediatly executaed anonymous function (inside Log)
console.log(`outer log: ${
  (function () {
    console.log("inner log: in anonymous1");
    return 'Yahoo'
  } )()}`
);


// Imediatly executaed anonymous function all by it self
(function () {console.log("in anonymous2")} )();


// Imediatly executaed arrow function all by it self
(() => {console.log("in arrowfunction1")} )();


// Called named arrow function 
 let namedArrowFunc = () => {console.log("namedArrowFunc")};
 namedArrowFunc();


// Called named arrow function 
const getData = () => 'test'
x = getData() //evaluates to'test'
console.log(x)


let a = () => {console.log("x")};
a();


// From MDN  *****************************************
//
// Comparing traditional functions to arrow functions
//
// Let's decompose a "traditional function" down to the 
// simplest "arrow function" step-by-step:
// NOTE: Each step along the way is a valid "arrow function"

// Traditional Function
function myFunc1(b){
  return b + 100;
}
console.log(myFunc1(4));

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the
//  argument and opening body bracket
let afunc = (c) => {
  return c + 100;
}
console.log(afunc(4));

// 2. Remove the body brackets and word "return" -
// - the return is implied.
let bfunc = (d) => d + 100;
console.log(bfunc(6));

// 3. Remove the argument parentheses
let cfunc = e => e + 100;
console.log(cfunc(6));

// As shown above, the { brackets } and ( parentheses )
// and "return" are optional, but may be required.

// For example, if you have multiple arguments or no arguments,
//  you'll need to re-introduce parentheses around the arguments:

// Traditional Function
function myFunc2(f, g){
  return f + g + 100;
}
console.log(myFunc2(3, 6));

// Arrow Function
let myFunc5 = (h, i) => h + i + 100;
console.log(myFunc5(3, 6));

// Traditional Function (no arguments)
let j = 4;
let k = 3;
function myFunc3(){ 
  return j + k + 100;
}
console.log(myFunc3());

// Arrow Function (no arguments)
let l = 4;
let m = 3;
let anArrowF = () => l + m + 100;
console.log(anArrowF());


// Likewise, if the body requires additional lines of 
// processing, you'll need to re-introduce brackets PLUS
// the "return" (arrow functions do not magically guess 
// what or when you want to "return"):

// Traditional Function
function myFunc4(n, o){
  let chuck = 42;
  return n + o + chuck;
}
console.log(myFunc4(4, 4));

// imediatly executed Arrow Function in console log
console.log(
  (
    (p, q) => {
      let chuck = 42;
      return p + q + chuck;
    }
  )(4, 4)
);

// And finally, for named functions we treat arrow 
// expressions like variables

// Traditional Function
function bob (r){
  return r + 100;
}
let temp = bob(12);
console.log(bob(12));


// Arrow Function
let bob2 = s => s + 100;
console.log(bob2(12));
