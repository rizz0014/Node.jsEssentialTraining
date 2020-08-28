// 1. using the process module to read the stream

// console.log("type something...");
// process.stdin.on("data", data => {
//   console.log(`I read ${data.length - 1} characters of text`);
// });


// 2. WE CAN CREATE READABLE STREAMS WITH THE FILE SYSTEM MODULE

const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8"); // to create a text read streams we need to include the enconding UFT-8 as argument, otherwise it will be a binary read stream.

let fileText = "";

console.log("reading data...");
readStream.on("data", data => {
  console.log(`I read ${data.length - 1} characters of text`);
  fileText += data; // to add up the data event chunks to the variable
});

// IMPORTANT - READ STREAM ADVANTAGE
// * Reading files with streams causes the application to use less memory, because instead of reading all at once and loading into a buffer the stream method reads the file bit by bit, chunk by chunk
// * Gives us a lot of control, because it raise events.

// example: 
readStream.once("data", data => {
  console.log(data);
})

// USING END EVENT
readStream.on("end", () => {
  console.log("\nFinished reading file.\n");
  console.log(`In total I read ${fileText.length -1} characters of text \n`);
})