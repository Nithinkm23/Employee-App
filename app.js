// Task1: initiate app and run server at 3000

const express = require("express")
const app = new express
const morgan = require("morgan") 
const api = require("./routes/data")

const path = require('path');
app.use(express.static(path.join(__dirname + '/dist/FrontEnd')));
app.use(morgan("dev"))
app.use("/api", api)

require("dotenv").config()
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
})

// Task2: create mongoDB connection 


require("./db/mongodb")

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below


 




//TODO: get data from db  using api '/api/employeelist'

const EmpData=require('./model/employeeData');
 

//TODO: get single data from db  using api '/api/employeelist/:id'


 


//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}






//TODO: delete a employee data from db by using api '/api/employeelist/:id'





//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}


//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
}); 


