import ShoppingListItem from "./ShoppingListItem"

// recebe uma lista de produtos e renderiza uma lista de compras através do componente ShoppingListItem
export default function ShoppingListCart({listaProdutos}){
    return (
        <>
            <h1>Lista de Compras</h1>
            <ul>
            {
                listaProdutos.map( produto => {
                    return <ShoppingListItem nomeProduto={produto.nome} 
                    quantidade = {produto.quantidade} 
                    comprado={produto.comprado} />
                } )
            }
            </ul>
        </>
    )
}