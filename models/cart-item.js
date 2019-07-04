const Sequelize = require('sequelize');
const sequelize = require('../util/db');

const CartItem = sequelize.define('cart', {
  id: {
    type: Sequelize.STRING,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
});

module.exports = CartItem;
