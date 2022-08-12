
module.exports = function(app){

    var indexRouter = require('./index');
    var cadastroRouter = require('./cadastro');
    var loginRouter = require('./login');
    var mainRouter = require('./main')

    let middlewareAutorization = function(req, resp, next){
        if (req.isAuthenticated()) return next()
        else resp.redirect('/login')
    }

    app.use('/', indexRouter);
    app.use('/cadastro', cadastroRouter);
    app.use('/login', loginRouter);
    app.use('/main', middlewareAutorization, mainRouter);
}