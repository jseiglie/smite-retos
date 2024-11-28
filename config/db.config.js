require("dotenv").config();

let db = {};

process.env.NODE_ENV == "development"
  ? (db = {
      dialect: "sqlite",
      storage: "database.sqlite",
    })
  : (db = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      dialect: process.env.DB_DIALECT,
      port: process.env.DB_PORT,
    });

    module.exports = db;