import { Link } from "react-router-dom";
export default function Parana() {
    return (
        <div>
            <h1>Seja Bem Vindo a</h1>
            <p>
                <img src="/PR.png" width={500}/>
            </p>
            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
        );
}