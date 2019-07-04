const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-store', 'root', 'Policia9@', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
