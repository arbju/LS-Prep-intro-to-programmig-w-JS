
function factorial2(n) {
  if (n > 1) {
    return n * factorial2(n-1);
  } 
  return 1; 
}

console.log(factorial2(1));
console.log(factorial2(2));
console.log(factorial2(3));
console.log(factorial2(4));
console.log(factorial2(5.5));
console.log(factorial2(6));
console.log(factorial2(7));
console.log(factorial2(8));

//  School Solution
function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320