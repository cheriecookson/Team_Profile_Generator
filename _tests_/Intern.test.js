const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
    const intern = new Intern('bob', 9,`bob@email`, `Texas Tech`);
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
  });
