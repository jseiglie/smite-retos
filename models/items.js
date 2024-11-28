const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/index.js'); // Adjust the path as necessary

const Item = sequelize.define('Item', {
  // Define your model attributes here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  magical: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  physical: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
  // Add other attributes as needed
});

module.exports = Item;