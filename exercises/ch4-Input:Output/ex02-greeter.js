
let readlineSync = require('readline-sync');
let firstName = readlineSync.question('Whats your first name?\n');
let lastName = readlineSync.question('Whats your last name?\n');
console.log(`Hello, ${firstName} ${lastName}!`);

