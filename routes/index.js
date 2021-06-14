var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  /*
  var db = require("../db");
  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  Users.find({}).lean().exec(
    function (e, docs) {
      res.render('index', { "cidades": docs });
  });
  */
  res.render('index');
});

router.get('/resposta', function(req, res) {
  let {cep, cidade} = req.body

  var db = require("../db");
  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  Users.find({}).lean().exec(
    function (e, docs) {
      res.render('resposta', { 
        "cidades": docs, 
        "cep": cep,
        "cidade": cidade
      });
  });
})

router.get('/colocarcidade', function(req,res) {
  res.render('colocarcidade');
})

router.get('/cidadesnobanco', function(req,res) {
  var db = require("../db");
  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  Users.find({}).lean().exec(
    function (e, docs) {
      res.render('cidadesnobanco', { "cidades": docs });
  });
})

router.post('/addcidade', function (req, res) {
  var db = require("../db");
  var nomeCidade = req.body.nomecidade;
  var tempAtual = req.body.tempatual;
  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  var prova = new Users({ cidade: nomeCidade, temp: tempAtual });
  prova.save(function (err) {
  if (err) {
  console.log("Error! " + err.message);
  return err;
  }
  else {
  console.log("Post saved");
  res.redirect("cidadesnobanco");
  }
  });
 }); 

module.exports = router;
