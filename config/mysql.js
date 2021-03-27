const Development = {
  USER: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
};

const Production = {
  USER: 'admin',
  PASSWORD: '',
};

module.exports = {
  ...(process.env.ENV === 'prod' ? Production : Development),
  HOST: '127.0.0.1',
  DB: 'mahardhika',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
