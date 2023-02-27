// import contact service from services folder

const contactService = require("../services/contact-services");
// Create an asynchronous const function named addContact with a req and res parameter which returns a json
exports.addContact = async (req, res) => {
  try {
    const new_contact = {
      ...req.body,
      created_date: new Date().getTime(),
      updated_data: new Date().getTime(),
    };
    const contact = await contactService.addContact(new_contact);
    return res.json({
      msg: "Success",
      data: contact,
    });
  } catch (err) {
    return res.json({ success: false, error: err });
  }
};
// Create a asynchronous function named getAllContacts with a req and res parameter which returns a json
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts();
    return res.json({ data: contacts, msg: "Success" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server Error" });
  }
};
// Create a asynchronous function named updateContact with a req and res parameter which returns a json object
exports.updateContact = async (req, res) => {
  try {
    const new_body = {
      ...req.body,
      updated_date: new Date().getTime(),
    };
    const contact = await req.body;
    const updatedContact = await contactService.updateUserById(req.params.id, new_body);
    return res.json({ data: contact, msg: "Success" });
  } catch (error) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
};
// Create a asynchronous function named deleteContact with a req and res parameter which returns a json

exports.deleteContact = async (req, res) => {
  try {
    const deletedContact = await contactService.deleteUserById(req.params.id);

    return res.json({
      msg: "Contact deleted successfully",
      deletedContact,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
