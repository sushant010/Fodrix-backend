const Career = require('../model/career'); // Import the Career model

const CareerController = {
  submitCareerForm: async (req, res) => {
    try {
      const { name, email, phone, message, resumeLink } = req.body;

      const newCareerEntry = new Career({
        name,
        email,
        phone,
        message,
        resumeLink 
      });

      await newCareerEntry.save();

      res.status(201).json({ message: 'Form data submitted successfully!' });
    } catch (error) {
      console.error('Error submitting form data:', error);
      res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
  },

  getCareerSubmissions: async (req, res) => {
    try {
      const submissions = await Career.find(); 

      res.status(200).json(submissions);
    } catch (error) {
      console.error('Error fetching career submissions:', error);
      res.status(500).json({ error: 'An error occurred while fetching career submissions.' });
    }
  }
};

module.exports = CareerController;
