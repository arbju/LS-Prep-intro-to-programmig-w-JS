foo;

let foo;  // statement  (evaluates to undefined)
foo = 5;  // expression
foo;      // expression (evaluates to 5, as an isolated line it 
          // will be Uncaught ReferenceError: faa is not defined)
          
