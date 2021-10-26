// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your GitHub Username?",
            name: "github",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your project's name?",
            name: "title",
        },
        {
            type: "input",
            message: "Please write a short description of your project.",
            name: "descr",
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD", "None"],
        },
        {
            type: "input",
            message: "What command should be run to install dependenceies?",
            name: "dependencies",
        },
        {
            type: "input",
            message: "What command should be run to run tests?",
            name: "tests",
        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "repo",
        },
        {
            type: "input",
            message:
                "What does the user need to know about contributing to the repo?",
            name: "contribute",
        },
    ]);
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//     });
// }

// TODO: Create a function to initialize app
// function init() {
//     writeToFile()
//         .then((data) => fs.writeFileSync("README.md", generateMarkdown(data)))
//         .then(() => console.log("Generating README.md..."))
//         .catch((err) => console.error(err));
// }

async function init() {
    try {
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);
        await writeFileAsync("./develop/README.md", generateContent);
        console.log("Generating README...");
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
