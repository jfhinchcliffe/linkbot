const express = require('express');
const router = express.Router();
const Links = require('../models/link')

/* GET users listing. */
router.get('/', function(req, res, next) {
    Links.find()
    .then(links => {
        res.json(links)
    })
});

module.exports = router;