import "./Quadradinho.css";
import {useState} from "react";

export default function Quadradinho( {corInicial} ){
    
    const[cor, setCor] = useState(corInicial);

    function AlterarCor(){
        // Criar alguns numeros randoms para formar uma cor.
        let r1 = Math.floor(Math.random() * 255);
        let r2 = Math.floor(Math.random() * 255);
        let r3 = Math.floor(Math.random() * 255);
        setCor(`rgb(${r1},${r2},${r3})`);
        console.log(cor)
    }

    return(
        <div className="quadradinho" style={ {backgroundColor: cor} }
         onClick={AlterarCor}>

        </div>
    )
}