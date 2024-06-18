// Import mysql2 and inquirer
const mysql = require('mysql2');
const {prompt} = require('inquirer');

const generateDB = require('./utils/generateDB')

const menuPrompt = [
    {
        type: "list",
        name: "dbmenu",
        message: "What would you like to view?",
        choices: ["View all departments", "View all roles", "View all employees",]
    }
]

function init() {
    prompt(menuPrompt)
    .then((answers)=>{console.log(answers),
    generateDB(answers)
    })
}

init()
