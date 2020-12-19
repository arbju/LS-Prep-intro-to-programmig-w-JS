// Deep copy of nested objects — Stringify & Parse

// It can be very tedious to manually go through big 
// objects and copy every nested object by hand. 
// There is a way to copy everything without thinking. 
// You simply stringify your object and parse it right 
// after

const a = {
  foods: {
    dinner: 'Pasta'
  }
};

let b = JSON.parse(JSON.stringify(a))
b.foods.dinner = 'Soup'
console.log(a.foods.dinner) // Pasta
console.log(b.foods.dinner) // Soup


console.log(a);
console.log(b);
let c = JSON.stringify(a)
console.log(c);