const inquirer = require('inquirer'); 
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatePage = require(`./src/helpercode-template.js`);
const { writeFile, copyFile } = require('./utils/generate-site');

const employees = [];

function generateProfile() {
  
  addEmployee();
}

function addEmployee() {
  inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter employee name',
      },
      {
        type: 'list',
        name: 'role',
        message: 'Select employee role',
        choices: ['Engineer', 'Intern', `Manager`]
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter employee id',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter employee email address',
      }    
    ])
    .then(function({name, role, id, email}) {
      let roleInfo = ``;
      if (role === `Engineer`) {
        roleInfo = `Github Username`;
      } else if (role === `Intern`) {
        roleInfo = `School Name`;
      } else {
        roleInfo = `Office Phone Number`;
      }
      inquirer.prompt([{
        message: `Enter employee's ${roleInfo}`,
        name: "roleInfo"
    },
    {
        type: `confirm`,
        name: "moreEmployees",
        message: `Would you like to add employees?`,
        default: true
    }])
    .then(function({roleInfo, moreEmployees}) {
      let newEmployee;
      if (role === "Engineer") {
          newEmployee = new Engineer(name, id, email, roleInfo);
      } else if (role === "Intern") {
          newEmployee = new Intern(name, id, email, roleInfo);
      } else {
          newEmployee = new Manager(name, id, email, roleInfo);
      }
      employees.push(newEmployee);
      addOrGenerate(moreEmployees);



    });
  });
};
function addOrGenerate(ans) {
  if (ans == true) {
    addEmployee();
  } else {
    writeFile(generatePage(employees));
    return false;
  }
}

generateProfile()



