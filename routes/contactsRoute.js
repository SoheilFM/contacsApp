const express = require("express");
const app = express();
const router = express.Router();
const contactsModel = require("../model/contactsModel");
const contactsController = "./../controllers/contactsController";

//.get(contactsController.getAllContacts)
//router.route("/create").post(contactsController.createContact);
// router
//   .route("/:id")
//   .get(contactsController.getContact)
//   .patch(contactsController.updateContact)
//   .delete(contactsController.deteleContact);

router.post("/create", async (req, res) => {
  try {
    const contacts = new contactsModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mobile: req.body.mobile,
      email: req.body.email,
    });
    const savedContacts = await contacts.save();
    res.send(savedContacts);
    console.log(req.body);
    console.log(savedContacts);
  } catch (err) {
    res.status(400);
  }
});

module.exports = router;
