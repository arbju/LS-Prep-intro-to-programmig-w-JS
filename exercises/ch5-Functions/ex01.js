let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// Logs 1 since line 3 has local scope