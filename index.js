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
        case "Update an employee role":
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
          console.log('New department added.');
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
          console.log('New role added.');
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
            console.log('New employee added.');
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

function updateEmpRole() {
  inquirer.prompt(updateRole)
    .then((body) => {
      db.query(
        'UPDATE employees SET role_id = ? WHERE id = ?',
        [body.roleID, body.employeeID], (error, result) => {
          if (error) {
            throw error;
          } else {
            runItBack();
          }
      });
    });
}

function runItBack() {
  inquirer.prompt(newTask)
    .then((body) => {
      if (body.confirm) {
        init();
      } else {
        console.log('See you next time.');
        return;
      }
    });
}

init();