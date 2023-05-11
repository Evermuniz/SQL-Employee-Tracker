const inquirer = require('inquirer');

class CLI {
  run() {
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
      .then((answers) => {
        console.log(`User selected: ${answers.options}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

module.exports = CLI;