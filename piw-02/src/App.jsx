import './App.css';
import ShoppingListCart from './ShoppingListCart';
import ChangeFace from './ChangeFace';
import Contador from './Contador';
import ListaPersonagens from './09-06-2025/RickMorty/ListaPersonagens';

function App() {

  // criando uma lista de produtos como array de objetos
  // cada objeto representa um produto com nome, quantidade e se foi comprado ou não
  let listItemsShopping = [
    { nome: "Arroz", quantidade: 2, isCompleted: false },
    { nome: "Feijão", quantidade: 1, isCompleted: false },
    { nome: "Macarrão", quantidade: 3, isCompleted: false },
    { nome: "Carne", quantidade: 1, isCompleted: false },
    { nome: "Frango", quantidade: 2, isCompleted: false },
    { nome: "Ovos", quantidade: 12, isCompleted: false },
  ]

  return (
    <>
      {/* chamando o componente ShoppingListCart e passando a lista de produtos como props */}
      <ShoppingListCart shoppingList={listItemsShopping} />
      <ChangeFace />
      <Contador />

      <ListaPersonagens />

    </>
  )
}

export default App
