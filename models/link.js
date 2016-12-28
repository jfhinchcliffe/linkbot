const mongoose = require('mongoose');
const db = require('./db');

const linkSchema = new mongoose.Schema({
  url: String,
  title: String, 
  votes: Number
});

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;