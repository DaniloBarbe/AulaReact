export default function Exercicio3( {numero1, numero2, numero3} ){
    let soma = numero1+(numero1*(numero2**2/100)*numero3);
    return (
       <div>
          valor:{numero1}<br/>
          taxa: {numero2}<br/>
          tempo:{numero3}<br/>
          valor parcelado: {soma}
       </div>
    );
   }