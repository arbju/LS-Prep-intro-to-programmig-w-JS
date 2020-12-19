let readlineSync = require('readline-sync');
let age = Number(readlineSync.question('How old are you?'));
console.log(`You are ${age} years old.`);
let step = 10;
for (let i = 1; i <= 4; i += 1) {
  console.log(`In ${step} years, you will be ${age + step} years old.`);
  step += 10;
}

// // official solution
//
// let readlineSync = require('readline-sync');
// let age = readlineSync.question('How old are you? ');
// age = parseInt(age);
// console.log(`You are ${age} years old.`);
// for (let future = 10; future <= 40; future += 10) {
//   console.log(`In ${future} years, you will be ${age + future} years old.`);
// }