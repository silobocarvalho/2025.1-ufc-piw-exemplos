import './App.css';
import ShoppingListCart from './ShoppingListCart';
import ChangeFace from './ChangeFace';
import Contador from './Contador';
import ListaPersonagens from './09-06-2025/RickMorty/ListaPersonagens';

function App() {
  return (
    <>
      {/* chamando o componente ShoppingListCart e passando a lista de produtos como props */}
      <ShoppingListCart shoppingList={listItemsShopping} />
      <ChangeFace />
      <Contador />

      <ListaPersonagens />

      <h1>Turma 02</h1>
    </>
  )
}

export default App
