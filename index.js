// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for user input
const questions = [
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
        message: "What command should be entered to run tests?",
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
];

// This is a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", data, (err) => {
        if (err) {
            return console.error(err);
        } else {
            console.log("Generating README.md...");
        }
    });
}

async function promptUser() {
    const answers = await inquirer.prompt(questions);
    const fileName = `${answers.title}`;
    const data = await generateMarkdown(answers);
    writeToFile(fileName, data);
}

// This is the function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
