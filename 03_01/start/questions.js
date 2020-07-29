// SYNC RUNTIME EXAMPLE


//process.stdin and process.stdout are modules to interact with the console application


// Ex. 1
// process.stdout.write("Hello ");
// process.stdout.write("World \n\n\n");

//Ex. 2

const questions =[
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

ask();

const answers = []; // array to hold the answers from the user input

process.stdin.on("data", data => { // the first "data" is the event when you tipe something and press enter, and the second data argument is the handler that will be used in the function.
    answers.push(data.toString().trim()); // to push the answers to the array

    if (answers.length < questions.length) {
        ask(answers.length); // the answers.length is used as index change, to go through all the questions.
    } else {
        process.exit(); // to invoke the exit event - DON'T FORGET TO CLOSE THE CONSOLE
    }
    // process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
});


// When the process exits the handler will fire because it has an exit listener
process.on("exit", () =>{
    const [name, activity, lang] = answers; // passing the answer array to the function variables.
    console.log(`

    Thank you for your answers.
    
    Go ${activity} ${name} you can write ${lang} code later!

    `)
})