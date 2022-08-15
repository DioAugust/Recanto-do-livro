var express = require('express');
const { response } = require('../app');
var router = express.Router();
var dao = require('../database/dao')

/* GET home page. */
router.get('/', async function(req, res, next) {
  let row = {
    id: '',
    titulo: '',
    ano: '',
    autor: '',
    editora: '',
    n_exemplares: ''
  }
  if (req.query.id) {
    [result] = await dao.findByIdLivro(req.query.id)
    row = result[0]
  }
  res.render('cadastroLivro', {livro: row});
});

router.post('/save', function(request, res, next) {
  let operacao;
  if (request.body.id) {
    operacao = dao.update
    success = 'Livro atualizado com sucesso'
  } else {
    operacao = dao.saveLivro
    success = 'Livro cadastrado com sucesso'
  }

  operacao(request.body).then(([result]) => {
      request.flash('sucess', success)
      res.redirect('/main')
    }).catch(err => {
      console.log(err)
      request.flash('error', 'Nao foi possivel cadastrar esse livro')
      res.redirect('/main')
    })
})
module.exports = router;
