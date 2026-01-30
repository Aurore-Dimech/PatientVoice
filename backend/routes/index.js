const express = require('express');
const router = express.Router();

// GET /health
router.get('/health', (req, res) => {
  res.json('Hello World');
});

module.exports = router;