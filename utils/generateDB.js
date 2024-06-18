const mysql = require('mysql2')
const inquirer = require('inquirer')

function mainMenu(dbmenu) {
    if (dbmenu ==="View all departments") {
        viewDepartments
    }
};

function mainMenu(dbmenu) {
    if (dbmenu ==="View all roles") {
        viewRoles
    }
};

function mainMenu(dbmenu) {
    if (dbmenu ==="View all employees") {
        viewEmployees
    }
};


//to call info from db/schema
async function viewDepartments() {
    const viewDepartmentDB = `SELECT * FROM department;`
    const [results, data] = await db.query(viewDepartmentDB)
    console.table(results)
};
async function viewRoles() {
    const viewRolesDB = `SELECT * FROM role;`
    const [results, data] = await db.query(viewRolesDB)
    console.table(results)
};
async function viewEmployees() {
    const viewEmployeeDB = `SELECT * FROM employee;`
    const [results, data] = await db.query(viewEmployeeDB)
    console.table(results)
};

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'password',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );
  
  