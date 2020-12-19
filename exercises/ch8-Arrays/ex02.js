let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

myArray.forEach(elem => {
  if (elem % 2 === 0) {
    console.log(elem);
  }
});

// OR

myArray.forEach(function(elem) {
  if (elem % 2 === 0) {
    console.log(elem);
  }
});
