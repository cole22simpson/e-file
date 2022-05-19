const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');
const {
  chooseAction,
  addDept,
  addRole,
  addEmployee,
  updateRole,
  newTask
} = require('./lib/questions');

function init () {
  inquirer.prompt(chooseAction)
    .then((answers) => {
      switch(answers.action) {
        case "View all departments":
          viewDepts();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a department":
          newDept();
          break;
        case "Add a role":
          newRole();
          break;
        case "Add an employee":
          newEmployee();
          break;
        case "Update an employee":
          updateEmpRole();
          break;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

function newDept() {
  inquirer.prompt(addDept)
    .then((body) => {
      db.query(
      'INSERT INTO departments (dept_name) VALUES (?)',
      [body.dept], (error, result) => {
        if (error) {
          throw error;
        } else {
          runItBack();
        }
      });
    });
}

function newRole() {
  inquirer.prompt(addRole)
    .then((body) => {
      db.query(
      'INSERT INTO roles (job_title, salary, dept_id) VALUES (?,?,?)',
      [body.roleTitle, body.roleSalary, body.roleDept], (error, result) => {
        if (error) {
          throw error;
        } else {
          runItBack();
        }
      });
    });
}

function newEmployee() {
  inquirer.prompt(addEmployee)
    .then((body) => {
      db.query(
        'INSERT INTO employees (first_name, last_name, role_id, manager) VALUES (?,?,?,?)',
        [body.firstName, body.lastName, body.role, body.manager], (error, result) => {
          if (error) {
            throw error;
          } else {
            runItBack();
          }
        });
    })
}

function viewDepts() {
  db.query(
    'SELECT * FROM departments',
    (error, res) => {
      if (error) {
        throw error;
      } else {
        console.table(res)
        runItBack();
      }
    }
  )
}

function viewRoles() {
  db.query(
    'SELECT * FROM roles LEFT JOIN departments ON roles.dept_id = departments.id',
    (error, res) => {
      if (error) {
        throw error;
      } else {
        console.table(res);
        runItBack();
      }
    }
  )
}

function viewEmployees() {
  db.query(
    'SELECT * FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.dept_id = departments.id',
    (error, res) => {
      if (error) {
        throw error;
      } else {
        console.table(res);
        runItBack();
      }
    }
  )
}

function runItBack() {
  inquirer.prompt(newTask)
    .then((body) => {
      if (body.confirm) {
        init();
      } else {
        return;
      }
    });
}

init();

// simple query
// db.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );