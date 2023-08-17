const mongoose = require("mongoose")
const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    }
})
const employeeData = mongoose.model('employeeLists', employeeSchema)
module.exports = employeeData;  