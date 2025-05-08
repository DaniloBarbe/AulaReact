import Exemplo1 from "./Componentes/exemplo1"
import Exercicio1 from "./Componentes/Exercicio1"
import Exercicio2 from "./Componentes/Exercicios2"
export default function App(){
  return(
    <div>
      <h1> Exercicios de Componentes</h1>
      <h3>Chamada para o Exemplo1</h3>
      <Exemplo1 numero1={8} numero2={2}/>
      <h3>Chamada para o Exercico1</h3>
      <Exercicio1 numero1={50}/>
      <h3>Chamada para o Exercico1</h3>
      <Exercicio2 numero1={71} numero2={1.73}/>
    </div>
  )
}