import './App.css'
import ShoppingListCart from './ShoppingListCart'
import Contador from './Contador'
import ChangeFace from './ChangeFace'

function App() {

  // criando uma lista de produtos como array de objetos
  // cada objeto representa um produto com nome, quantidade e se foi comprado ou não
  let listaProdutosItens = [
    {nome: "Pão", quantidade: 2, comprado: true},
    {nome: "Pizza", quantidade: 8, comprado: false},
    {nome: "Queijo de Cabra", quantidade: 2, comprado: false},
    {nome: "Gorgonzola", quantidade: 1, comprado: true},
  ]

  return (
    <>
      {/* chamando o componente ShoppingListCart e passando a lista de produtos como props */}
      <ShoppingListCart listaProdutos = {listaProdutosItens} />

      <Contador />

      <ChangeFace />
    </>
  )
}

export default App