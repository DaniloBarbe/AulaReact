export default function Exercicio4( {numero1, numero2, tipo} ){
    if (tipo=="triangulo"){
            let soma = numero1*numero2/2;
            return (
               <div>
                 area do triangulo:{soma}
               </div>
            );
           }else if (numero1==numero2){
            let soma = numero1*numero2;
            return (
               <div>
                 area do quadrado:{soma}
               </div>
            );

    }else if (tipo=='retangulo'){
        let soma = numero1*numero2;
        return (
           <div>
             area do retangulo:{soma}
           </div>
        );}}