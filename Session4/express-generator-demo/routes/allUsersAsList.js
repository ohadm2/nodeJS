var express = require('express');
var router = express.Router();
var usersModel = require('../models/usersModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  usersModel.getAllUserNamesFromWebService().then(usersList => {
    //console.log(usersList);
    res.render('allUsersAsList',{users: usersList});
  });
});

module.exports = router;
