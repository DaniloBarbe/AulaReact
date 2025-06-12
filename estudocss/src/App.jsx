import Exercicio1 from "./paginas/Exercicio1"
import Exercicio2 from "./paginas/Exercicio2"
import Exercicio3 from "./paginas/Exercicio3"
import Exercicio4 from "./paginas/Exercicios4"
import Exercicio5 from "./paginas/Exercicio5"
function App(){
  return(
    <div>
      <h1> estudos de CSS no react </h1>
      <Exercicio1/>
      <hr/>
      <Exercicio2/>
      <hr/>
      <Exercicio3/>
      <hr/>
      <Exercicio4 cor="blue"/>
      <hr/>
      <Exercicio5/>
    </div>
  )
}
export default App