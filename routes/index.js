// const express = require('express');
// const router = express.Router();
var router = require('express').Router();
var tweetBank = require('../tweetBank');


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name});
  console.log("logging list next")
  console.log(list);
  //we want to render the content in the list array for the given name of a specific object in the array.
  res.render( 'index', { tweets: list } );
});

router.get('/tweets/:id', function(req, res) {
  var id = req.params.id;
  var list = tweetBank.find( {id: id});
  console.log("logging list next")
  console.log(list);
  //we want to render the content in the list array for the given name of a specific object in the array.
  res.render( 'index', { tweets: list } );
});

router.post('/tweets', function(req, res) {
  if (!req.body) return res.sendStatus(400);
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});


module.exports = router;
