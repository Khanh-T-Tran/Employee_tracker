const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// setting up connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db'
  });


connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
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

