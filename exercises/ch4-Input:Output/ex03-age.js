let readlineSync = require('readline-sync');
let age = Number(readlineSync.question('Waht is your age?\n'));
let step = 10;
console.log(`In ${step} years, you will be ${age + step} years old.`);
step += 10
console.log(`In ${step} years, you will be ${age + step} years old.`);
step += 10
console.log(`In ${step} years, you will be ${age + step} years old.`);
step += 10
console.log(`In ${step} years, you will be ${age + step} years old.`);
