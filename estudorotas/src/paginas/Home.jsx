import { Link } from "react-router-dom"
export default function Home ()
{
    return(
        <div>
            <h1>Estudo de Rotas no React</h1>
         <ul>
             <li><Link to="/sp">Sao paulo</Link></li>
             <li><Link to="/sp">Sao paulo</Link></li>
             <li><Link to="/sp">Sao paulo</Link></li>
             <li><Link to="/sp">Sao paulo</Link></li>
             <li><Link to="/sp">Sao paulo</Link></li>
             <li><Link to="/sp">Sao paulo</Link></li>
             <li><Link to="/sp">Sao paulo</Link></li>
         </ul>
        </div>
    )
}