//Define and export the Manager class. Class should inherit from Employee.

const Employee = require("./Employee.js")

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
getOfficeNumber(){
    return this.officeNumber
    }

getRole(){
    return "Manager"
    }
}

module.exports = Manager