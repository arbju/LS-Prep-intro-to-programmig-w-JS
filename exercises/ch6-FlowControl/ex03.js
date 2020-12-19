function evenOrOdd (arg) {
  if (Number.isInteger(arg)) {

    if (arg % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('error')
  }
}   

evenOrOdd(7);
evenOrOdd(6);
evenOrOdd('hi');
evenOrOdd(3.6);
