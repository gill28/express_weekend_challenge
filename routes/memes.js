var express = require('express');
var router = express.Router();
var memes = require('../public/static/memes.json');
var comments = require('../public/static/comments.json')
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var meme = [];

  for (i = 0; i < memes.length; i++) {
    if(memes[i].id === req.params.id) {
      meme.push(memes[i]);
    }
  }
  res.render('index', { title: 'Meme ' + req.params.id, data: meme });
});

module.exports = router;
