function mymultiply(getNum1, getNum2) {
  let readlineSync = require('readline-sync');
  num1 = readlineSync.question(`Enter the ${getNum1} number: `);
  num2 = readlineSync.question(`Enter the ${getNum2} number: `);
  return { num1, num2 };
}

const nums = mymultiply('first', 'second')
const firstNum = nums.num1;
const secondNum = nums.num2;
const result = firstNum * secondNum
console.log(`${firstNum} * ${secondNum} = ${result}`);


// Official Solution
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);