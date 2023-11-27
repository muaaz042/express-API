const express = require("express");
const app = express();
app.use(express.json());
const employees = [
  { id: 1, name: "Muaaz Ahmad", position: "Manager" },
  { id: 2, name: "Izhar Ahmad", position: "Backend-Developer" },
  { id: 3, name: "Muhammad Nouman", position: "Frontend-Developer" },
];

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/employees", function (req, res) {
  res.send(employees);
});

app.get("/api/employees/:id", function (req, res) {
  const employee = employees.find((emp) => emp.id === parseInt(req.params.id));
  if (!employee) return res.status(404).send("Employee not found");
  res.send(employee);
});

app.put("/api/employees/:id", function (req, res) {
  const employee = employees.find((emp) => emp.id === parseInt(req.params.id));
  if (!employee) return res.status(404).send("Employee not found");

  employee.name = req.body.name || employee.name;
  employee.position = req.body.position || employee.position;

  res.send(employee); 
});

app.delete("/api/employees/:id", function (req, res) {
  const index = employees.findIndex((emp) => emp.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("Employee not found");

  employees.splice(index, 1);
  res.send(employees);
});

app.post("/api/employees", function (req, res) {
  const newEmployee = {
    id: employees.length + 1,
    name: req.body.name,
    position: req.body.position,
  };

  employees.push(newEmployee);
  res.send(employees);
});

app.listen(3000 ,( )=>{
    console.log("Server is listening on port number 3000")
});
