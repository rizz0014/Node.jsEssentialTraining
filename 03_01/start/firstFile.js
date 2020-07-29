let hello = "Hello World From NodeJS!";
let hello2 = "Global Hello World From NodeJS!";

console.log(hello);

// global object contains all of the objects, values and methods without having to import any functionality to the JS file.
global.console.log(hello2); // this is the global console object from NodeJS
// take a loook at the documentation https://nodejs.org/api/globals.html to see what's available globaly.