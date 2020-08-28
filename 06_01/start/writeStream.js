// 1. using the same interface to write a file into the terminal

process.stdout.write("Write Stream");
process.stdout.write(" Application\n");

// 2. Now writing the output to a file using the FS to create a stream

const fs  = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");

writeStream.write("Write Stream");
writeStream.write(" Application\n");
writeStream.write("");

// 3. creating the listen the data events from the terminal and adding to the file

// a)
console.log("\nFrom now on all the terminal inputs will be written to the './assets/myFile.txt'\n")
process.stdin.on("data", data => {
    writeStream.write(data);
})

// b)
// process.stdin.pipe(writeStream); // another way to to it

// 4. copy the file content streams into a file using the readStream AND writeStream from FS module

// a)
console.log("copied the './assets/lorum-ipsum.md' content to './assets/myFile.txt'")
const readStream = fs.createReadStream("./assets/lorum-ipsum.md");
readStream.on("data", data => {
    writeStream.write(data);
})

// b)
readStream.pipe(writeStream);