import { useState, useEffect } from 'react';
import './ListaPersonagens.css'; // 1. Importa o arquivo CSS

export default function ListaPersonagens() {
  const [personagens, setPersonagens] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPersonagens = async () => {
            
      const apiUrl = `https://rickandmortyapi.com/api/character/?name=${searchTerm}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          // A API do Rick and Morty retorna 404 quando não encontra um personagem,
          // o que é um resultado esperado, não um erro de aplicação.
          if (response.status === 404) {
            setPersonagens([]);
          } else {
            throw new Error(`Erro HTTP: ${response.status}`);
          }
        } else {
          const data = await response.json();
          setPersonagens(data.results || []);
        }
      } catch (err) {
        console.error('Erro ao buscar personagens:', err);
      }
    };

    fetchPersonagens();

  }, [searchTerm]); // O efeito re-executa quando 'searchTerm' muda

  return (
    <div className="container">
      <h1>Lista de Personagens de Rick and Morty</h1>

      <input
        type="text"
        className="search-input"
        placeholder="Buscar personagem por nome..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
     
      <div className="character-grid">
        {personagens.map(personagem => (
          <div key={personagem.id} className="character-card">
            <img src={personagem.image} alt={personagem.name} />
            <h3>{personagem.name}</h3>
            <p>Espécie: {personagem.species}</p>
            <p>Status: {personagem.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}