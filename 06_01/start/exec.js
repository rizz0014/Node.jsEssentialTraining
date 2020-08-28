// CHILD PROCESS MODULE TO RUN OTHER APPLICATIONS INTO THE NODE.JS ENVIRONMENT

// IMPORTANT: EXEC function is a SYNC PROCESS, and SPAWN is ASYNC (running, waiting for input/command)

const cp = require("child_process");

// examples

// 1. open the browser to my my personal site
cp.exec("open https://rizz0014.github.io");

// 2. open a new instance of the terminal
cp.exec("open -a Terminal .");

// 3. To run the ls command in the terminal and see the list of directories and libraries. 
cp.exec("ls", (err, data, stderr) => { 
    if (err){
        throw err;
        // console.log(data); // argument error message from the Node.js
        // console.log(stderr); // argument error message from the terminal
    }
    console.log(data);
})

// 4. To run another Node.js process

cp.exec("node readStream", (err, data, stderr) => {
    if (err){
        throw err;
    }
    
    console.log(data);
})