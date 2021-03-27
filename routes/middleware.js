const jwt = require('jsonwebtoken');
const config = require('../config.json');

// VerifyToken
module.exports = (req, res, next) => {
  if (req.method !== 'OPTIONS') {
    console.log(`Access attempt at ${new Date()}`);
    jwt.verify(req.headers.authorization, config.jwtKey, (error, decoded) => {
      if (error) {
        console.log({ decoded }, 'Unauthorized');
        return res.status(401).json({
          message: 'User not authorized.',
          error: 'User not authorized.',
        });
      }
      console.log('Authorized');
      console.log({ decoded });
      req.user = decoded;
      next();
    });
  } else {
    next();
  }
};
