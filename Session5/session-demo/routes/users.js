var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(!req.session.authorized)
  {
    res.redirect('/');
  }
  else
  {
    res.render('users', { title: 'Users' });
  }
});

router.get('/logout', function(req, res, next) {
  req.session.authorized=false;
  
  res.write('{}')
  res.end();
});

module.exports = router;
