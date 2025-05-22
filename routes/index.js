const express = require('express');
const router = express.Router();
const properties = require('../data/properties');

router.get('/', (req, res) => res.render('index'));
router.get('/listings', (req, res) => res.render('listings', { properties }));
router.get('/contact', (req, res) => res.render('contact'));

module.exports = router;