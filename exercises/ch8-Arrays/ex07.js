let array = [3, 5, 7];

function sumOfSquares (numbersArray) {
  return numbersArray.reduce((accumulator, element) => accumulator + element ** 2, 0);
}

console.log(sumOfSquares(array)); // => 83




// Official solution
function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

//let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83





// Official solution re-written as regular function in the calback
function sumOfSquares(numbers) {
  return numbers.reduce(function(accumulator, number) {
    return accumulator + number * number;
  }, 0);
}

//let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83






// consider this
let arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((a, b) => a * b));





