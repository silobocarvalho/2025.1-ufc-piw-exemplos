import "./Quadradao.css"
import Quadrado from "./Quadrado.jsx"

// listaDeCores = ["#334455", "#334455", "#334455", "#334455", "#223455"]
export default function Quadradao( {listaDeCores} ){
    return(
        <div className="quadradao">
            {
                listaDeCores.map( cor => {
                    return <Quadrado cor={cor} listaDeCores={listaDeCores} />
                })
            }
        </div>
    )
}