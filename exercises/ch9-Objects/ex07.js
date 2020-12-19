let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
console.log(myObj);

myObj.qux = 3;
console.log(myObj);




// The following code snippets produces different output
// the second iterates over the prototype keys aswell
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

// With hasOwnProperty added to the 2nd they run the same
for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}