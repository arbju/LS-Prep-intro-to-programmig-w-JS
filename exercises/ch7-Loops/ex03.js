let counter = 0;

while (counter = 1) {         // this line is an assigment that returns 1 inside the conditional

  console.log(counter);
  counter += 1;

  if (counter > 2) {           // counter is 2 each time, break i never reached
    break;
  }
}