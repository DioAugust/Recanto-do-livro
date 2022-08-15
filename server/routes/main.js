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

router.post('/delete', function(request, response, next) {
  dao.remove(request.body.id).then( ([result]) => {
    if(result.affectedRows > 0) {
      request.flash('sucess', 'Aluno excluido com sucesso')
    } else {
      request.flash('error', `Nao foi encontrado no banco aluno com id = ${request.body.id}`)
    }
    response.redirect('/main')
  }).catch(err => {
    console.log(err)
    request.flash('error', 'Ocorreu um erro durante a exclusao do aluno.')
    response.redirect('/main')
  });
  
})

module.exports = router;