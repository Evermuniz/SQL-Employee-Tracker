-- delete database if it already exists --
DROP DATABASE IF EXISTS company_db; 
-- create a new database with the company_db name --
CREATE DATABASE company_db;
-- switch to the database --
USE company_db;

-- create a department table with id and name with the id as primary key and auto incrementing --
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- create a role table with id, title, salary, and deptartment_id. the role id if the primary key --
-- the department_id is referencing the department table for the foreign key --
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

-- create a new employee table with id, first, last names, role id, and manager id. --
-- the role_id references the role table and the manager_id references the same employee table --
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id),
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
);