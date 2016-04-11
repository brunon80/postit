var express = require('express');
var router = express.Router();
var app    = express();
var jwt    = require('jsonwebtoken');
var models = require('../models/index');
var app    = express();
var config = require('../../config');
var session = require('client-sessions');
var mySession;

app.set('superSecret', config.secret);

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

router.post('/authenticate', function(req, res) {
  models.User.findOne({
    where: {
      email: req.body.email
    }
    }).then(function(user) {
        
        if (!user) {
          res.json({ success: false, message: 'Authentication failed. User not found.' });

        }else if (user) {

        // check if password matches
        if (user.password != req.body.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      }else {

          
          // if user is found and password is right
          // create a token
          var token = jwt.sign(user.email,app.get('superSecret'));

          res.json({
            email: user.email,
            success: true,
            message: 'Enjoy your token!',
            token: token,
            teste: mySession
          });
        }
       } 
      })
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
        text: req.body.text,
        color: req.body.color,
        UserId: req.body.user_id
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

router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});

// apply the routes to our application with the prefix /api
app.use('/authenticate', router);

// route to show a random message 



// route to return all users 

module.exports = router;
