const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema({
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
