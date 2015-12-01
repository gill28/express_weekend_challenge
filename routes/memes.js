
var express = require('express');
var router = express.Router();
var memes = require('../data/memes.json');
var comments = require('../data/comments.json')
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/:id', function(req, res, next) {
 var currentMeme;
 var currentComment;

 for (i = 0; i < memes.length; i++) {
   if(memes[i].id === req.params.id) {
     currentMeme = memes[i];
   }
 }

 for (j = 0; j < comments.length; j++) {
   if (comments[j].imageID === req.params.id) {
       currentComment = comments[j];
   }
 }

   res.render('meme', { meme: currentMeme, comment: currentComment });
});

module.exports = router;