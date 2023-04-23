const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const wbm = require("wbm");

const bookingroute = require("./routes/bookings");
const testroute = require("./routes/tests");
const adminroute = require("./routes/admin");
const EmployeeRoute = require("./routes/employees");

app.use(bodyparser.json());
const path = require("path");
let dbconnection = require("./auth");

app.get("/", (req, res) => {
  res.send("Welcome to Well Be");
});

app.use("/api/bookings/", bookingroute);
app.use("/api/tests/", testroute);
app.use("/api/admin", adminroute);
app.use("/api/employees/", EmployeeRoute);

const port = 9900;

app.listen(port, () => {
  console.log("Server started of Well Be");
});
