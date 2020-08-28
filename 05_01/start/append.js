const fs = require("fs"); // require the file system module
const colorData = require("./assets/colors.json");

colorData.colorList.forEach(c => { // iterate through the colorList file and append each object to the colour.md file
    fs.appendFile("./storage-files/colour.md", `${c.color}: ${c.hex} \n`, err => {
        if (err){
            throw err;
        }
        console.log(`Color "${c.color}" appended to 'color.md' file.`)
    });
});