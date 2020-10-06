function times(number1, number2) {
  let result = number1 * number2;
  console.log(`The ${number1} factorial is: ${result}`);
  return result;
}

let numA = 1
for (let i = 1; i < 6; i++) {
  numA = times(i, numA)  
}
