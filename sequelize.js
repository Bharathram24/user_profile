const Sequelize = require('sequelize');

const sequelize = new Sequelize('your_database', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Set to true for development to see SQL queries.
});

module.exports = sequelize;
