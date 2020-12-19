let array = [1, 2, 3];
array.forEach(num => console.log(num))


let arg = array;
//function name(arg) ;
console.log(function(arg){return arg}());

let name2 = function(arg) {return arg}
console.log(name2(arg));

let name3 = (arg) => {return arg};
console.log(name3(arg));

let name4 = arg => arg;
console.log(name4(arg));



let k
let array2 = [4, 5, 6];
let num = array2.forEach(num => {k = num});
console.log(k);


const myCirclFunc = arg => {
  let sirc = arg * 3.24;
  return sirc;
};
console.log(myCirclFunc(3));

function mySquareFunc(arg) {
  let edge = arg * 4;
  return edge;
};
console.log(mySquareFunc(3));

let numbers = [1, 2, 3, 4];
let squares = [];
numbers.forEach(num => squares.push(num * num));
console.log(squares);

