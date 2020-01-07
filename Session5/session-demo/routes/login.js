var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  if(username == "david" && password == "1234")
  {
    req.session.authorized = true;

    res.redirect('/users');
  }
  else
  {
    res.redirect('/');
  }
});

module.exports = router;
