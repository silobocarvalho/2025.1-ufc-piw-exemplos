import {useState} from "react";

export default function UseStateAvancado(){
    let usuarioPadrao = {
        nome: "Sidartha",
        idade: 34,
        curso: "Design Digital"
    }

    const[usuario, setUsuario] = useState(usuarioPadrao);

    function alterarNome(){
        setUsuario( {...usuario, nome: "Seu Joao"} ) ;
        console.log(usuario);
    }

    console.log(usuario);

    return(
        <>
        <h2>Usuario</h2>
        <h4>Nome: {usuario.nome}</h4>
        <h4>Idade: {usuario.idade}</h4>
        <h4>Curso: {usuario.curso}</h4>
        <button onClick={alterarNome}>Alterar nome</button>
        </>
    )

}