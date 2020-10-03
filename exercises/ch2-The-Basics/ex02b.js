let number = 4936;
let remainder = 0;
let newnum = number;
for (let i = 0;i < number.length; i ++) {
  remainder = newnum % 10;
  console.log(remainder);
  newnum = (mumber - remainder) / 10;
}