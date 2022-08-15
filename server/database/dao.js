const mysql = require('mysql2');

/*const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'example',
  database: 'test',
  database: 'login'
}); */

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'main',
    password: 'Mysqlsenha23-42',
    connectionLimit: 10,
    queueLimit: 0
});

// connection.promise().query('select * from users').then( ([rows]) => {
//     console.log(rows)
// })

module.exports = {
    findById: function (id){
        return connection.promise().query('select * from users where id=?', [id])
    },

    findByUsername: function (username){
        return connection.promise().query('select * from users where login=?', [username])
    }, 
    save: function(user){

    },
    update: function(user){

    },
    remove: function(id){

    },
    list: function(){
        return connection.promise().query('select * from livros')
    }
}