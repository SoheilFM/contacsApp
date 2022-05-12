const express = require("express");
const app = express();
const router = express.Router();
const contactController = require("../controllers/contactController");
const contactsModel = require("../model/contactsModel");

router.post("/register", async (req, res) => {
    const contacts = new contactsModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
    });
    try {
        const savedContacts = await contactsModel.save();
        res.send(savedContacts);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
