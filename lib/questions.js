const chooseAction = [
  {
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role'
    ]
  }
];

const addDept = {
  type: 'input',
  name: 'dept',
  message: 'What is the name of this department?'
}

const addRole = [
  {
    type: 'input',
    name: 'roleTitle',
    message: 'What is the title of this role?'
  },
  {
    type: 'input',
    name: 'roleSalary',
    message: 'What is the salary of this role?'
  },
  {
    type: 'input',
    name: 'roleDept',
    message: 'What department does this role belong to?'
  }
]

const addEmployee = [
  {
    type: 'input',
    name: 'firstName',
    message: "What is this employee's first name?"
  },
  {
    type: 'input',
    name: 'lastName',
    message: "What is this employee's last name?"
  },
  {
    type: 'input',
    name: 'role',
    message: "What is this employee's role?"
  },
  {
    type: 'input',
    name: 'manager',
    message: "Who is this employee's manager?"
  }
]

const updateRole = [
  {
    type: 'input',
    name: 'employeeID',
    message: 'What is the ID of the employee whose role you want to update?'
  },
  {
    type: 'input',
    name: 'roleID',
    message: "What is the ID of this employee's new role?"
  }
]

const newTask = {
  type: 'confirm',
  name: 'confirm',
  message: 'Is there anything else you need to do?',
  default: false
}

module.exports = {
  chooseAction,
  addDept,
  addRole,
  addEmployee,
  updateRole,
  newTask
};