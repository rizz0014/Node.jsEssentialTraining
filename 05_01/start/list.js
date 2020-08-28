const fs = require("fs"); //require the reading file module

// // 1. read files in a sync way
console.log("started reading files"); // console to show the order or requests, starting here
const files = fs.readdirSync("./assets"); // reading the files of the directory
console.log("complete"); // message to console when the request is finished

console.log(files); // console the files names of the directory


// 2. Another way to read files in a ASYNC way using callback function

fs.readdir("./assets", (err, files) => { // callback function using the readdir
    if (err){
        throw err;
    };
    console.log("complete"); // message to console when the request is finished
    console.log(files); // console the files names of the directory
});
console.log("started reading files"); // console to show the order or requests, starting here and then the callback function