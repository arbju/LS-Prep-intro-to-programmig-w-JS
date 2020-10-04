let number = 4936;
let remainder = 0;
let newnum = number;
const digits = number.toString().length;
for (let i = 0;i < digits; i ++) {
  remainder = newnum % 10;
  newnum = (newnum - remainder) / 10;
  console.log(remainder);
}
