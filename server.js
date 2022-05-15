const http = require("http");
const express = require("express");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/dot.env" });
require("./dot.env");
const bodyParser = require("body-parser");
//Import Route
const contactsRoute = require("./routes/contactsRoute");
//Import DATABASE
const mongoose = require("mongoose");
//add BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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
//MiddleWares
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
//Route MiddleWares
app.use("/api/contacts", contactsRoute);

app.listen(process.env.PORT, () => {
  console.log("The Server is up And Running on port 3000");
});
