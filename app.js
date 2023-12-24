const express = require("express");
const cors=require("cors")
const app = express();
app.use(cors())
app.use(express.json());

require("./Connection/connection");

const employee = require("./Routes/Employee");
const user = require('./Routes/User');


app.use('/', user);
app.use("/", employee);


app.listen(1000, (req, res) => {
  console.log("Server listening");
});
