const Portfolio = require('../model/Portfolio');

exports.addMediaLink = async (req, res) => {
  const category = req.params.category;
  const mediaType = req.body.mediaType;
  const links = req.body.links;

  if (!Array.isArray(links) || links.length === 0) {
    return res.status(400).json({ error: 'Media links array is required.' });
  }

  const successfullyAddedLinks = [];
  const invalidLinks = [];

  for (const link of links) {
    if (typeof link === 'string' && link.trim() !== '') {
      try {
        const newMedia = await Portfolio.create({ category, mediaType, link });
        successfullyAddedLinks.push(newMedia);
      } catch (err) {
        invalidLinks.push(link);
      }
    } else {
      invalidLinks.push(link);
    }
  }

  const response = {
    success: successfullyAddedLinks.length > 0,
    addedLinks: successfullyAddedLinks,
    invalidLinks: invalidLinks,
  };

  return res.status(201).json(response);
};

exports.getMediaLinks = async (req, res) => {
  const category = req.params.category;
  const mediaType = req.query.mediaType; // Query parameter to filter by media type

  const filter = { category };
  if (mediaType) {
    filter.mediaType = mediaType;
  }

  try {
    const mediaLinks = await Portfolio.find(filter);
    return res.json(mediaLinks);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch media links from the database.' });
  }
};

exports.deleteMediaLink = async (req, res) => {
  const category = req.params.category;
  const mediaType = req.body.mediaType;
  const linksToDelete = req.body.links;

  if (!Array.isArray(linksToDelete) || linksToDelete.length === 0) {
    return res.status(400).json({ error: 'Media links array is required.' });
  }

  const filter = { category, mediaType, link: { $in: linksToDelete } };

  try {
    const deleteResult = await Portfolio.deleteMany(filter);
    if (deleteResult.deletedCount > 0) {
      return res.status(200).json({ message: 'Media links deleted successfully.' });
    } else {
      return res.status(404).json({ error: 'Media links not found in the category.' });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Failed to delete media links from the database.' });
  }
};
