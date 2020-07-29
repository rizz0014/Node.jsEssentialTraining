//Ex. 1 - Using NodeJS Module
const path = require("path"); // require("path") is a built-in module from Noje.JS

console.log(`The file name is ${path.basename(__filename)}`); // to use the path module to get the file name

//Ex. 2
// console.log(__dirname); // to console the directory name of the file
// console.log(__filename); // to console the file name