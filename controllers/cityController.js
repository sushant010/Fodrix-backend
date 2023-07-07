const City = require('../model/citySchema');

// Controller method for creating a new city
const createCity = (req, res) => {
  const { name, image, about, touristSpots,mapLink } = req.body;
  const newCity = new City({
    name,
    image,
    about,mapLink,
    touristSpots
  });

  newCity.save()
    .then(() => {
      res.status(201).json({ message: 'City created successfully' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Failed to create city already created', error });
    });
};

// Controller method for retrieving all cities
const getAllCities = (req, res) => {
  City.find()
    .then((cities) => {
      res.status(200).json(cities);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Failed to retrieve cities', error });
    });
};

// Controller method for retrieving city details
const getCity = (req, res) => {
  const cityName = req.params.cityName;
  City.findOne({ name: cityName })
    .then((city) => {
      if (city) {
        res.status(200).json(city);
      } else {
        res.status(404).json({ message: 'City not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Failed to retrieve city', error });
    });
};

// Controller method for updating city details
const updateCity = (req, res) => {
  const cityName = req.params.cityName;
  const updatedData = req.body;
  City.findOneAndUpdate({ name: cityName }, updatedData)
    .then((city) => {
      if (city) {
        res.status(200).json({ message: 'City updated successfully' });
      } else {
        res.status(404).json({ message: 'City not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Failed to update city ', error });
    });
};

module.exports = {
  createCity,
  getAllCities,
  getCity,
  updateCity
};
