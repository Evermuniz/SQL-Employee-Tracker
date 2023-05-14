const mysql = require("mysql2");
const inquirer = require("inquirer");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "company_db",
});

db.query(`SOURCE schema.sql;`, function (err, results) {
  console.log("Database and tables loaded");
});

db.query(`SOURCE seeds.sql;`, function (err, results) {
  console.log("Data loaded");
});

inquirer
  .prompt([
    {
      name: "options",
      message: "What would you like to do?",
      type: "list",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
      ],
    },
  ])
  .then((answer) => {
    if ((answer = "View all departments")) {
      db.promise()
        .query(
          `SELECT id, name
                FROM department;`
        )
        .then(([rows, fields]) => {
          console.table(rows);
        })
        .catch(console.log)
        .then(() => db.end());
    }
  });

// db.query(
//   `SELECT
//                 employee.id,
//                 employee.first_name,
//                 employee.last_name,
//                 role.title,
//                 department.name,
//                 role.salary,
//                 CONCAT(manager.first_name, ' ', manager.last_name) AS manager

//             FROM employee

//             JOIN role on employee.role_id = role.id
//             JOIN department on role.department_id = department.id
//             LEFT JOIN employee as manager on manager.manager_id = employee.id;`,
//   function (err, results) {
//     console.table(results);
//     cli.run();
//   }
// );
