const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'example',
  database: 'test',
  database: 'login'
});

module.exports = {
    findById: function (id){
        return connection.promise().query('select * from users where id=?', [id])
    },

    findByUsername: function (username){
        return connection.promise().query('select * from users where login=?', [username])
    }
}