function greeting1(name1) {
  console.log(`Hello ${name1} from greeting1`);
}

function processUserInput1(callback1) {
  let name = 'Mary';
  callback1(name);
}

processUserInput1(greeting1);


// ********************************************  


function greeting(name) {
  console.log(`4 - Hello ${name} from greeting`);
}

function processUserInput(callback) {
  
  console.log('2 - Setting name variable in processUserInput.');
  let name = 'John';
  console.log(`3 - Calling callback wich is: ${callback}, with name: ${name}.`);
  callback(name);
  console.log('5 - Back from Callback, now in processUserInput')
}
console.log('1 - Running processUserInput')
processUserInput(greeting);
console.log('6 - And were done.')
