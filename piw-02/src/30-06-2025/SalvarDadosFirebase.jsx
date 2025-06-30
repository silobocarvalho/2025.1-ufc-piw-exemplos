import { ref, set } from 'firebase/database';
import {db} from './FirebaseRealtimeDatabase.js'
export default function SalvarDadosFirebase() {

    async function salvarDadosNoBanco() {
        try {
            const filmes = [
                { id: 1, nome: "John Carter: entre dois mundos" },
                { id: 2, nome: "Labirinto do Fauno" },
                { id: 3, nome: "Silêncio dos inocentes" },
                { id: 4, nome: "Marco Polo" }
            ]
            const chaveBanco = ref(db, 'filmes');
            // Salva a mensagem no banco de dados. Isso SOBRESCREVE o que estiver lá.
            await set(chaveBanco, filmes);
            console.log('Mensagem salva com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar mensagem:', error);
            alert('Erro ao salvar!');
        }
    }

    salvarDadosNoBanco();


}