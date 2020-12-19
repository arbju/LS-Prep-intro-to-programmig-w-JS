function numberRange(number) {
  let logStr = ""
  if (number < 0) {
    logStr = `${number} is less than 0`;
  } 
  else if (number <= 50) {
    logStr = `${number} is between 0 and 50`;
  } 
  else if (number <= 100) {
    logStr = `${number} is between 51 and 100`;
  } 
   else if (number > 100) {
    logStr = `${number} is less than 0`;
  } else {
    logStr = `${number} is incompatible input`;
  }
  console.log(logStr);
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
numberRange(252 + 'i');