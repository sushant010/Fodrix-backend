const Contact = require('../model/contactSchema');

// Controller function to handle the contact form submission
const submitContactForm = async (req, res) => {
  const contactData = req.body;

  try {
    // Create a new instance of the Contact model
    const newContact = new Contact(contactData);

    // Save the new contact data to the database
    await newContact.save();
    res.json({ message: "Contact data saved successfully" });
  } catch (error) {
    console.error("Error saving contact data:", error);
    res.status(500).json({ error: "Failed to save contact data" });
  }
};

// Controller function to retrieve all contact submissions
const getAllContactSubmissions = async (req, res) => {
  try {
    // Retrieve all contact submissions from the database
    const allContactSubmissions = await Contact.find();

    res.json(allContactSubmissions);
  } catch (error) {
    console.error("Error retrieving contact submissions:", error);
    res.status(500).json({ error: "Failed to retrieve contact submissions" });
  }
};

module.exports = {
  submitContactForm,
  getAllContactSubmissions,
};
