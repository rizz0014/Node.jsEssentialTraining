const fs = require("fs");

// // 1. Read File Sync
// const text = fs.readFileSync("./assets/Readme.md", "UTF-8");
// console.log(text);

// 2. Read File ASync (using callback function)
fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
    if (err){
        throw err;
    }
    console.log("file contents read");
    console.log(text);
});

// 3. Read Binary files
fs.readFile("./assets/alex.jpg", (err, img) => {
    if (err){
        console.log(`An error has occurred: ${err.message}`); // another way to handle the error
        process.exit();
    }
    console.log("file contents read");
    console.log(img); // will read the image file as binary
}); 