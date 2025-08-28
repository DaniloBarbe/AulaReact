import { Link } from "react-router-dom";
import{useState} from "react";
export default function Exemplo1() {
    const[nome, setNome]=useState("danilo");
    const[idade, setIdade]= useState(0);
    const[resultado, setResultado]= useState(null);
    function calcular(){
        let dias = Number(idade )* 365;
        setResultado("ola"+nome+"vc ja viveu"+dias+"dias");
    }
    function limpar()
    {
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
                    digite o nome do aluno<br />
                    <input Type="texte" value={nome} onChange= {(e) => setNome(e.target.value)}/>
                </p>
                <p>
                    digite o idade do aluno<br />
                    <input Type="texte" value={idade} onChange= {(e) => setIdade(e.target.value)}/>
                </p>
            </form>
            <p>
                <input type="button"value="Exemplo 1" onClick={calcular}/>
                <input type="button"value="Limpar" onClick={limpar}/>
                            </p>
                            <p>
                                <b>Resultado:</b><br/>
                                Nome:{nome}<br/>
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