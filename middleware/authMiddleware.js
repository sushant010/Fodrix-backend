const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
    try {
        // Get the requested URL
        const requestedUrl = req.originalUrl;

        // Skip authentication for the /profile/all route
        if (requestedUrl === '/profile/all') {
            return next();
        }

        // Get the token from the request headers
        const token = req.header('Authorization');
        
        // Check if the token is missing
        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        // Check if the token starts with 'Bearer '
        if (!token.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Access denied. Invalid token format.' });
        }

        // Extract the token value by removing 'Bearer '
        const tokenValue = token.replace('Bearer ', '');

        // Verify the token
        const decoded = jwt.verify(tokenValue, secretKey);

        // Attach the decoded user information to the request object for use in other route handlers
        req.user = decoded;
        next();
    } catch (err) {
        if (err.name === 'JsonWebTokenError') {
            // Token is malformed or invalid
            return res.status(403).json({ message: 'Invalid token.' });
        } else if (err.name === 'TokenExpiredError') {
            // Token has expired
            return res.status(403).json({ message: 'Token expired.' });
        } else {
            // Other error occurred during token verification
            console.error('Token verification error:', err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
    }
};

module.exports = authMiddleware;
