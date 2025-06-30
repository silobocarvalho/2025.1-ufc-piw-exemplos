import { useState } from "react";
import { ref, set, push } from 'firebase/database';
import { db } from '../Firebase/RealtimeDatabase.js'

export default function CadastrarFilme(){
    
    const[novoFilmeId, setNovoFilmeId] = useState(-1);
    const[novoFilmeNome, setNovoFilmeNome] = useState("");

    async function cadastrarFilme(){
        let novoFilme = {
            id: novoFilmeId,
            nome: novoFilmeNome 
        };

        try {
                    const chaveBanco = ref(db, 'filmes');
                    // Salva a mensagem no banco de dados. Isso SOBRESCREVE o que estiver lá.
                    
                     const novoFilmeRef = push(chaveBanco);

                    await set(novoFilmeRef, novoFilme);
                    console.log('Mensagem salva com sucesso!');
                } catch (error) {
                    console.error('Erro ao salvar mensagem:', error);
                    alert('Erro ao salvar!');
                }
    }

    return(
        <div>
        <label for="id">ID: </label> <input id="id" type="number" onChange={ e => setNovoFilmeId(e.target.value) } /> <br />
        <label for="nome">Nome: </label> <input id="nome" type="text" onChange={ e => setNovoFilmeNome(e.target.value) } /> <br />
        <button onClick={cadastrarFilme}>Cadastrar Filme</button>

    </div>
    )
}