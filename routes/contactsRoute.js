const express = require("express");
const app = express();
const router = express.Router();
const contactsModel = require("../model/contactsModel");
const contactsController = require("../controllers/contactController");
//Get ALL CONTACTS
router.get("/", contactsController.getAllContacts);
//Create Contacts
router.post("/create", contactsController.createContact);

//Specefic Contact
router.get("/findcontact", contactsController.findContact);

//update Contact
router.patch("/updateContact/:contactid", contactsController.updateContact);

//Remove A Contact
router.delete("/deleteContact/:contactid", contactsController.deleteContact);

module.exports = router;
