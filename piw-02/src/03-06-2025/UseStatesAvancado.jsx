import {useState} from "react"

export default function UseStatesAvancado(){

    let usuarioPadrao = {
        nome: "Sidartha",
        email: "sidartha@ufc.br",
        curso: "Design Digital"
    }

    const[usuario, setUsuario] = useState(usuarioPadrao)
    
    function alterarNome(){
        setUsuario({...usuario, nome: "Joao"});

        console.log(usuario);
    }

    
    return(
        <>
            <h1>Usuário</h1>
            <h3>Nome: {usuario.nome}</h3>
            <h3>Email: {usuario.email}</h3>
            <h3>Curso: {usuario.curso}</h3>
            <button onClick={alterarNome}>Alterar nome</button>
        </>
    )
}