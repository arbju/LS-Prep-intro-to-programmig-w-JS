console.log("#################################################################");

var arr = [1, [2], [3, [[4]]]];
console.log(arr);
console.log("the length is: " + arr.length);
console.log(arr[2][1][0][0]);      // 4

var flatter = arr.reduce(function(done,curr){
  return done.concat(curr);
}, []);

console.log(flatter);             // [ 1, 2, 3, [ [ 4 ] ] ]

function flattest(arrArg) {
  if (Array.isArray(arrArg)) {
  return arrArg.reduce(function(done,curr){
    return done.concat(flattest(curr));
    }, []);
  } else {
    return arrArg;
  }
}

console.log(flattest(arr));          // [ 1, 2, 3, 4 ]


console.log("||||||||||||||||||||||||||||||||||||||");

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log("**************************************");

arr.forEach((element) => console.log(element));

console.log("_______________________________________");


