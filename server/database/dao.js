const mysql = require('mysql2');
const bcryptjs = require('bcryptjs');
var salt = bcryptjs.genSaltSync(10);


// const connection = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: 'example',
//    database: 'test',
//    database: 'login'
//  }); 

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'main',
    password: 'Mysqlsenha23-42',
    connectionLimit: 10,
    queueLimit: 0
});


module.exports = {
    findByIdLivro: function (id){
        return connection.promise().query('select * from livros where id=?', [id])
    },
    findById: function (id){
        return connection.promise().query('select * from users where id=?', [id])
    },
    findByUsername: function (username){
        return connection.promise().query('select * from users where login=?', [username])
    }, 
    saveLivro: function(livro){
        return connection.promise().execute('INSERT INTO livros (titulo, ano, autor, editora, n_exemplares) VALUES (?, ?, ?, ?, ?)', [ livro.titulo, livro.ano, livro.autor, livro.editora, livro.n_exemplares])
    },
    update: function(livro){
        return connection.promise().execute('UPDATE livros SET titulo=?, ano=?, autor=?, editora=?, n_exemplares=? WHERE id=?', 
        [ livro.titulo, livro.ano, livro.autor, livro.editora, livro.n_exemplares, livro.id])
    },
    remove: function(id){
        return connection.promise().execute('delete from livros where id=?', [id])
    },
    list: function(){
        return connection.promise().query('select * from livros')
    },
    saveUser: function(user){
        return connection.promise().execute('INSERT INTO users (name, login, password) VALUES (?, ?, ?)', [user.nome, user.login, bcryptjs.hashSync(user.password, salt)])
    },
    search: function(titulo){
        return connection.promise().query('select * from livros where titulo like ?', [ "%" + titulo + "%"])
    }
    
}