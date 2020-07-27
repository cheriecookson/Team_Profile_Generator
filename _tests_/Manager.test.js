const Manager = require('../lib/Manager.js');

test('office number to constructor argument', () => {
    const manager = new Manager('bob', 9, `bob@email`, 1212221148);
    expect(manager.officeNum).toEqual(expect.any(Number));
  });

  test(`gets manager office number`, () => {
    const manager = new Manager('bob', 9, `bob@email`, 1212221148);
    expect(manager.getOfficeNum()).toEqual(expect.any(Number));
  });

  test(`gets employee role`, () => {
    const manager = new Manager('bob', 9, `bob@email`, 1212221148);
    expect(manager.getRole()).toBe(`Manager`);
  });

