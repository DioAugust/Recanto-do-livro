var express = require('express');
const { response } = require('../app');
var router = express.Router();
var dao = require('../database/dao')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cadastroLivro', { message: null });
});

router.post('/save', function(req, res, next) {
  dao.saveLivro(req.body).then(([result]) => {
      req.flash('sucess', 'Livro cadastrado com sucesso')
      res.redirect('/main')
    }).catch(err => {
      console.log(err)
      req.flash('error', 'Nao foi possivel cadastrar esse livro')
      res.redirect('/main')
    })
})
module.exports = router;
