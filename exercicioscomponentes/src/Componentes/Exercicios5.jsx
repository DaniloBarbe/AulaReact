export default function Exercicio5( {qdt} ){
    let salario = qdt*150;
    let liquido = salario/0.08;
    return (
       <div>
          quantidade:{qdt}<br/>
          salario bruto: {salario}<br/>
          desconto:{liquido}<br/>
          salario liquido: {(salario-liquido)}
       </div>
    );
   }