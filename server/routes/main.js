const { response } = require('express');
var express = require('express');
const { route } = require('../app');
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
      request.flash('sucess', 'livro excluido com sucesso')
    } else {
      request.flash('error', `Nao foi encontrado no banco livro com id = ${request.body.id}`)
    }
    response.redirect('/main')
  }).catch(err => {
    console.log(err)
    request.flash('error', 'Ocorreu um erro durante a exclusao do livro.')
    response.redirect('/main')
  });
  
})



router.get('/search', function(request, response) {
  if (request.query.titulo) {
    dao.search(request.query.titulo).then(([rows]) => {
      response.render('main', { livros: rows })
    }).catch(error => {
      console.log(error)
      request.flash('error', 'Nao foi possivel realizar a busca por titulo')
      response.redirect('/main')
    })
  }else{
    response.redirect('/main')
  }
})

module.exports = router;