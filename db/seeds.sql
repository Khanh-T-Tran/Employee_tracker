
INSERT INTO department (name,id)
VALUES
("Sales",1),
("Engineering",2),
("Finance",3),
("Legal and Management",4);

INSERT INTO role (title, salary, department_id)
VALUES
("Salesperson", 80000, 1),
("Sales Lead", 100000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Accountant", 130000, 3),
("Legal consultant", 190000, 4),
("Engineer manager", 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Jon", "Pertwee", 3, NULL),
("David", "Tennant", 4, 1),
("Lis", "Sladen", 6, NULL),
("Sarah", "Sutton", 2, NULL),
("Peter", "Capaldi", 1, 4);