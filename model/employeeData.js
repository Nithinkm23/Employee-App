const mongoose = require("mongoose")
const employeeSchema = mongoose.Schema({
    name: String,
    location: String,
    position: String,
    salary: Number
})
const employeeData = mongoose.model('employeeList', employeeSchema)
module.exports = employeeData; 