import ListaDadosAPIMock from './10-06-2025/ListaDadosAPIMock';
import CadastrarFilme from './30-06-2025/CadastrarFilme';
import ListarFilmes from './30-06-2025/ListarFilmes';
import SalvarDadosFirebase from './30-06-2025/SalvarDadosFirebase';
import './App.css';



function App() {
  return (
    <>
      <h1>Turma 02</h1>

    <ListaDadosAPIMock/>
    
    <ListarFilmes />

    <CadastrarFilme />

    </>
  )
}

export default App
