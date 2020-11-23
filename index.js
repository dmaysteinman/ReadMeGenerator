const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// array of questions for user
const prompts = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",

    },
    {
        type: "input",
        name: "description",
        message: "Please enter a brief description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "How is your project installed?",
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors to your project?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
