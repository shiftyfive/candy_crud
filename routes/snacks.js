const express = require('express');

const router = express.Router();

const db = require('../db');

// Get all snacks
router.get('/', (req, res) => {
  db('snacks').then((snacks) => {
    res.render('snacks/index', { snacks });
  });
});

// go to new snack form
router.get('/new', (req, res) => {
  res.render('snacks/new');
});


// Get a single snack
router.get('/:id', (req, res) => {
  const id = req.params.id;
  db('snacks').where({ id }).first()
  .then((snack) => {
    res.render('snacks/show-details', { snack });
  });
});

// send user to edit snack view
router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  db('snacks').select('*').where({ id }).first()
  .then((snack) => {
    res.render('snacks/edit', { snack });
  });
});

router.post('/', (req, res) => {
  const snack = {
    snack_picture_url: req.body.snack_picture_url,
    snack_name: req.body.snack_name,
    price: req.body.price,
    rating: req.body.rating,
  };
  db('snacks').insert(snack, '*')
  .then((newSnack) => {
    const id = newSnack[0].id;
    res.redirect(`/snacks/${id}`);
  });
});

// update snack and redirect user to the updated single snack name
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const snack = {
    snack_picture_url: req.body.snack_picture_url,
    snack_name: req.body.snack_name,
    price: req.body.price,
    rating: req.body.rating,
  };
  db('snacks').update(snack, '*').where({ id }).then((updatedSnack) => {
    const updatedId = updatedSnack[0].id;
    res.redirect(`/snacks/${updatedId}`);
  });
});


// delete a snack
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db('snacks').del().where({ id })
  .then(() => {
    res.redirect('/snacks');
  });
});


module.exports = router;
