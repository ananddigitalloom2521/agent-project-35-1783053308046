const express = require('express');
const router = express.Router();
const models = require('../models/index');
router.get('/', (req, res) => {
  const pageContent = models.getPageContent();
  res.send(`<!DOCTYPE html><html><head><title>Hello World</title></head><body>${pageContent}</body></html>`);
});
module.exports = router;