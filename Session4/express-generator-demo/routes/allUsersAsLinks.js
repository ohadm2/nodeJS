var express = require('express');
var router = express.Router();
var usersModel = require('../models/usersModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  usersModel.getAllUserNamesAndIDsFromWebService().then(usersListWithIDs => {
    //console.log(usersListWithIDs);
    res.render('allUsersAsLinks',{users: usersListWithIDs});
  });
});

module.exports = router;
