import { Link } from "react-router-dom";
import { useState } from "react";
export default function Exemplo1() {
    const [nome, setNome] = useState("danilo");
    const [idade, setIdade] = useState(0);
    const [resultado, setResultado] = useState(null);
    function calcular() {
        let dias = Number(idade) + Number(nome);
        setResultado("a soma foi: "+ dias +;
    
        let dias4 = Number(idade)-Number(nome);
        setResultado("a subtraçao foi: "+ dias4 );
   

        let dias1 = Number(idade) * Number(nome);
        setResultado("a multiplicaçao foi: "+ dias1 );
  
        let dias2 = Number(idade) / Number(nome);
        setResultado("a divisao foi: "+ dias2 );
    
 
        let dias3 = Number(idade) + Number(nome);
        setResultado("a soma foi: "+ dias3 );
     }
    function limpar() {
        setNome("");
        setIdade("");
        setResultado("");
    }
    return (
        <div>

            <h1> Exemplo1 </h1>
            <div className="container">
                <form>
                    <p>
                        digite o primero numero<br />
                        <input Type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </p>
                    <p>
                        digite o segundo numero<br />
                        <input Type="text" value={idade} onChange={(e) => setIdade(e.target.value)} />
                    </p>
                </form>
                <p>
                    <input type="button" value="Exemplo 1" onClick={calcular} />
                    <input type="button" value="Limpar" onClick={limpar} />
                </p>
                <p>
                    <b>Resultado:</b><br />
                    Nome:{nome}<br />
                    Idade: {idade}

                </p>
                <p>
                    {resultado}
                </p>
                <Link to="/">Voltar</Link>
            </div>
        </div>
    );
}