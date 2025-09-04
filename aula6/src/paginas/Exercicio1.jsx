import { Link } from "react-router-dom";
import { useState } from "react";
export default function Exercicio1() {
    
    const [n1, setn1] = useState(10);
    const [resultado, setResultado] = useState(0);


    function calcular() {
        let quad = Number(n1) ** 2;
        let cub = Number(n1) ** 3;

        //setResultado("o quadrao foi: " + quad + ", o cubo foi: " + cub);

        setResultado(
            <div>
                O quadrado do numero {n1} é {quad}. <br />
                O cubo do número {n1} é {cub}.
            </div>
        );
    }
    function limpar() {
  
        setResultado("");
    }
    return (
        <div>

            <h1> Exercicio1 </h1>
            <div className="container">
                <form>
                    <p>
                        digite o numero<br />
                        <input Type="text" value={n1} onChange={(e) => setn1(e.target.value)} />
                    </p>
                </form>
                <p>
                    <input type="button" value="Calcular" onClick={calcular} />

                </p>
                <p>
                    <input type="button" value="Limpar" onClick={limpar} />
                </p>


                <p>

                    <b>Resultado:</b><br />

                </p>
                <p>
                    {resultado}
                </p>

                <Link to="/">Voltar</Link>


            </div>
        </div>
    );

}
