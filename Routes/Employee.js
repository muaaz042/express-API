const router =  require('express').Router();
const employeeSchema = require('../Models/EmployeeModel')

router.get("/", async (req, res) => {
    try{
        console.log("here")
        let data;
        data = await employeeSchema.find();
        console.log(data)
        res.status(200).json({data})
    }catch(err){
        console.log(err)
    }
})

router.get("/employee/:id", async (req, res) => {
    let id = req.params.id;
    try{
        console.log("here")
        let data;
        data = await employeeSchema.findById(id);
        console.log(data)
        res.status(200).json({data})
    }catch(err){
        console.log(err)
    }
})

router.post("/add", async (req, res) => {
    try {
      const data = req.body;
      console.log(data)
      const newEmployee = new employeeSchema(data);
      await newEmployee.save().then(() => {
        res.status(200).json({ message: "Item added successfully" });
      });
    } catch (error) {
      console.log(error);
    }
});

router.put("/update/:id", async (req, res) => {
    const ID = req.params.id;

    const { id,name,position } = req.body;

    let data;

    try {
      data = await employeeSchema.findByIdAndUpdate(ID, {
        id,
        name,
        position,
      });

      await data.save().then(() => {
        res.status(200).json({ message: "update successful" });
      });

    } catch (error) {
      console.log(error);
    }
  });
  
  router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
      await employeeSchema.findByIdAndDelete(id).then(() => {
    res.status(200).json({ message: "Deletion Success" });
      });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router