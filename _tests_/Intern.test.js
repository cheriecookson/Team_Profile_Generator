const Intern = require('../lib/Intern.js');

test('sets school with constructor argument', () => {
    const intern = new Intern('bob', 9,`bob@email`, `Texas Tech`, `Intern`);
    expect(intern.school).toEqual(expect.any(String));
  });

  test(`gets employee role`, () => {
    const intern = new Intern(`Intern`);
    expect(intern.getRole()).toEqual(expect.any(String));
  });

  test(`gets intern's school`, () => {
    const intern = new Intern(`Texas Tech`);
    expect(intern.getSchool()).toEqual(expect.any(String));
  });
  
