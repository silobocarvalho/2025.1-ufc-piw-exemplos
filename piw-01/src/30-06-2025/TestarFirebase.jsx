import { ref, set, onValue } from 'firebase/database';
import { db } from '../Firebase/RealtimeDatabase.js'
import { useState } from 'react';

export default function TestarFirebase() {

    const [filmes, setFilmes] = useState([]);

    async function salvarDadosNoBanco() {
        try {
            const filmes = [
                { id: 1, nome: "John Carter: entre dois mundos" },
                { id: 2, nome: "Labirinto do Fauno" },
                { id: 3, nome: "Silêncio dos inocentes" },
                { id: 4, nome: "Marco Polo" }
            ];
            const chaveBanco = ref(db, 'filmes');
            // Salva a mensagem no banco de dados. Isso SOBRESCREVE o que estiver lá.
            await set(chaveBanco, filmes);
            console.log('Mensagem salva com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar mensagem:', error);
            alert('Erro ao salvar!');
        }
    }

    async function lerDadosDoBanco() {
        const filmesRef = ref(db, 'filmes');

        // onValue: Fica "ouvindo" as mudanças. Sempre que 'filmes' mudar,
        // essa função é executada.
        onValue(filmesRef, (snapshot) => { // esse nome snapshot é usado para representar uma "print" dos dados no banco no momento da consulta.
            //const filmesJson = snapshot.val(); //Resgata os dados em filmes
            // Precisamos alterar esta linha, pois agora estamos usando IDs gerados de forma automatica pelo firebase.
            // Entao, precisamos percorrer todas as chaves!
            let filmesIdsFirebase = snapshot.val();
            console.log(filmesIdsFirebase);
            if (filmesIdsFirebase) {
                let novosFilmes = [];
                for (let idFilme in filmesIdsFirebase) {
                    let filme = { idFirebase: idFilme, id: filmesIdsFirebase[idFilme].id, nome: filmesIdsFirebase[idFilme].nome }
                    console.log("Chave: " + idFilme);
                    console.log("Valor: " + filmesIdsFirebase[idFilme].nome);
                    novosFilmes.push(filme);
                }
                setFilmes(novosFilmes);
                //setFilmes(filmesJson);
                console.log(filmes)
            }
        }, (error) => {
            console.error("Erro ao ler mensagem:", error);
        });

    }


    return (
        <div>
            <button onClick={salvarDadosNoBanco}>Salvar dados!</button>
            <button onClick={lerDadosDoBanco}>Ler dados!</button>

            {
                filmes.length === 0 ? <h1>Não há filmes!</h1> : filmes.map((filme) => {
                    
                    return <h3>{filme.id} -- {filme.nome}</h3>
                })
            }

        </div>
    )
}
