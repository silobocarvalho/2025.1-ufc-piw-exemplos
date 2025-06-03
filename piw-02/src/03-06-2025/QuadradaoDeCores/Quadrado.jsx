import "./Quadrado.css"
import {useState} from "react"

export default function Quadrado({corInicial, listaDeCores}){

    const[cor, setCor] = useState(corInicial)

    function alterarCor(){
        let corAleatoria = Math.floor(Math.random()*30);
        setCor(listaDeCores[corAleatoria])
    }
    
    return(
        <div className="quadrado" style={ {backgroundColor: cor} } onClick={alterarCor}>

        </div>
    )
}