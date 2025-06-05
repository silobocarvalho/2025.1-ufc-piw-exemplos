import {useState} from "react"

export default function ChangeFace(){
    // cria dois estados: um para o emoji (feliz ou triste) e outro para o contador
    const [isHappy, setIsHappy] = useState(true);
    const [contador, setContador] = useState(1);

    // função que alterna o emoji entre feliz e triste e incrementa o contador
    function changeEmoji(){
        setIsHappy(!isHappy)
        console.log(isHappy)
        setContador(contador + 1)
    }

    return (
        <div>
        {/* clicando no h1, chama a função changeEmoji */}
        <h1 onClick={changeEmoji} > {isHappy ? '😄' : '😞'} </h1>
        <h3>Contador: {contador}</h3>
        </div>
    )
}