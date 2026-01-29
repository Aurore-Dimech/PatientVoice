const express = require('express');
const router = express.Router();
const Center = require('../models/Center');

// GET /centers
router.get('/', async (req, res) => {
  try {
    const centers = await Center.findAll();
    res.json(centers);  // Assumes basic JSON; customize if CenterListingResource differs
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /centers/:center
router.get('/:center', async (req, res) => {
  try {
    const center = await Center.findByPk(req.params.center);
    if (!center) return res.status(404).json({ error: 'Center not found' });
    res.json(center);  // Assumes basic JSON; customize if CenterResource differs
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;