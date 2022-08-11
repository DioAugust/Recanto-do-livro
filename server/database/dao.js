const mysql = require('mysql2');

/*const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'example',
  database: 'test',
  database: 'login'
}); */

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'main',
    password: 'Mysqlsenha23-42'
});

module.exports = {
    findById: function (id){
        return connection.promise().query('select * from users where id=?', [id])
    },

    findByUsername: function (username){
        return connection.promise().query('select * from users where login=?', [username])
    }
}