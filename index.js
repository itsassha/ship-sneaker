const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const console = require("console");

const app = express();
const port = 3000;

// connect other folder's
const config = require("./config/db");

// connect db.js
mongoose.connection.on('connected', () => {
    console.log("Connecting to database - ***success***");
});
mongoose.connection.on('error', (err) => {
    console.log("Connecting to database - ***error***, more:" + err);
});

// connect static folder
app.use(express.static(path.join(__dirname, 'public')));

// start server (nodemon)
app.listen(port, () => {
    console.log("The server was started on the port: " + port);
});
