//Today, one of my friends argued with me about the empty array [], he think it’s falsy but in my experience I persist it should be truthy.
//So, I demo it as follows:

var a = [];
if (a) console.log('empty array is truthy');

//Or you can also use double logical NOT to cast it to boolean, it’s the same.

var a = [];
if (!!a) console.log('empty array is truthy');

//Looking the the evidence sentence shown in the screen, I think the argument is over till he shows me the following code,

console.log([] == false);

// the above code logs:
// empty array is truthy
// empty array is truthy
// true