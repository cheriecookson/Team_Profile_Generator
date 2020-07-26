const inquirer = require('inquirer'); 
const fs = require('fs');
const generatePage = require(`./src/helpercode-template.js`);
const addHtml = require(`./src/helpercode-template.js`);

const employee = [];

function generateProfile() {
  generatePage();
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
        roleInfo = `GitHub Username`;
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
        type: `list`,
        name: "moreEmployees",
        message: `Would you like to add employees?`,
        choices: [`yes`, `no`]
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
      employee.push(newEmployee);
      addHtml(newEmployee)
      .then(function() {
          if (moreEmployees === "yes") {
              addEmployee();
          } else {
              finishHtml();
          }
      });

    });
  });
};


function finishHtml() {

    fs.appendFile('./dist/index.html', generatePage(), err => {
      if (err) throw err;
    });
  
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) throw err;
    });
  
  };

  generateProfile();
     


