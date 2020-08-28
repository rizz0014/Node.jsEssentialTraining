// // IMPORTANT: EXEC function is a SYNC PROCESS, and SPAWN is ASYNC (running, waiting for input/command)

const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]); // to async execute the node questions.js

// you could pass the values before, so the application will run until is finished and not wait for the user input.
questionApp.stdin.write("Guilherme \n");
questionApp.stdin.write("Rizzo \n");
questionApp.stdin.write("Do my part to create a better world \n");

questionApp.stdout.on("data", data => { // call back function to log the data into the terminal
    console.log(`from the question app: ${data}`);
})

questionApp.on("close", () => {
    console.log("questionApp process exited\n");
})