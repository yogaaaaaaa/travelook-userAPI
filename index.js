require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,

});

const app = express();
const express = require("express");
const fileUpload = require("express-fileupload");

//import routes
const userRoutes = require("./routes/userRoutes.js");

app.use(json());

app.use({ extended: true });

// To read form-data
app.use(fileUpload());

//statuc folder for images
app.use(express.static("public"))

//make routes
app.use("/user", userRoutes);


module.exports = app;

