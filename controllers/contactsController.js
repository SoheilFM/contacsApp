const ContactsModel = require("./../model/contactsModel");
const express = require("express");
exports.createContact = async (req, res) => {
  try {
    const newContact = await ContactsModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        contact: newContact,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
