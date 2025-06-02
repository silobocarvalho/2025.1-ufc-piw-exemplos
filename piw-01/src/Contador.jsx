import {useState} from "react"

export default function Contador(){

    // cria dois estados: um para o valor do contador e outro para o nome do usuário
    const [valorContador, setValorContador] = useState(0);
    const [nomeUsuario, setNomeUsuario] = useState("Sem nome");
    
    // função que aumenta o contador e altera o nome do usuário 
    function aumentarContador(){
        setValorContador(valorContador + 1);
        alterarNome();
    }

    // função que altera o nome do usuário, adicionando o valor atual do contador
    function alterarNome(){
        setNomeUsuario("Joao " + valorContador)
    }

    return (
        // ao clicar no div, chama a função aumentarContador
        <div onClick={aumentarContador}>
            <h1>Contador</h1>
            <h3>{valorContador}</h3>
            <h3>Nome do usuário: {nomeUsuario}</h3>
        </div>
    )
}