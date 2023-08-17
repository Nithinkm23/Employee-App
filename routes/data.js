const express = require("express")
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }))


const EmpData = require('../model/employeeData');


//TODO: get data from db  using api '/api/employeelist'

router.get("/employeelist", async (req, res) => {
    try {
        const data = await EmpData.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json("Can't Get Data")
    }
}) 

//TODO: get single data from db  using api '/api/employeelist/:id'
router.get("/employeelist/:id", async (req, res) => {
    try {
        let id = req.params.id;
        const data = await EmpData.findOne({ _id: id });
        res.status(200).json(data)
        console.log(id);
    } catch (error) {
        console.log(error);
        res.send("Error")
    }
})

//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

router.post('/employeelist', async (req, res) => {
    try {
        const item = req.body;
        const newdata = new EmpData(item);
        await newdata.save();
        res.status(200).json("Post Success");
    } catch (error) {
        console.log(error);
        res.status(400).json("Post unsuccessful");

    }
})

//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
router.put("/employeelist", async (req, res) => {
    try {
        let idx=req.body._id;
           console.log(idx);
           let updateData={$set:req.body};
           const updatedPut =await EmpData.findByIdAndUpdate(idx,updateData);
           res.send(updatedPut);
           res.status(200);
        
    } catch (error) {
        console.log(error);
        res.send('Error')
    }
})

//TODO: delete a employee data from db by using api '/api/employeelist/:id'

router.delete("/employeelist/:id", async (req, res) => {
    try {
        let id = req.params.id;
        console.log("ID check", id);

        await EmpData.findByIdAndDelete(id)
        res.json("Deleted Successfully")
    } catch (error) {
        console.log(error);
        res.send('Error')
    }
})
module.exports = router;       