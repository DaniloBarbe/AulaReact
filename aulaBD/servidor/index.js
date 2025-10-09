const express = require ("express");
const cors = require("cors");
const mysql2 = require("mysql2");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
const banco = mysql2.createConnection({
    host : "localhost",
    port : 3308,
    user : "root",
    password : "mysqlfatec",
    database : "aulabd"
});

banco.connect((erro)=>{
    if(erro){
        console.log("Erro ao conect ao MysQL:");
        console.log(erro);
    }
    else{
        console.log("conectado ao Mysql com sucesso! ");
    }
});
app.listen(PORT, ()=>{
    console.log("servidor rodando em http://localhost:" + PORT);
});