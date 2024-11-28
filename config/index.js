const Sequelize = require('sequelize');
const config = require('./db.config.js');

const prod = new Sequelize(config.database, config.user, config.pass,  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    dialectOptions:{
        //timezone: "UTC"
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }, 
    logging: false
})

const dev = new Sequelize({
    dialect: config.dialect,
    storage: config.storage
})

module.exports = process.env.NODE_ENV === 'development' ? dev : prod;