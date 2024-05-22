// Create web server with Express
// Run with: node comments.js

var express = require('express');
var app = express();

var comments = [];

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  var comment = req.query.comment;
  comments.push(comment);
  res.send('Comment added');
});

app.listen(3000, function() {
  console.log('Server running at http://localhost:3000/');
});