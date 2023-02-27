//Create a schema named Contact with the properties of first_name,last_name,billing_address,and physical_address,created_date, updated_date and export it

const mongoose = require("mongoose");
const ContactSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  billing_address: {
    type: String,
    required: true,
  },
  physical_address: {
    type: String,
    required: true,
  },
  created_date: {
    type: Number,
    default: Date.now,
    required: false,
  },
  updated_date: {
    type: Number,
    default: Date.now,
    required: false,
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
