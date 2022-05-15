const http = require("http");
const express = require("express");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/dot.env" });
require("./dot.env");

//Import Route
const contactsRoute = require("./routes/contactsRoute");
//Import DATABASE
const mongoose = require("mongoose");

//Connect to DATABASE:
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected To DB");
  }
);

app.listen(process.env.PORT, () => {
  console.log("The Server is up And Running on port 3000");
});
