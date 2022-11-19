

// TODO: Include packages needed for this application
// need the const fs variable here
const fs = require("fs");

// call inquirer variable here
const inquirer = require("inquirer");

// need a markdown js file here
const generateMarkdown = require("./utils/generateMarkdown");

function licenseSection(licenseValue) {
    if (licenseValue === "GNU") {
  return "[![License: GNU GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (licenseValue === "Apache") {
  return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (licenseValue === "Boost") {
  return "[![License: Boost 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (licenseValue === "MIT") {
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
};

// TODO: Create an array of questions for user input
const questions = [
    // Title
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: validateInput,
    },
    // Description of Project
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project.",
        validate: validateInput,
    },

    // Table of Contents goes here

    // Installation Method
    {
        type: "input",
        name: "installation",
        message: "Explain how to install the project.",
        validate: validateInput,
    },

    // How to Use
    {
        type: "input",
        name: "usage",
        message: "Describe how the project is used.",
        validate: validateInput,
    },

    // Choosing a License 
    {
        type: "list",
        name: "licenseValue",
        message: "Pick a license for this project.",
        choices: [
            "GNU",
            "Apache",
            "Boost",
            "MIT",
        ],
        validate: validateInput,
    },

    // How to Contribute
    {
        type: "input",
        name: "contributing",
        message: "Tell users how to contribute to this project.",
        validate: validateInput,
    },

    // Test Instructions
    {
        type: "input",
        name: "tests",
        message: "Enter testing instructions (if any).",
        validate: validateInput,
    },

    // QUESTIONS section -- github username
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
        validate: validateInput,
    },

    // QUESTIONS section -- email address
    {
        type: "input",
        name: "userEmail",
        message: "What is your GitHub email address that contributors may contact?",
        validate: function (value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true;
            } else {
                return "Not a valid email address. Please enter a valid email address.";
            }
        },
    },
];

// Validate Input
function validateInput(value) {
    if (value != "") {
        return true;
    } else {
        return "Please answer the question with some kind on input.";
    }
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.license = licenseSection(data.licenseValue);
        writeToFile("./example/README.md", data);
    });
}

// Function call to initialize app
init();
