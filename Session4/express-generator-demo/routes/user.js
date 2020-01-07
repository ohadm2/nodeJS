var express = require('express');
var router = express.Router();
var usersModel = require('../models/usersModel');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  usersModel.getUserNameAndEmailFromWebService(req.params.id).then(userData => {
    console.log(req.params.id);
    console.log(userData);
    res.render('user',{user: userData});
  });
});

module.exports = router;
