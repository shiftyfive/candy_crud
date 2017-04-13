const express = require('express');

const router = express.Router();

const db = require('../db');

// Get all snacks
router.get('/', (req, res) => {
  db('snacks').then((snacks) => {
    res.render('snacks/index', { snacks });
  });
});

// Get a single snack
router.get('/:id', (req, res) => {
  const id = req.params.id;
  db('snacks').where({ id }).first()
  .then((snack) => {
    res.render('snacks/show-details', { snack });
  });
});

router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  db('snacks').where({ id }).first()
    .then((snack) => {
      res.render('snacks/edit', { snack });
    });
});

module.exports = router;
