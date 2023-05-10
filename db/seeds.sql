INSERT INTO department (id, name)
VALUES  (1, 'HR'),
        (2, 'Sales'),
        (3, 'IT'),
        (4,'Finance'),
        (5, 'Legal');

INSERT INTO role (id, title, salary, department_id)
VALUES  (100, 'HR Manager', 120000, 1),
        (101, 'HR Assistant', 85000, 1),
        (200, 'Sales Director', 150000, 2),
        (201, 'Salesperson', 50000, 2),
        (300, 'Lead Engineer', 165000, 3),
        (301, 'Junior Engineer', 100000, 3),
        (400, 'Lead Accountant', 80000, 4),
        (401, 'Accountant', 60000, 4),
        (500, 'General Counsel', 150000, 5),
        (501, 'Paralegal', 70000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (1001, 'Bruce', 'Wayne', 100, NULL),
        (1002, 'Harvey', 'Dent', 101, 1001),
        (1003, 'Peter', 'Parker', 200, NULL),
        (1004, 'Mary', 'Jane', 201, 1003),
        (1005, 'Tony', 'Stark', 300, NULL),
        (1006, 'Bruce', 'Banner', 301, 1005),
        (1007, 'Thor', 'Odinson', 400, NULL),
        (1008, 'Wanda', 'Maximoff', 401, 1007),
        (1009, 'Severus', 'Snape', 500, NULL),
        (1010, 'Tom', 'Riddle', 501, 1009);