import Quadradinho from "./Quadradinho"
import "./Quadrado.css"
export default function Quadrado(){
    function criarQuadradinhos(){
        let meusQuadradinhos = [];
        for(let i=0; i<25; i++){
            meusQuadradinhos.push(<Quadradinho corInicial="brown" />);
        }
        return meusQuadradinhos;
    }
    return(
        <div className="quadrado">
            {criarQuadradinhos()}
        </div>
    )
}