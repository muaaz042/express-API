const express = require("express");
const app = express();
require("./Connection/connection");

const employee = require("./Routes/Employee");

app.use(express.json());

app.use("/", employee);

app.listen(1000, (req, res) => {
  console.log("Server listening");
});