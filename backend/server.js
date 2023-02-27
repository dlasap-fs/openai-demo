//require express, dotenv and set up port from env file
//import cors
const cors = require("cors");
const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

//set up basic express middleware and require cors
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors()); // enable CORS

const contactRoutes = require("./routes/contact-routes");

//call database.js
const database = require("./database");
database();

app.use("/api", contactRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
