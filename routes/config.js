
module.exports = function(app){

    var indexRouter = require('./index');
    var usersRouter = require('./users');
    var loginRouter = require('./login');

    let middlewareAutorization = function(req, resp, next){
        if (req.isAuthenticated()) return next()
        else resp.redirect('/login')
    }

    app.use('/', indexRouter);
    app.use('/users', middlewareAutorization,usersRouter);
    app.use('/login', loginRouter);
}