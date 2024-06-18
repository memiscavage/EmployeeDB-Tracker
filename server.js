// Import mysql2 and inquirer
const mysql = require('mysql2');
const inquirer = require('inquirer');

const generateDB = require('./utils/generateDB')

const menuPrompt = [
    {
        type: "list",
        name: "dbmenu",
        message: "What would you like to view?",
        choices: ["View all departments", "View all roles", "View all employees", "Quit"]
    }
]

module.exports = menuPrompt