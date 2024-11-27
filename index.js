const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Database setup
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

// User model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Item model
const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tier: DataTypes.INTEGER,
  price: DataTypes.INTEGER,
  type: DataTypes.STRING,
  child: DataTypes.INTEGER,
  starting: DataTypes.BOOLEAN,
  stats: DataTypes.JSON,
  passive: DataTypes.STRING,
  lifesteal: DataTypes.BOOLEAN,
  physical: DataTypes.BOOLEAN,
  magical: DataTypes.BOOLEAN,
  guru_id: DataTypes.INTEGER
});

// Sync database and load initial data
sequelize.sync({ force: true }).then(async () => {
  const data = JSON.parse(fs.readFileSync('./client/src/assets/guru_transformed.json', 'utf8'));
  for (const key in data) {
    await Item.create(data[key]);
  }
  console.log('Database synced and initial data loaded');
});

// Routes
app.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/items', async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
});

app.get('/items/:id', async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});