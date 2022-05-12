const express = require("express");
const app = express();
const router = express.Router();
const contactController = require("./../controllers/contactController");

router.route("/").get(contactController.getAllUsers);

module.exports = router;