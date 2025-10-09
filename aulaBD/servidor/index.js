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
app.get("/aluno", (red, res) => {
    const sql = "SELECT * FROM aluno";
    banco.query(sql,(erro, resultados)=>{
        if(erro){
            console.log(erro);
            return res.status(500).json({ error: "Erro ao consultar alunos"});

        }else{
           console.log(resultados);
                return res.status(200).json(resultados);
        }
      
    });

});
app.get("/aluno/:codigo", (red, res) => {
    const {codigo} =req.params;
    const sql = "SELECT * FROM alunos WHERE codigo = ?";
    banco.query(sql,[codigo],(erro, resultados)=>{
        if(erro){
            console.log(erro);
            return res.status(500).json({ error: "Erro ao consultar alunos"});

        }
        if(resultados.length === 0){
            return res.status(404).json({ message: "Aluno não encontrado"});

        }
    return res.status(200).json(resultados[0]);
});