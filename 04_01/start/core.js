// CORE MODULES = NODES MODULES INSTALLED WITH NODEJS

const path = require("path");

// // Ex. 1 - Fist Example of how to get and display the folder path using the core module
// const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
// console.log(dirUploads);

// // Ex. 2 - Using Utility module to log to the console - The good thing is that with utils module you also get a timestamp
// const util = require("util");

// util.log(path.basename(__filename));
// util.log(" ^ The name of the current file");


// Ex. 3 - v8 Module - Another Module example
// const v8 = require("v8");
// util.log(v8.getHeapStatistics());


/////// ANOTHER WAY TO DECLARE THE MODULES OBJECTS ///////
const { log } = require("util");
const { getHeapStatistics } = require("v8");

log(getHeapStatistics()); // IN THIS EXAMPLE WE GET THE SAME RESULT FROM THE PREVIOUS ONES.