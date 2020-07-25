const fs = require('fs');
const generatePage = require(`./src/helpercode-template.js`);
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

  fs.writeFile('./dist/index.html', generatePage(name, github), err => {
    if (err) throw err;
  });

  fs.copyFile('./src/style.css', './dist/style.css', err => {
    if (err) throw err;
  });
