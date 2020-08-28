const fs = require("fs");
const { exit } = require("process");

if(!fs.existsSync("./storage-files")){ // check first if the directory exists.
    console.log("Directory './storage-files' does not exist.");
} else {
    fs.renameSync("./storage-files", "./storage") // to rename directories
    console.log("Directory renamed.")
};


// first unlink all the files from a directory to be removed after
fs.readdirSync("./storage copy").forEach(fileName => { //callback function to iterate each file and unlink from the directory.
    fs.unlinkSync(`./storage copy/${fileName}`);
});

fs.rmdir("./storage copy", err => { // the directory cannot be removed if not empty
    if (err){
        throw err;
    }
    console.log("./storage copy removed.");
});