const inquirer = require('inquirer'); 
const fs = require('fs');
const generatePage = require(`./src/helpercode-template.js`);


  fs.writeFile('./dist/index.html', generatePage(), err => {
    if (err) throw err;
  });

  fs.copyFile('./src/style.css', './dist/style.css', err => {
    if (err) throw err;
  });

  
   
  inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter team manager name',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter team manager name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter employee id',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter employee id!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter email address',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNum',
        message: 'Enter office phone number',
        validate: officeNumInput => {
          if (officeNumInput) {
            return true;
          } else {
            console.log('Please enter office phone number!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'addEmployee',
        message: 'Add employee or finish building team',
        choices: ['Engineer', 'Intern']
      },
    ]);



