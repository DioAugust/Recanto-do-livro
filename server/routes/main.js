const { response } = require('express');
var express = require('express');
var router = express.Router();
var dao = require('../database/dao')

router.get('/', function(req, response, next) {
  dao.list().then( ([rows]) => {
    response.render('main', { livros: rows})
  }).catch(err => {
    console.log(err)
    response.render('main', {livros: []})
  })

});

module.exports = router;