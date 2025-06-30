import { useState } from "react";
import { ref, push, set } from 'firebase/database'
import { db } from './FirebaseRealtimeDatabase.js'

export default function CadastrarFilme() {

    const [idFilme, setIdFilme] = useState(-1);
    const [nomeFilme, setNomeFilme] = useState("");

    async function cadastrarFilme() {

        const filme = { id: idFilme, nome: nomeFilme };

        try {
            const chaveBanco = ref(db, 'filmes');
            // Salva a mensagem no banco de dados. Isso SOBRESCREVE o que estiver lá.
            const novoFilmeIdRef = await push(chaveBanco);
            await set(novoFilmeIdRef, filme);
            console.log('Mensagem salva com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar mensagem:', error);
            alert('Erro ao salvar!');
        }
    }

    return (
        <div>
            <label for="id">ID: </label> <input id="id" type="number" onChange={(e) => setIdFilme(e.target.value)}></input> <br />
            <label for="nome">Nome: </label> <input id="nome" type="text" onChange={(e) => setNomeFilme(e.target.value)}></input> <br />
            <button onClick={cadastrarFilme}>Cadastrar</button>
        </div>)

}