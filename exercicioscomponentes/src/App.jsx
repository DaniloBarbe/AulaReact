import Exemplo1 from "./Componentes/exemplo1"
import Exercicio1 from "./Componentes/Exercicio1"
import Exercicio2 from "./Componentes/Exercicios2"
import Exercicio3 from "./Componentes/Exercicios3"
import Exercicio4 from "./Componentes/Exercicios4"
import Exercicio5 from "./Componentes/Exercicios5"
export default function App(){
  return(
    <div>
      <h1> Exercicios de Componentes</h1>
      <h3>Chamada para o Exemplo1</h3>
      <Exemplo1 numero1={8} numero2={2}/>
      <h3>Chamada para o Exercicico1</h3>
      <Exercicio1 numero1={50}/>
      <h3>Chamada para o Exercicico2</h3>
      <Exercicio2 numero1={71} numero2={1.73}/>
      <h3>Chamada para o Exercicico3</h3>
      <Exercicio3 numero1={100} numero2={10} numero3={2} />
      <h3>Chamada para o Exercicico4</h3>
      <Exercicio4 numero1={10} numero2={10} tipo={'retangulo'} />
      <h3>Chamada para o Exercicico5</h3>
      <Exercicio5 qdt={10}/>
    </div>
  )
}