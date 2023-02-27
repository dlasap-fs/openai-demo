//Require express and create a routes for adding contact, getting all contact, updating contact and deleting contact from contact controller folder

const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact-controllers");

// Add Contact Route
router.post("/add", contactController.addContact);

// Get All Contacts Route
router.get("/getAllContacts", contactController.getAllContacts);

// Update Contact Route
router.put("/update/:id", contactController.updateContact);

// Delete Contact Route
router.delete("/delete/:id", contactController.deleteContact);

module.exports = router;
