let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArray = myArray.map(function(elem) { 
  if (elem % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(myArray);
console.log(newArray);

//  OR

let newArray = [];
for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    newArray.push('even');
  } else {
    newArray.push('odd');
  }
}

// Our approach is again straightforward: 
// we iterate over all the elements in the array 
// and check whether each element is even. If 
// it's even, we either return 'even' from the 
// function we passed to map, or push 'even' onto 
// the newArray. Otherwise, we return or push 
// a value of 'odd'.

