"use strict";

module.exports = function (sequelize, DataTypes) {
    const Users = sequelize.define('Users', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
      tableName: "Users",
      timeStamp: true,
      freezeTableName: true,
    });
    return Users;
}