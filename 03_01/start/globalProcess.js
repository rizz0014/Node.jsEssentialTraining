// Process Object

// console.log(process.pid);
// console.log(process.versions.node);
// console.log(process.argv); // argument variables - ARRAY

//Ex.1
// const [,,firstname, lastname] = process.argv; //creating array
// console.log(`Your name is ${firstname} ${lastname}`);
// Then run in terminal "node globalProcess Guilherme Rizzo" to pass the arguments of firts and last name to the array


//Ex.2
//Use flags to provide arguments for the process.argv

// first create the grab function to pass arguments to any particular order
const grab = flag =>{
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag]; // to get the infex of the flag argument
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`); // `` = Template (Template strings) literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
// Then run in terminal "node globalProcess --user gui --greeting "Hidely Hoe" "