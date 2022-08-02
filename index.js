const mysql = require('mysql2');
// var db = require('mysql2-promise')();
const inquirer = require('inquirer');
const cTable = require('console.table');

// install environmental variable env to prevent pushing sensitive info
require('dotenv').config();

// setting up connection to database
const query = sql => {
    return new Promise((resolve, reject) => {
        let connection = mysql.createConnection({
            host: 'localhost',
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: 'employee_db',
        });
        connection.query(sql, (err, rows) => {
            if (err) {
                connection.end();
                reject(err);
            }
            else {
                connection.end();
                resolve(rows);
            }
        });
    });
}

// prompt user for the first choice
const promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: ['View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
            ]
        }
    ])
        .then((answers) => {
            const { choices } = answers;

            if (choices === "View all departments") {
                showDepartments()
            }

            if (choices === "View all roles") {
                showRoles();
            }

            if (choices === "View all employees") {
                showEmployees();
            }

            if (choices === "Add a department") {
                addDepartment();
            }

            if (choices === "Add a role") {
                addRole();
            }
        
            if (choices === "Add an employee") {
                addEmployee();
            }
        
            if (choices === "Update an employee role") {
                updateEmployee();
            }

            if (choices === "No Action") {
                connection.end()
            };
        });
};

// function show all departments data
function showDepartments() {
    query(`SELECT * FROM department`).then(function (data) {
       console.table(data);
    }).then(function () {
        promptUser();
    })
}

// function show all roles data
function showRoles() {
    query(`SELECT * FROM role`).then(function (data) {
       console.table(data);
    }).then(function () {
        promptUser();
    })
}

// function show all employees data
function showEmployees() {
    query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department,
    role.salary,
    CONCAT(manager.first_name, ' ', manager.last_name) AS Manager
    FROM employee
    LEFT JOIN role on employee.role_id = role.id
    LEFT JOIN department on role.department_id = department.id
    LEFT JOIN employee manager on manager.id = employee.manager_id`).then(function (data) {
       console.table(data);
    }).then(function () {
        promptUser();
    })
}

// Function prompt image showcase
startApp = () => {
    console.log("***********************************")
    console.log("*                                 *")
    console.log("*        EMPLOYEE TRACKER         *")
    console.log("*                                 *")
    console.log("***********************************")
    promptUser();
};

startApp();