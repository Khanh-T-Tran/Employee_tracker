const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// install environmental variable env to prevent pushing sensitive info
require('dotenv').config();

// setting up connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'employee_db',
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to database successful!!');
    startApp();
});

// Function prompt image showcase
startApp = () => {
    console.log("***********************************")
    console.log("*                                 *")
    console.log("*        EMPLOYEE TRACKER         *")
    console.log("*                                 *")
    console.log("***********************************")
    promptUser();
};

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
                showDepartments();
            }

            if (choices === "View all roles") {
                showRoles();
            }

            if (choices === "No Action") {
                connection.end()
            };
        });
};

function showDepartments() {
    connection.query(`SELECT * FROM department`, function (err, results) {
        if (err) {
            console.log(err);
        }
        console.table(results);
        startApp();
    })

}

