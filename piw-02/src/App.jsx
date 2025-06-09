import ListaDadosAPIMock from './10-06-2025/ListaDadosAPIMock';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ShoppingListCart from './02-06-2025/ShoppingListCart'
import Emojies from './03-06-2025/EmojiesComStates/Emojies'
import Quadradao from './03-06-2025/QuadradaoDeCores/Quadradao'
import ListaPersonagens from './09-06-2025/RickMorty/ListaPersonagens'
import NoPage from './NoPage'


function App() {
  
  let shoppingList = [{id: 1, nome: "Pão", quantidade: 2, isCompleted: true}, {id: 2, nome: "Mortadela", quantidade: 1, isCompleted: false}, ]
  let listaDeCores = ["#080", "#F00", "#FF0", "#169", "#841"]
  return (
    <BrowserRouter> 
      <div>
        <nav>
          <a href='/'>ShoppingListCart App | </a>
          <a href='/emojies'>Emojies com States | </a>
          <a href='/quadradao'>Quadradão de Cores | </a>
          <a href='/rickmorty'>Personagens Rick & Morty</a>
        </nav>
      </div>        
        <Routes>
          <Route path='/' element={<ShoppingListCart shoppingList={shoppingList}/>} />
          <Route path='/emojies' element={<Emojies />} />
          <Route path='/quadradao' element={<Quadradao listaDeCores={listaDeCores} />} />
          <Route path='/rickmorty' element={<ListaPersonagens />} />

          <Route path='*' element={<NoPage />} />
        </Routes>
      
    </BrowserRouter>
  )
}

export default App
