var express = require('express');
var router = express.Router();
var models = require('../models/index');

router.get('/', function(req, res, next) {
  res.render('postit', { title: 'Express' });
});

router.post('/users', function(req, res) {
  models.User.create({
    email: req.body.email,
    password: req.body.password
  }).then(function(user) {
    res.json(user);
  });
});

router.get('/users', function(req, res) {
  models.User.findAll({}).then(function(users) {
    res.json(users);
  });
});

router.delete('/user/:id', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(user) {
    res.json(user);
  });
});

router.get('/postits', function(req, res) {
  models.Postitdbp.findAll({}).then(function(postits) {
    res.json(postits);
  });
});

// add new postit
router.post('/postits', function(req, res) {
  models.Postitdbp.create({
    title: req.body.title,
    text: req.body.text,
    color: req.body.color,
    UserId: req.body.user_id
  }).then(function(post) {
    res.json(post);
  });
});

router.get('/postit/:id', function(req, res) {
  models.Postitdbp.find({
    where: {
      id: req.params.id
    }
  }).then(function(postit) {
    res.json(postit);
  });
});

// update single postit
router.put('/postit/:id', function(req, res) {
  models.Postitdbp.find({
    where: {
      id: req.params.id
    }
  }).then(function(postit) {
    if(postit){
      postit.updateAttributes({
        title: req.body.title,
        complete: req.body.complete
      }).then(function(postit) {
        res.send(postit);
      });
    }
  });
});

// delete a single postit
router.delete('/postit/:id', function(req, res) {
  models.Postitdbp.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(postit) {
    res.json(postit);
  });
});

module.exports = router;
