function consultar() {
    fetch("http://localhost:3001/alunos")
        .then(res => res.json())
        .then(data => {
            console.log("Alunos:", data);
            document.getElementById("resultado").innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(err => {
            document.getElementById("resultado").innerHTML = "Erro ao obter dados do API !";
        })
}

function consultarPorCodigo(codigo) {
    fetch("http://localhost:3001/alunos/" + codigo)
        .then(res => res.json())
        .then(data => {
            console.log("Alunos:", data);
            document.getElementById("resultado").innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(err => {
            document.getElementById("resultado").innerHTML = "Erro ao obter dados do API !";
        })
}

function cadastrar() {
    const aluno = {
        nome: "danilo",
        cidade: "Mococa",
        estado: "SP"
    };

    fetch("http://localhost:3001/alunos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(aluno)

    })
        .then(res => res.json())
        .then(data => {
            document.getElementById("resultado").innerHTML = data.message || data.error;
        })
        .catch(err => {
            document.getElementById("resultado").innerHTML = "erro do obter dados da API";
        });
}

function  alterar() 
{
    const alunoAtualizado  = {
        nome : "Victor Hugo Candido Alves",
        cidade : "Sao Paulo",
        estado : "SP"
    };

    fetch(`http://localhost:3001/alunos/${codigo}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(alunoAtualizado)
    })
    .then(res => res.json())
    .then(data =>{
        document.getElementById("resultado").innerHTML = data.message || deta.error;
    })
    .catch(err => {
        document.getElementById("resultado").innerHTML = "Erro ao obter dados da API !"
    })

}

function excluir()
{
 fetch(`http://localhost:3001/alunos/${codigo}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerHTML = data.message || data.error;
    })
    .catch(err => {
        document.getElementById("resultado").innerHTML = "Erro ao obter os dados da API !"
    })
}