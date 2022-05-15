const http = require("http");
const express = require("express");
const app = express();
const router = express.Router();
const morgan = require("morgan");
const bodyParser = require("body-parser");
//Import Contacts Route
const contactsRoute = require("./routes/contactsRoute");

//MORGAN MIDDLEWARES
app.use(morgan("dev"));

//MiddleWares
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
//add BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Route MiddleWares
app.use("/api/contacts", contactsRoute);
module.exports = app;
