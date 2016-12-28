const express = require('express');
const router = express.Router();
const Link = require('../models/link')

// Show all Links
router.get('/', function(req, res, next) {
    Link.find()
    .then(links => {
        res.json(links)
    })
});

// Show 1 link based on URL
router.get('/:id', function(req, res, next) {

    Link.find(req.params.id)
    .then(link => {
        res.json(link)
    })
});

// Create a link by posting to / route
router.post('/', function(req, res, next) {
    link = new Link;
    link.url = req.body.url;
    link.title = req.body.title;
    link.votes = 0;
    console.log(link);
    link.save((err) => {
    if (err) 
      res.send(err);
      res.json({status: "Link Added"});  
    });
});

module.exports = router;