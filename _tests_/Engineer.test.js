const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
    const engineer = new Engineer('bob', 9,`bob@email`, `bobgit`);
    expect(engineer.github).toEqual(expect.any(String));
  });

  test(`gets employee Github username`, () => {
    const engineer = new Engineer('bob', 9,`bob@email`, `bobgit`);
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test(`gets employee role`, () => {
  const engineer = new Engineer('bob', 9,`bob@email`, `bobgit`);
  expect(engineer.getRole()).toBe('Engineer');
});