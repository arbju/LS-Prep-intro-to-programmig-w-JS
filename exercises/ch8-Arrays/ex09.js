let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(numbers1.filter(num => num === 3) == 3);
console.log(numbers2.filter(num => num === 3) == 3);
console.log(numbers3.filter(num => num === 3) == 3);


// or

let listOfArrays = []
listOfArrays.push(numbers1);
listOfArrays.push(numbers2);
listOfArrays.push(numbers3);
listOfArrays.forEach(array => (
  console.log(
    array.filter(num => num === 3) == 3
  )
));


// School Solution
console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));

