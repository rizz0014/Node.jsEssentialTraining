const fs = require("fs");

if (fs.existsSync("storage-files")){ // to check if the directory already exists
    console.log("The directory already exists");
} else {
    fs.mkdir("storage-files", err => { // to create a new directory
    
        if (err){
            throw err;
        }
    
        console.log("directory created");
    });
}