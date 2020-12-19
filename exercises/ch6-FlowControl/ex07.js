function toCapsIf10(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str
  }
}

console.log(toCapsIf10('hello world'));
console.log(toCapsIf10('goodbye'));

// solution 2 with ternary operator
function toCapsIf10Terny(str) {
  return (str.length > 10) ? str.toUpperCase() : str;
}

console.log(toCapsIf10('hello world'));
console.log(toCapsIf10('goodbye'));
console.log(toCapsIf10('Sue Smith'));
console.log(toCapsIf10('Jonny Balboa'));