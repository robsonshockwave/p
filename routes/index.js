var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var db = require("../db");
  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  Users.find({}).lean().exec(
    function (e, docs) {
      res.render('index', { "cidades": docs });
  });
});

router.get('/resposta', function(req, res) {
  let cidadepesquisada = req.params.cidade

  var db = require("../db");
  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  Users.find({}).lean().exec(
    function (e, docs) {
      res.render('resposta', { "cidades": docs, "cidadepesquisada": cidadepesquisada });
  });
})

module.exports = router;
