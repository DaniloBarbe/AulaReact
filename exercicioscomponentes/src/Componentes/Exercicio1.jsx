export default function Exercicio1( {numero1} ){
    let soma = ((Number(numero1)-32)*5)/9;
    return (
       <div>
           A temperatura em F {numero1} é igual gral Celsius {soma}
       </div>
    );
   }