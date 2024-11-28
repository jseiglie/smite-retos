require("dotenv").config();
const express = require('express');
const apiRouter = express.Router();
const Users = require('../models/users.js');
// Routes
apiRouter.get('/user', async (req, res) => {
    const users = await Users.findAll();
    res.json(users);
  });
  apiRouter.get('/user/:id', async (req, res) => {
    const user = await Users.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
  apiRouter.post('/register', async (req, res) => {
    try {
      const user = await Users.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
module.exports = apiRouter;