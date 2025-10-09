create database aulabd;
use aulabd;

create table alunos(
codigo int Key auto_increment,
nome varchar(50),
cidade varchar(50),
estado varchar(2));

insert into alunos (nome, cidade, estado) values ("Danilo", "mococa", "SP");

select * from alunos;