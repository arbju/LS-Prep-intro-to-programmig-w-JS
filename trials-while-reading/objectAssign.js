let a = { a: 1};
let b = { b: 2};

Object.assign(a, b);
console.log(a);   // mutates a 
console.log(b);   // leaves b untouched


let c = { c: 3};
let d = { d: 4};


let e = {};
Object.assign(e, c, d);
console.log(e);    // put result in new e
console.log(c);    // leaves c untouched
console.log(d);    // leaves d untouched

let f = Object.assign({}, c, d)  // as e but in one go
console.log(f);
