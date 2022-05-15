const express = require("express");
const app = express();
const router = express.Router();
const morgan = require("morgan");
app.use(morgan("dev"));

module.exports = app;
