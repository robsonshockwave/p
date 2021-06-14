var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = require("../db");
  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  Users.find({}).lean().exec(
    function (e, docs) {
      res.render('index', { "": docs });
  });
});

module.exports = router;
