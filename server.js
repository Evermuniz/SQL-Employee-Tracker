const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();
const CLI = require('./lib/cli');
const cli = new CLI();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "company_db",
  },
  console.log(`Connected to the company_db database.`)
);


app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

db.query(
    `SOURCE schema.sql;`,
    function (err, results) {
  console.log('Database and tables loaded');
});

db.query(`SOURCE seeds.sql;`, function (err, results) {
  console.log('Data loaded');
});



db.query(   `SELECT 
                employee.id, 
                employee.first_name, 
                employee.last_name, 
                role.title, 
                department.name, 
                role.salary, 
                CONCAT(manager.first_name, ' ', manager.last_name) AS manager

            FROM employee

            JOIN role on employee.role_id = role.id 
            JOIN department on role.department_id = department.id
            LEFT JOIN employee as manager on manager.manager_id = employee.id;`,
            function (err, results) {
                console.table(results);
                cli.run();
            });


