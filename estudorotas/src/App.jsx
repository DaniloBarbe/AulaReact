import { BrowserRouter, Routes, Route } from "react-router-dom";
import EspiritoSanto from "./paginas/EspiritoSanto";
import Home from"./Paginas/Home";
import MinasGerais from "./paginas/MinasGerais";
import Parana from "./paginas/Parana";
import RioGrandeSul from "./paginas/RioGrandeSul";
import RioJaneiro from "./paginas/RioJaneiro";
import SantaCatarina from "./paginas/SantaCatarina";
import SaoPaulo from "./paginas/SaoPaulo";
export default function App()
{
    return (
        <div>
           <BrowserRouter>
           <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/sp" element={<SaoPaulo/>}/>
           <Route path="/mg" element={<MinasGerais/>}/>
           <Route path="/rj" element={<RioJaneiro/>}/>
           <Route path="/es" element={<EspiritoSanto/>}/>
           <Route path="/pr" element={<Parana/>}/>
           <Route path="/sc" element={<SantaCatarina/>}/>
           <Route path="/rs" element={<RioGrandeSul                       />}/>
           </Routes>
           
           </BrowserRouter>
            
        </div>
    );
}