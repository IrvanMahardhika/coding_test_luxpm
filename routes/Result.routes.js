var result = require('../controllers/Result.Controller');
const { createJWTToken } = require('../helpers/jwt');
const { body, validationResult } = require('express-validator');

var VerifyToken = require('./middleware.js');
module.exports = (app) => {
  app.post(
    '/create-token',
    body('userEmail').notEmpty().withMessage('user email cannot be empty'),
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      createJWTToken(req, res);
    },
  );

  app.post('/save-result', VerifyToken, result.saveResult);
};
