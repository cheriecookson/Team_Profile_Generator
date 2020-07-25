const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
    const engineer = new Engineer('bob', 9,`bob@email`, `bobgit`);
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
  });
