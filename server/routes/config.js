

module.exports = function(app){

    var cadastroRouter = require('./cadastro');
    var loginRouter = require('./login');
    var mainRouter = require('./main')

    let middlewareAutorization = function(req, resp, next){
        if (req.isAuthenticated()) return next()
        else resp.redirect('/')
    }

    app.use('/', loginRouter);
    app.use('/cadastro', cadastroRouter);
    app.use('/main', middlewareAutorization, mainRouter);
}