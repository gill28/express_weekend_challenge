var express = require('express');
var router = express.Router();
var memes = require('../public/static/memes.json');
var comments = require('../public/static/comments.json')
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Memes', data: memes });
});

// router.get('/memes/:id', function(req, res, next){
//
//   var memeID = req.params.id;
//
//   var currentMeme;
//     for(i = 0; i < memes.length; i++) {
//       if(memes[i].id == memeID) {
//         currentMeme = memes[i];
//       }
//     }
//     var firstComment;
//       for (i = 0; i < comments.length; i++) {
//         if(comments[i].imageID == memeID) {
//           firstComment = comments[i];
//         }
//       }
// })




module.exports = router;
