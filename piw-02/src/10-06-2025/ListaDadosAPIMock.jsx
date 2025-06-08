import {useState, useEffect} from "react";
import "./ListaDadosAPIMock.css";

export default function ListaDadosAPIMock(){
    
    const urlAPIMock = "http://localhost:3000/characters";
    const [personagens, setPersonagens] = useState([]);
    
    async function fetchDadosAPIMock(){
        let personagensRequest = await fetch(urlAPIMock);
        let personagensJson = await personagensRequest.json();
        setPersonagens(personagensJson);
    }

    useEffect( () => {
        fetchDadosAPIMock();
    }, []);

    return(
        <div>
            {personagens.map( (personagem) => {
                return <div className="card">
                        <p>ID: {personagem.id}</p>
                        <p>Nome: {personagem.name}</p>
                        <p>Ocupação: {personagem.occupation}</p>
                    </div>
            })}
        </div>
    )
}