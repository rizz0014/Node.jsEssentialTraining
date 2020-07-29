// Using the NODEJS buildin module to create an interface to print and get input from terminal

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Accessing the question from the module interface
rl.question("How do you like Node? ", answer =>{ // call back function to get the user input and display to the console interface
    console.log(`Your answer: ${answer}`);
})