import "./ShoppingListItem.css"

export default function ShoppingListItem({nomeProduto, quantidade, comprado}){
    // comprado é true ou false

    let nomeClasseCss = comprado ? "comprado" : "pendente"

    // função que exibe um alerta quando o item é clicado
    function mostrarJanela(){
        alert("Voce clicou!");
    }


    return (
        <>
            <li onClick={mostrarJanela} class={nomeClasseCss} >Nome do Produto: {nomeProduto} -- Quantidade: {quantidade}</li>
        </>
    )
}