const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-store', 'root', 'nodestore', {
  dialectL: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
