
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// logs bar