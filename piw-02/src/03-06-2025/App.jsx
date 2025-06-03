import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingListItem from './ShoppingCart/ShoppingListItem'
import ShoppingListCart from './ShoppingCart/ShoppingListCart'
import Contador from './Contador'
import ChangeFace from './ChangeFace'
import Quadrado from "./QuadradaoDeCores/Quadrado.jsx"
import Quadradao from './QuadradaoDeCores/Quadradao.jsx'
import UseStatesAvancado from './UseStatesAvancado.jsx'
import Emojies from './EmojiesComStates/Emojies.jsx'

function App() {

  let listaProdutosItens = [
    {nome: "Pão", quantidade: 2, comprado: true},
    {nome: "Pizza", quantidade: 8, comprado: false},
    {nome: "Queijo de Cabra", quantidade: 2, comprado: false},
    {nome: "Gorgonzola", quantidade: 1, comprado: true},
  ]

  let listaDeCores = ["#F2D72E", "#FF6B6B", "#6BFF6B", "#6B6BFF", "#FFB6C1", "#8A2BE2", "#32CD32", "#FFD700", "#FF8C00", "#FF4500", "#ADFF2F", "#BA55D3", "#87CEEB", "#FF6347", "#00FA9A", "#B0C4DE", "#FF1493", "#FFA07A", "#7B68EE", "#FFDAB9", "#DA70D6", "#AFEEEE", "#EE82EE", "#9370DB", "#C71585", "#20B2AA", "#CD5C5C", "#8B0000", "#FFEFD5", "#DDA0DD"]


  return (
    <>
      <ShoppingListCart listaProdutos = {listaProdutosItens} />

      <Contador />

      <ChangeFace />

      <Quadradao listaDeCores={listaDeCores} />

      <UseStatesAvancado />

      <Emojies />

    </>
  )
}

export default App
