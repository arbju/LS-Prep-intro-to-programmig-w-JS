// all


// School Solution

// All the listed values are valid keys. Note, though, 
// that JavaScript coerces the non-string key values to 
// strings. Given the listed values, 1 and '1' represent 
// the same key, as do true and 'true'. This equivalence
// will bite you at some point; it's inevitable, so be ready.

let myObj = {}
console.log(myObj[true] = 'hello');
console.log(myObj['true'] = 'world');
console.log(myObj[true]);


// I tried this to see how it works (A and E gets lost)
// or rather 1 becomes '1' and then the B is over ritten on 
// '1' key's value, which was A. Same for true and 'true'.
let obj2 = {
  1: 'A',
  '1': 'B',
  undefined: 'C',
  'hello world': 'D',
  true: 'E',
  'true': 'F'
}
console.log(obj2); //{ '1': 'B', undefined: 'C', 'hello world': 'D', true: 'F' }
