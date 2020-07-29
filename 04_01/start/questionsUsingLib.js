//////////////// LIB - MODULES ////////////////
const collectAnswers = require("./lib/collectAnswers");
const { EXDEV } = require("constants");

//////////////// QUESTIONS ////////////////

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you goind to do with Node.js? "
];

//////////////// USING THE collectAnswers.js MODULE FOM THE LIB ////////////////

// Ex. 1 - Same result from the first excertcise 'questions.js'
// collectAnswers(questions, answers => { // callback function to get the answers
//     console.log("Thank you for your answers. ");
//     console.log(answers);
//     process.exit();
// });

// Ex. 2 - Setting the done callback function as optional to the user
// collectAnswers(questions);

// Ex. 3 - Using the event module
const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => console.log(`\nquestion answered: ${answer}\n`)); // if there is an asnwer event it will console log the user answers on the terminal

answerEvents.on("complete", answers => { // callback function to show the complete answers
    console.log(`Thank you for your answers: ${answers}`);
    console.log("This is the answer array: ");
    console.log(answers);
})

answerEvents.on("complete", () => process.exit()); // function to exit the process after the complete event.