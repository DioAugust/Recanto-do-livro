const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', function(req, res){
    res.render('login', {message: null})
})

router.post('/', passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/login'
}))

module.exports = router