// const express = require('express');
// const router = express.Router();
var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name});
  console.log("logging list next")
  console.log(list);
  //we want to render the content in the list array for the given name of a specific object in the array.
  res.render( 'index', { tweets: list } );
});

module.exports = router;
