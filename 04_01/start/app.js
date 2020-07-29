// Ex.1 - REGULAR WAY

// const counter = require("./myModule"); // to import modules, providing the path to the module and getting the module.exports object with the functions

// // accessting the functions withing the object and invoking them
// counter.inc(); // result = 1
// counter.inc(); // result = 2
// counter.inc(); // result = 3
// counter.dec(); // final result = 2

// console.log(counter.getCount());

// Ex.2 - SAME THING, BUT CLEANER - Destructer the function when we invoke the require function

const {inc, dec, getCount } = require("./myModule");

inc();
inc();
inc();
dec();

console.log(getCount()); // Result will also be 2 in this example.