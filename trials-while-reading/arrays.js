// Experiment to see how using array object properties 
// as keys might make for a fake (key: value pair) situation.
// These "elements" aren't true elements; 
// they are properties on the array object, (from the arrays chapter)
let keyArray = [];

for (let i = 0;i <10; i++) {
  keyArray[`key${i}`] = `value${i}` 
}
console.log('log the array');
console.log(keyArray);

console.log('log the keys');
console.log(Object.keys(keyArray));

console.log('log the values');
console.log(Object.values(keyArray));

console.log(keyArray.length)       // here we get 0 for length

// Lets try to access the array
console.log('Log: keyArray[1])');
console.log(keyArray[1]);
console.log("Log: keyArray['key1'])");
console.log(keyArray['key1']);



// console.log("Log: keyArray[key1])");
// // next line should fail
// console.log(keyArray[key1]);
// keyArray[key1];