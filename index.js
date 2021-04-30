require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  });
const express = require("express");
const fileUpload = require("express-fileupload");

//import routes
const userRoutes = require("./routes/authRoutes.js");

const app = express();

// Body parser
app.use(express.json()); // Enable json req.body
app.use(
  express.urlencoded({
    extended: true,
  })
); // Enable req.body urlencoded

// To read form-data
app.use(fileUpload());

//statuc folder for images
app.use(express.static("public"))

//make routes
app.use("/auth", userRoutes);

let PORT = 3000 || process.env.PORT;
  app.listen(PORT, () => console.log(`Server running on ${PORT}!`));


module.exports = app;

