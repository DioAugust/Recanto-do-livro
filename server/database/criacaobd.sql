
create table users (
id int auto_increment primary key,
name varchar(60) not null,
login varchar(30) not null,
password varchar(255) not null
);

create table livros (
id int auto_increment primary key,
titulo varchar(60) not null,
ano varchar(30),
autor varchar(255) not null,
editora varchar(255),
n_exemplares int not null
);

INSERT INTO livros (titulo, ano, autor, editora, n_exemplares) VALUES ('Livro', '2023', 'balestrin', 'levreta', 30);
INSERT INTO livros (titulo, ano, autor, editora, n_exemplares) VALUES ('Limpa', '2023', 'sla', 'levreta', 3);
INSERT INTO users (name, login, password) VALUES ('try', 'dio', '123');

select * from users;
select * from livros;

