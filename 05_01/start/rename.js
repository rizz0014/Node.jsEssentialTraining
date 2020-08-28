const fs = require("fs");

fs.renameSync("./assets/colors.json", "./assets/colorData.json"); // first the current file name, than the desired rename.
console.log("File 'colors.json' renamed to 'colorData.json'.");

 // we can also use the rename function to move files.
const notesFile = "./storage-files/notes.md";
fs.rename("./assets/notes.md", notesFile, err => { // FOR THE ASYNC FUNCTION THE LAST ARGUMENT IS ALWAYS A CALLBACK FUNCTION
    if (err){
        throw err;
    }
    console.log(`File moved to ${notesFile}`);
});

setTimeout(() => { // the function that we want to invoke after 4000 secs

    fs.unlinkSync("./assets/alex copy.jpg");

}, 4000);