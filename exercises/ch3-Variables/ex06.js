const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// No error, logs bar