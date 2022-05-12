const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: "A New Contact Must Have a First Name.",
        ture,
        min: 4,
        max: 10,
    },
    lastName: {
        type: String,
        required: "A New Contact Must Have a Last Name.",
        ture,
        min: 4,
        max: 10,
    },
    mobile: {
        type: String,
        required: "A New Contact Must Have a Number.",
        ture,
        min: 10,
        max: 14,
    },
    email: {
        type: String,
        min: 8,
        max: 255,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Contacts", contactsSchema);
