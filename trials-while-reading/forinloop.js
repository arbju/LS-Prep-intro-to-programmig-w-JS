// for/in loop in Objects chapter

let obj1 = { a:1, b:2, c:3};
let obj2 = Object.create(obj1);
obj2.c = 33;
obj2.d = 44;


// to avoid iterating over the inherited props we can use
// hasOwnProperty
console.log(obj2)
for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
}


// since obj2 inherits from obj1 the c key is 
// in both obj1 and obj2, but the obj2 one get presedence
// if we include the inherited props in the iteration.
console.log(obj2)
for (let prop in obj2) {
    console.log(obj2[prop]);
}


// now if we delete the c key in obj2 the iteration 
// includes the c key in obj1.
delete obj2.c
console.log(obj2)

console.log(obj1)
for (let prop in obj2) {
    console.log(obj2[prop]);
}