import { db } from './FirebaseRealtimeDatabase.js'
import { ref, onValue } from 'firebase/database';

export default function ListarFilmes() {
    //Vamos pegar os filmes la do firebase.
    let filmesJson = [];
    async function lerDadosDoBanco() {
        const filmesRef = ref(db, 'filmes');
        // onValue: Fica "ouvindo" as mudanças. Sempre que 'filmes' mudar,
        // essa função é executada.
        onValue(filmesRef, (snapshot) => { // esse nome snapshot é usado para representar uma "print" dos dados no banco no momento da consulta.
            filmesJson = snapshot.val(); //Resgata os dados em filmes
            console.log(filmesJson)
        }, (error) => {
            console.error("Erro ao ler mensagem:", error);
        });

    }

    lerDadosDoBanco();


    return (
        <>
        {filmesJson.map( (filme) => {
            return <h3> {filme.id} - {filme.nome}</h3>
        } )}
        </>
    )
}