// ASYNC RUNTIME EXAMPLE

const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0); // to move the console cursor to the first line
    process.stdout.write(`waiting ... ${p}%`);

    // console.log(`waiting ${currentTime / 1000} seconds`);
}

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine(); // to clear the 100% line
    process.stdout.cursorTo(0); // to move the console cursor to the first line
    console.log("done");
}

const interval = setInterval(incTime, waitInterval); // at every 5 seconds interval the incTime arrow function is called.
setTimeout(timerFinished, waitTime); // after timeout the timerFinished arrow unction is invoked to print the "done" message.