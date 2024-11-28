require("dotenv").config();
const express = require("express");
const apiRouter = express.Router();
const Item = require("../models/items.js");
// Routes
apiRouter.get("/", async (req, res) => {
  try {
    const items = await Item.findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
apiRouter.get("/magical", async (req, res) => {
  try {
    const items = await Item.findAll({ where: { magical: true } });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

apiRouter.get("/physical", async (req, res) => {
  try {
    const items = await Item.findAll({ where: { physical: true } });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

apiRouter.get("/:id", async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = apiRouter;
