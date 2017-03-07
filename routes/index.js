// const express = require('express');
// const router = express.Router();
var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets', function(req, res) {
  res.sendFile('/Users/Tina/Projects/grace_hopper/twitter-js/public/stylesheets/style.css');
});

module.exports = router;
