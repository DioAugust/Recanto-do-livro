var express = require('express');
const { saveUser } = require('../database/dao');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('cadastro', {message: null});
});

router.post('/save', function(request, response) {
  saveUser(request.body).then( ([result]) => {
    response.redirect('/')
  }).catch(err => {
    console.log(err)
  })
})

module.exports = router;