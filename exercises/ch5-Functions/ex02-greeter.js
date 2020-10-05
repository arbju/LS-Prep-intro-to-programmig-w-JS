function greet(getNamePart) {
let readlineSync = require('readline-sync');
namePart = readlineSync.question(`What\'s your ${getNamePart} name?\n`);
return namePart
}


const firstName = greet('first')
const lastName = greet('last')
console.log(`Hello, ${firstName} ${lastName}!`);
