import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Exemplos1 from "./paginas/Exemplos1";
import Exemplos2 from "./paginas/Exemplos2";
import "./paginas/estilos.css";
import Exercicio1 from "./paginas/Exercicio1";
import Exercicio2 from "./paginas/Exercicio2";
import Exercicio3 from "./paginas/Exercicio3";
import Exercicio4 from "./paginas/Exercicio4";
import Exercicio5 from "./paginas/Exercicio5";
export default function App()
{
    return (
        <div>
           <BrowserRouter>
           <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/exemplos1" element={<Exemplos1/>}/>
           <Route path="/exemplos2" element={<Exemplos2/>}/>
           <Route path="/exercicio1" element={<Exercicio1/>}/>
           <Route path="/exercicio2" element={<Exercicio2/>}/>
           <Route path="/exercicio3" element={<Exercicio3/>}/>
           <Route path="/exercicio4" element={<Exercicio4/>}/>
           <Route path="/exercicio5" element={<Exercicio5/>}/>
           </Routes>
           
           </BrowserRouter>
            
        </div>
    );
}