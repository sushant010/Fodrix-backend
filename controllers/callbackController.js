

const Callback = require('../model/callbackSchema');

const addCallback = async (req, res) => {
  const callbackData = req.body;

  try {
    // Create a new instance of the Callback model
    const newCallback = new Callback(callbackData);

    // Save the new callback data to the database
    await newCallback.save();
    res.json({ message: "Callback data saved successfully" });
  } catch (error) {
    console.error("Error saving callback data:", error);
    res.status(500).json({ error: "Failed to save callback data" });
  }
};
const getCallbacks = async (req, res) => {
    try {
      // Fetch all callback data from the database
      const callbacks = await Callback.find();
  
      res.json(callbacks);
    } catch (error) {
      console.error("Error fetching callback data:", error);
      res.status(500).json({ error: "Failed to fetch callback data" });
    }
  };
  
  module.exports = {
    addCallback,
    getCallbacks
  };