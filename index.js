const mysql = require('mysql2');
// var db = require('mysql2-promise')();
const inquirer = require('inquirer');
const cTable = require('console.table');

// install environmental variable env to prevent pushing sensitive info
require('dotenv').config();

// setting up connection to database
// creates connection to sql database
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'employee_db',
});

// connects to sql server and sql database
connection.connect(function (err) {
    if (err) throw err;
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
            choices: [
                'View all departments',
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
    var query = 'SELECT * FROM department';
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table('All Departments:', res);
        promptUser();
    })
}

// function show all roles data
function showRoles() {
    var query = 'SELECT * FROM role';
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table('All Roles:', res);
        promptUser();
    })
}

// function show all employees data
function showEmployees() {
    var query = 'SELECT * FROM employee';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.log(res.length + ' employees found!');
        console.table('All Employees:', res); 
        promptUser();
    })
}

// function to add a department 
addDepartment = () => {
    inquirer
        .prompt([
            {
                name: 'newDepartment', 
                type: 'input', 
                message: 'Which department would you like to add?'
            }
            ]).then(function (answer) {
                connection.query(
                    'INSERT INTO department SET ?',
                    {
                        name: answer.newDepartment
                    });
                var query = 'SELECT * FROM department';
                connection.query(query, function(err, res) {
                if(err)throw err;
                console.log('Your department has been added!');
                console.table('All Departments:', res);
                promptUser();
                })
            })
};

// function to add a role
function addRole() {
    connection.query('SELECT * FROM department', function(err, res) {
        if (err) throw err;
    
        inquirer 
        .prompt([
            {
                name: 'new_role',
                type: 'input', 
                message: "What new role would you like to add?"
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What is the salary of this role? (Enter a number)'
            },
            {
                name: 'Department',
                type: 'list',
                choices: function() {
                    var deptArry = [];
                    for (let i = 0; i < res.length; i++) {
                    deptArry.push(res[i].name);
                    }
                    return deptArry;
                },
            }
        ]).then(function (answer) {
            let department_id;
            for (let a = 0; a < res.length; a++) {
                if (res[a].name == answer.Department) {
                    department_id = res[a].id;
                }
            }
    
            connection.query(
                'INSERT INTO role SET ?',
                {
                    title: answer.new_role,
                    salary: answer.salary,
                    department_id: department_id
                },
                function (err, res) {
                    if(err)throw err;
                    console.log('Your new role has been added!');
                    console.table('All Roles:', res);
                    promptUser();
                })
        })
    })
};



