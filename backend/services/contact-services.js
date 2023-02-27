// import contact model from the models folder
const Contact = require("../models/contact-models");

//create CRUD Mongoose queries with error handling and export it

// Create a new User
exports.addContact = (contact) => {
  const new_contact = new Contact(contact);

  return new_contact
    .save() // Return a Promise

    .then((new_contact) => {
      // Handle success response

      console.log(`contact created successfully with id ${new_contact._id}`);

      return new_contact;
    })

    .catch((err) => {
      // Handle error response

      console.log(`Error creating user: ${err}`);

      throw err; // Rethrow so caller can handle error
    });
};

// Read all users
exports.getAllContacts = () => {
  return Contact.find() // Return a Promise

    .then((contacts) => {
      // Handle success response

      console.log(`Found ${contacts.length} contacts`);

      return contacts;
    })

    .catch((err) => {
      // Handle error response

      console.log(`Error finding users: ${err}`);

      throw err; // Rethrow so caller can handle error
    });
};
// Update an existing user by id
exports.updateUserById = (id, contact) => {
  return Contact.findByIdAndUpdate(id, contact, { new: true })
    .then((contact) => {
      console.log(`Updated contact with id ${contact._id} successfully`);
      return contact;
    })
    .catch((err) => {
      console.log(`Error updating user with id ${id}: ${err}`);
      throw err;
    });
};
// Delete an existing user by id
exports.deleteUserById = (id) => {
  return Contact.findByIdAndDelete(id)
    .then((_) => {
      console.log(`Deleted user with id ${id} successfully`);
    })
    .catch((err) => {
      console.log(`Error deleting user with id ${id}: ${err}`);
      throw err;
    });
};
