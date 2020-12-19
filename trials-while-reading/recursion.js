

function waitAbit(time) {
  console.log(`in waitAbit - ${time} msec`);
}





function recur(a,b) {
  let waittime =b*100;

  if (a <= 1) { // catch basecase
    setTimeout(waitAbit, waittime, waittime);
    return;
  } 
  
  a -= 1;
  b -= 1;
  console.log(`In recur     a = ${a}, b = ${b}    -  Waittime is: ${waittime} msec`);
  setTimeout(recur, waittime, a, b);
  
}






recur(10, 10);
