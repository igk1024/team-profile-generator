//Define and export the Engineer class. Class should inherit from Employee.

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, id, gitHub) {
        super(name, email, id)
        this.title = "Engineer";
        this.gitHub = gitHub;
    }
    getGithub(){
        return this.gitHub;
    }
}

module.exports = Engineer;