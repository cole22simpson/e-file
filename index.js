const inquirer = require('inquirer');
const db = require('./db/connection');
const {
  chooseAction,
  addDept,
  addRole,
  addEmployee,
  updateRole,
  runItBack
} = require('./lib/questions');

function init () {
  inquirer.prompt(chooseAction)
    .then((answers) => {
      console.log(answers);
    })
    .catch((error) => {
      console.log(error);
    });
};

function newDept() {
  console.log("test");
}

init();