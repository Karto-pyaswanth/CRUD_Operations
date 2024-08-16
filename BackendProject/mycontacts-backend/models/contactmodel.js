const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    age: {
        type: Number, 
        required: [true, "Please add the age"],
    },
    email: {
        type: String,
        required: [true, "Please add email"],
        unique: true, 
    },
    phone: {
        type: String,
        required: [true, "Please add phone number"],
        unique: true,
    },

}, {
    timestamps: true 
});

module.exports = mongoose.model("Contact", contactSchema);
