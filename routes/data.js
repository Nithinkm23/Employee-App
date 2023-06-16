const express = require("express")
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }))


const EmpData=require('../model/employeeData');
 




router.post('/employeelist',async (req,res)=>{
    try {
        const item = req.body;
        const newdata = new EmpData(item);
        const savedData = await newdata.save();
        res.status(200).json("Post Success");
    } catch (error) { 
        console.log(error);
       res.status(400).json("Post unsuccessful");
        
    }
})
module.exports = router;       