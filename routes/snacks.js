const express = require('express');

const router = express.Router();

const db = require('../db');

/* GET users listing. */
router.get('/', (req, res) => {
  db('snacks').then((snacks) => {
    res.render('snacks/index', { snacks });
  });
});

module.exports = router;
