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

    Link.findById(req.params.id)
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
      res.json({link});  
    });
});

// Update one link
router.put('/:id', (req, res, next) => {
  Link.findById(req.params.id)
    .then( link => {
        // set that link will only update if params are provided (won't set to nil)
        if (req.body.url) link.url = req.body.url;
        if (req.body.title) link.title = req.body.title;
      link.save((err) => {
        if (err)
          res.send(err);
        console.log('Link updated');  
        res.json({link});  
      });
    }); 
});

// Delete a link 
router.delete('/:id', (req, res, next) => {
  Link.findByIdAndRemove(req.params.id)
    .then( ()=> {
      res.json('Link Deleted');
    }); 
});

module.exports = router;