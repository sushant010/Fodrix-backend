const Photographer = require('../model/photographer');

// Controller functions
const createPhotographer = async (req, res) => {
  try {
    const { coverPhotoLinks, firstName, lastName, bio, profilePhotoLink, city } = req.body;
    const photographer = new Photographer({
      coverPhotoLinks,
      firstName,
      lastName,
      bio,
      profilePhotoLink,
      city,
    });

    await photographer.save();
    res.status(201).json(photographer);
  } catch (error) {
    res.status(500).json({ error: 'Could not create photographer.' });
  }
};

const getPhotographers = async (req, res) => {
  try {
    const photographers = await Photographer.find();
    res.status(200).json(photographers);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch photographers.' });
  }
};

const updatePhotographer = async (req, res) => {
    try {
      const photographerId = req.params.id;
      const updateData = req.body;
  
      // Check if the photographer exists in the database
      const photographer = await Photographer.findById(photographerId);
      if (!photographer) {
        return res.status(404).json({ error: 'Photographer not found.' });
      }
  
      // Update the photographer
      await Photographer.findByIdAndUpdate(photographerId, updateData, { new: true });
      res.status(200).json({ message: 'Photographer updated successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'Could not update photographer.' });
    }
  };
  
  const deletePhotographer = async (req, res) => {
    try {
      const photographerId = req.params.id;
  
      // Check if the photographer exists in the database
      const photographer = await Photographer.findById(photographerId);
      if (!photographer) {
        return res.status(404).json({ error: 'Photographer not found.' });
      }
  
      // Delete the photographer
      await Photographer.findByIdAndRemove(photographerId);
      res.status(200).json({ message: 'Photographer deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'Could not delete photographer.' });
    }
  };

  
const getPhotographersByCity = async (req, res) => {
    const city = req.params.city;
    try {
      const photographers = await Photographer.find({ city: city });
      res.status(200).json(photographers);
    } catch (error) {
      res.status(500).json({ error: 'Could not fetch photographers by city.' });
    }
  };
  
  module.exports = {
    createPhotographer,
    getPhotographers,
    updatePhotographer,
    deletePhotographer,
    getPhotographersByCity,
  };