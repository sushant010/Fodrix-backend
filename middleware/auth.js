const jwt = require('jsonwebtoken');
const generateSecretKey = require('./generateSecretKey');

const secretKey = generateSecretKey();

const generateToken = (payload) => {
  const token = jwt.sign(payload, secretKey);
  return token;
};

// Other authentication-related functions

const checkAuthenticated = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Authorization token not found.' });
  }

  try {
    // Verify the token and extract user information
    const decoded = jwt.verify(token, secretKey);

    // Add the user information to the request object
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid authorization token.' });
  }
};

module.exports = {
  generateToken,
  checkAuthenticated,
  // Other exported functions
};
