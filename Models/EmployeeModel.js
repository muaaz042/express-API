const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
});

module.exports = new mongoose.model("EmployeeSchema", employeeSchema);