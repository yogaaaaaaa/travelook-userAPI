require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  });
const express = require("express");
const app = express();

//import routes
const userRoutes = require("./routes/authRoutes.js");


// Body parser
app.use(express.json()); // Enable json req.body
app.use(
  express.urlencoded({
    extended: true,
  })
); // Enable req.body urlencoded

//import errorHandler = require("./")
const errorHandler = require("./middlewares/errorHandler")


// To read form-data
// app.use(fileUpload());

//statuc folder for images
app.use(express.static("public"))

//make routes
app.use("/auth", userRoutes);


if (process.env.NODE_ENV !== "test") {
  // Running server
  // let PORT = 3000 || process.env.PORT;
  app.listen(3000, () => console.log(`Server running on 3000!`));
}


// let PORT = 3000 || process.env.PORT;
//   app.listen(PORT, () => console.log(`Server running on ${PORT}!`));


module.exports = app;

