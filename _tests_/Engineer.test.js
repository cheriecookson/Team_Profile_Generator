const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
    const engineer = new Engineer('bob', 9,`bob@email`, `bobgit`, `Engineer`);
    expect(engineer.github).toEqual(expect.any(String));
  });

  test(`gets employee GitHub username`, () => {
    const engineer = new Engineer(`bobgit`);
    expect(engineer.getGitHub()).toEqual(expect.any(String));
});

test(`gets employee role`, () => {
  const engineer = new Engineer(`Engineer`);
  expect(engineer.getRole()).toEqual(expect.any(String));
});