const contactsModel = require("../model/contactsModel");
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await contactsModel.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(400).send(err);
  }
};
exports.createContact = async (req, res) => {
  try {
    const contactExist = await contactsModel.findOne({
      mobile: req.body.mobile,
    });
    if (contactExist) return res.status(400).send("Conact already Exist");
    const contacts = new contactsModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mobile: req.body.mobile,
      email: req.body.email,
    });
    const savedContacts = await contacts.save();
    res.status(201).json({
      message: "YOU CREATE NEW CONTACT ",
      savedContacts,
    });
    //console.log(req.body);
    //console.log(savedContacts);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.findContact = async (req, res) => {
  try {
    //building Query
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    const query = contactsModel.find(queryObj);
    const contact = await query;
    if (!contact) return res.status(404).send("USER NOT FOUND!");
    res.status(200).json(contact);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updateContact = async (req, res) => {
  try {
    const updatecontact = await contactsModel.updateOne(
      { mobile: req.params.contactid },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          mobile: req.body.mobile,
          email: req.body.email,
        },
      }
    );
    res.status(200).json({
      message: "Updated Contact Info",
      updatecontact,
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const removedContact = await contactsModel.remove({
      mobile: req.params.contactid,
    });
    res.json({
      message: "Removed Contact",
      removedContact,
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
