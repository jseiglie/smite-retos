const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/index.js"); // Adjust the path as necessary

const Item = sequelize.define(
  "Item",
  {
    // Define your model attributes here
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    magical: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    physical: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    guru_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
    },
    tier: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    child: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    starting: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    stats: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    passive: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    // Define any additional options here
    tableName: "Items",
    timeStamp: true,
    freezeTableName: true,
  }
);

module.exports = Item;
