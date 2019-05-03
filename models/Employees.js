// Require mongoose

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    isAdmin: {
        type: Array
    },
    password: {
        type: String
    }
});

var Employees = mongoose.model("Employees", EmployeeSchema);

module.exports = Employees;