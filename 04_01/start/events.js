const events = require("events"); // there is no path because it is core module that comes with Node.js
const { inflate } = require("zlib");
const { emit } = require("process");

// Ex. 1 - Async

const emitter = new events.EventEmitter(); // to invoke the EventEmitter constructor from the events module.

emitter.on("customEvent", (message, user) => { // callback function to console log the event arguments
    console.log(`${user}: ${message}`);
})

emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "That's pretty cool huh?", "Rizzo");

// Ex. 2 - Async Event using the console user input
process.stdin.on("data", data => { // callback function - user input
    const input = data.toString().trim();
    if (input == "exit") {
        emitter.emit("customEvent", "Goodbye!", "process" ) // if the user input is == to the string 'exit' then quit the process
        process.exit();
    }

    emitter.emit("customEvent", input, "terminal"); // to show the user input from the terminal listener
})