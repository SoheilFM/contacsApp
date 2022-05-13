const mongoose = require("mongoose");
const validator = require("validator");

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "A New Contact Must Have a First Name."],
    min: 4,
    max: 10,
  },
  lastName: {
    type: String,
    required: [true, "A New Contact Must Have a Last Name."],
    min: 4,
    max: 10,
  },
  mobile: {
    type: String,
    required: [true, "A New Contact Must Have a Number."],
    unique: true,
    min: 10,
    max: 14,
  },
  email: {
    type: String,
    min: 8,
    max: 255,
    lowercase: true,
    validator: [validator.isEmail],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const ContactsModel = mongoose.model("ContactsModel", contactSchema);
module.exports = ContactsModel;
