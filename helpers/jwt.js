let jwt = require('jsonwebtoken');
const config = require('../config.json');

module.exports = {
  createJWTToken: (req, res) => {
    let { userEmail, time } = req.body;
    if (userEmail) {
      let duration = '12h'; // defaults to 12 hours
      if (time) {
        duration = time;
      }
      const token = jwt.sign({ userEmail }, config.jwtKey, {
        expiresIn: duration,
      });
      res.status(200).send({
        message: 'token created',
        data: {
          userEmail,
          token,
        },
      });
    } else {
      res.status(400).send({
        message: 'failed to create token',
      });
    }
  },
};
