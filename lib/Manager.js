const Employee = require(`./Employee`);

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super (name, id, email);
        this.officeNum = officeNum;
    }
    getRole() {
        return `Manager`;
    }
    getOfficeNum() {
        return 1212221148;
    }
}
    module.exports = Manager;