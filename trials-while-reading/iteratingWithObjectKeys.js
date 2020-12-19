let array = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};


// Object.keys
let arrayKeys = Object.keys(array)
console.log(arrayKeys)

arrayKeys.forEach(key => {
  console.log(array[key])
})


// Object.vallues
let arrayValues = Object.values(array);
console.log(arrayValues);

arrayValues.forEach(value => {
  console.log(value)
})


// Object.entries - OBS gives a nested array
console.log(Object.entries(array));
       // compare output to the array object
console.log(array);

arrayEntries = Object.entries(array)
console.log(arrayEntries[1][1]);

arrayEntries.forEach(keyValuePair => {
  console.log(keyValuePair[0]);
})

arrayEntries.forEach(keyValuePair => {
  console.log(keyValuePair[1]);
})

arrayEntries.forEach(keyValuePair => {
  console.log(keyValuePair[0]);
  console.log(keyValuePair[1]);
})
