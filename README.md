
# Employee Tracker 
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
## Description
    This content management systems (CMS) interface allows non-developers to easily view and interact with information stored in databases, to manage a company's employee database. It utilize Node.js, Inquirer, and MySQL.

## User Story
    AS A business owner
    I WANT to be able to view and manage the departments, roles, and employees in my company
    SO THAT I can organize and plan my business

## Acceptance Criteria
    GIVEN a command-line application that accepts user input
    WHEN I start the application
    THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
    WHEN I choose to view all departments
    THEN I am presented with a formatted table showing department names and department ids
    WHEN I choose to view all roles
    THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
    WHEN I choose to view all employees
    THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    WHEN I choose to add a department
    THEN I am prompted to enter the name of the department and that department is added to the database
    WHEN I choose to add a role
    THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
    WHEN I choose to add an employee
    THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    WHEN I choose to update an employee role
    THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Table of Contents
  * [Installation and Usage](#installation-and-usage)
  * [Questions](#questions)
  * [Contribution](#contribution)
  * [Demo](#videodemo)
 
## Installation and Usage
    Open db folder terminal to access database
    Run ```mysql -u root -p``` to get into mysql
    Run ```source schema.sql``` then ```source seeds.sql``` to seed database
    Go back to Employee_tracker foler in terminal and run ```node index.js```   

## Questions
    

Find me on GitHub: [Khanh-T-Tran](https://github.com/Khanh-T-Tran)<br />

Any question related to the project, feel free to contact:<br />
  - [khanhtuantran@outlook.com](mailto:khanhtuantran@gmail.com)
  - [My github](https://github.com/Khanh-T-Tran)

## Contribution
  Please contact creator through Github.<br>
  This assignment was nicely done with the help and explaination of TAs Scott, Luigi, Matthew and a good instruction of my instructor Emmanuel (Manny).
  
## Video_demo
https://drive.google.com/file/d/1XDroum_Kp8HFY3AQ3hDEbcg6S8-6Scvo/view


