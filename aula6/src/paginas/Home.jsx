import { Link } from "react-router-dom"
export default function Home ()
{
    return(
        <div>
            <h1>Estudo de Rotas no React</h1>
         <ul>
             <li><Link to="/exemplos1">Exemplo1</Link></li>
             <li><Link to="/exemplos2">Exemplo2</Link></li>
             <li><Link to="/exercicio1">Exercicio1</Link></li>
             <li><Link to="/exercicio2">Exercicio2</Link></li>
             <li><Link to="/exercicio3">Exercicio3</Link></li>
             <li><Link to="/exercicio4">Exercicio4</Link></li>
             <li><Link to="/exercicio5">Exercicio5</Link></li>

         </ul>
        </div>
    )
}