const fs = require("fs");

const md = `
# This is a new file

We can write text to a file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile

`;

fs.writeFile("./assets/notes.md", md.trim(), err => { // creating a new file into the path with the md message

    if(err) {
        throw err;
    }
    console.log("file saved");
});