// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs, { writeFile } from "fs"

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "Please enter your project's title", 
        name: "title"
    },
    {
        message: "Please enter a discription of your project.",
        name: "description"
    },
    {
        message: "Please enter instalation instructions",
        name: "instalation"
    },
    {
        message: "Please enter usage instructions.",
        name: "instructions",
    },
    {
        message: "Please enter contribution guidelines.",
        name: "guidelines"
    },
    {
        message: "Please enter test instructions",
        name: "test"
    },
    {
        type: "list",
        message: "Please select your license",
        choices: ["Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License", "BSD 2-Clause License", "CC0", "Attribution 4.0 International", "Attribution-ShareAlike 4.0 International", "Attribution-NonCommercial 4.0 International", "Attribution-NoDerivates 4.0 International", "Attribution-NonCommmercial-ShareAlike 4.0 International", "Attribution-NonCommercial-NoDerivatives 4.0 International", "Eclipse Public License 1.0", "GNU GPL v3", "GNU GPL v2", "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3", "The Hippocratic License 2.1", "The Hippocratic License 3.0", "IBM Public License Version 1.0", "ISC License (ISC)", "The MIT License", "Mozilla Public License 2.0", "Attribution License (BY)", "Open Database License (ODbL)", "Public Domain Dedication and License (PDDL)", "The Perl License", "The Artistic License 2.0", "SIL Open Font License 1.1", "The Unlicense", "The Do What the Fuck You Want to Public License", "The zlib/libpng License"],
        name: "license"
    },
    {
        message: "Please enter your GitHub user name.",
        name: "questions1"
    },
    {
        message: "Please enter your E-mail address.",
        name: "questions2"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) => err ? console.log(err) : console.log('success'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response => writeToFile(`${response.title}.md`, generateMarkdown(response))))
}

// Function call to initialize app
init();
