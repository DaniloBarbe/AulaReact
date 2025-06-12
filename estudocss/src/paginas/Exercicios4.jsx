export default function Exercicio4({ cor }) {

    const borda = {
        border: "2px solid " + cor,
        textAlign: "center",
        padding: "10px"
    };
    return (
        <div>
            <h2 style={ borda }>vina jogando truco</h2>
            <p style={{color : cor}}>comigo</p>

        </div>
    )
}