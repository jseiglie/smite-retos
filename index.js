"use strict";
require("dotenv").config();
const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const path = require('path');
const cors = require("cors");
const sequelize = require('./config/index.js')
console.log(sequelize);
const fs = require('fs');
const Item = require('./models/items.js');

const app = express();
const port = 3000;
const router = express.Router();
const server = createServer(app);


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({limit: '5mb', extended: true}));
app.use(express.static(path.join(__dirname, './client/build')));


//router routes here
app.use('/api', router);
app.use('/api/items', require('./router/items.routes.js'));

const sequelizeOptions = {};
if (process.env.NODE_ENV === 'development') {
  sequelizeOptions.force = true;
}

sequelizeOptions.alter = true;
// Sync database and load initial data

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, './client/build/index.html'));
});


server.listen(port, async () => {
  try {
    await sequelize.authenticate();
console.log('item----->', Item);

sequelize.sync({ force: true }).then(async () => {
  const data = JSON.parse(fs.readFileSync('./client/src/assets/guru_transformed.json', 'utf8'));
  for (const key in data) {
    await Item.create(data[key]);
  }
  console.log('Database synced and initial data loaded');
});

    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }  
  console.log('server running at http://localhost:3000');
});