let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(element => {
  element.forEach(subElement => {
    if (subElement % 2 === 0) {
      console.log(subElement);
    }
  }) 
});

// OR

for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray[i].length; j += 1) {
    let theValue = myArray[i][j];
    if (theValue % 2 === 0) {
      console.log(theValue);
    }
  }
}