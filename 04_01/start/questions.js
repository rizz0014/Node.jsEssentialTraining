//////////////// INTERFACE ////////////////

const readLine = require("readline"); // to console readline the answers

const rl = readLine.createInterface({ // creating an interface to acess the 
    input: process.stdin,
    output: process.stdout
})

//////////////// QUESTIONS ////////////////

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you goind to do with Node.js? "
];

//////////////// FUNCTIONS ////////////////

const collectAnswers = (questions, done) => { // callback function after collecting the answers
    const answers = [];
    const [firstQuestion] = questions; // to get the first question answered (index[0])

    const questionAnswered = answer => { // callback function the get the question answered by the user
        answers.push(answer); // push the user answer to the answers array

        if (answers.length < questions.length) { // check if the answers array is still less than questions array. If so, we ask another question
            rl.question(questions[answers.length], questionAnswered); // to make the next question after the question already answered (index), than invoke the questionAnswered function.
        }
        else {
            done(answers); // to pass all the questions to the done callback function
        }
    }

    rl.question(firstQuestion, questionAnswered); // to start invoking the questions
};

//////////////// RUN PROGRAM ////////////////

collectAnswers(questions, answers => { // callback function to get the answers
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});