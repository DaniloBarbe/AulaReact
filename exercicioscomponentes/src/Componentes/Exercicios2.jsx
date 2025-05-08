export default function Exercicio2( {numero1, numero2} ){
    let soma = Number(numero1) / (Number(numero2)*Number(numero2));
    return (
       <div>
          seu IMC é igual a {soma}
       </div>
    );
   }