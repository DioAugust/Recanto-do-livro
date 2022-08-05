const mysql = require('mysql2');
const { connect } = require('../routes/login');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'example',
  database: 'login'
});

module.exports = {
    findById: function(id){
        connection.promise().query('select * from users where id=?',[id])
    },

    findByUsername: function(username){
        return connection.promise().query('select * from users where login=?',[username])
    }

}