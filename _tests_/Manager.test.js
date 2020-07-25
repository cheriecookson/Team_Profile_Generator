const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('bob', 9, `bob@email`, 1212221148);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));
  });
