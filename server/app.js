var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

const passport = require('passport');

var app = express();

app.set('views', path.join(__dirname, '../client/pages'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/public')));

app.use(session({
  secret: 'noSoSecret',
  cookies: { maxAge: 2 * 60 * 1000 },
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

require('./services/auth')(passport)
require('./routes/config')(app)

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;