const inquirer = require("inquirer");

const questions = [

    inquirer.prompt([

        {
            type: "input",
            message: "What is your Github username?",
            name: "username",
        },

        {
            type: "input",
            message: "What is your Github email?",
            name: "email",
        },

        {
            type: "input",
            message: "Give your project a title",
            name: "title",
        },

        {
            type: "input",
            message: "Describe your project",
            name: "description",
        }

    ]),
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
