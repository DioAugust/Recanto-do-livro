
module.exports = function(passport){

    const LocalStrategy = require('passport-local').Strategy
    let dao = require('../database/dao')

    passport.serializeUser( function(user, done){
        done(null, user.id)
      })
      
      passport.deserializeUser( function(id, done){
        dao.findById(id)
        .then(([rows])=>{
          let user = rows[0]
          return done(null, user)
        }).catch( err=> {
          return done(err, null)
        })
      })
      
      let strategyConfig = {
        usernameField: 'username',
        passwordField: 'password'
      }
      passport.use(new LocalStrategy(strategyConfig, function(username, password, done){
        dao.findByUsername(username)
          .then( ([rows]) => {
          if ( rows.length == 0) return done(null, false)
          
          let user = rows[0]
          if (user.password != password) return done(null, false)
          else return done(null, user)
        }).catch(err =>{
          console.log(err)
          return done(err, null)
        })
      }))
}