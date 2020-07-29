//////////////// INTERFACE ////////////////

const readLine = require("readline"); // to console readline the answers
const { EventEmitter } = require("events"); // another way to require the EventEmitter constructor from the events core Module

const rl = readLine.createInterface({ // creating an interface to acess the 
    input: process.stdin,
    output: process.stdout
})

//////////////// MODULE ////////////////

module.exports = (questions, done = f => f ) => { // this way the done is a default dummy callback function (f => f doesn't do anything) to not break the code
    const answers = [];
    const [firstQuestion] = questions; // to get the first question answered (index[0])
    const emitter = new EventEmitter(); // to instantiate the constructor function

    const questionAnswered = answer => { // callback function the get the question answered by the user
        emitter.emit("answer", answer); // to emit an answer event before push it to the answer array
        answers.push(answer); // push the user answer to the answers array

        if (answers.length < questions.length) { // check if the answers array is still less than questions array. If so, we ask another question
            rl.question(questions[answers.length], questionAnswered); // to make the next question after the question already answered (index), than invoke the questionAnswered function.
        }
        else {
            emitter.emit("complete", answers); // provides the aditional option to the consumers to listen to the complete events.
            done(answers); // to pass all the questions to the done callback function
        }
    }

    rl.question(firstQuestion, questionAnswered); // to start invoking the questions

    return emitter;
};