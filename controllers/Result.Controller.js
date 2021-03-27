const { PythonShell } = require('python-shell');
const db = require('../config/sequelize');
const Result = db.results;
const Response = require('./response');

exports.saveResult = (req, res, next) => {
  try {
    const pythonShellOptions = {
      mode: 'json',
      pythonOptions: ['-u'],
    };
    PythonShell.run('script.py', pythonShellOptions, async (err, result) => {
      if (err) throw err;
      const [newResult] = result;
      const insertIntoDatabase = [];
      newResult.forEach((value) => {
        insertIntoDatabase.push({ value });
      });
      await Result.bulkCreate(insertIntoDatabase);
      return res
        .status(200)
        .json(Response.create(true, 'Data saved.', newResult));
    });
  } catch (error) {
    next();
  }
};
