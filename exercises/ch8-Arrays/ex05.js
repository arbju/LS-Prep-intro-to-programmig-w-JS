
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

let integers = findIntegers(things);
console.log(integers); 
 



// OR as arrow functions

let findIntegers2 = (array) => {               // function expression
  return array.filter((element) => {           //anonymus 
    return Number.isInteger(element);
  });
}

console.log(findIntegers2(things)); 




