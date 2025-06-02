import "./ShoppingListItem.css";
export default function ShoppingListItem({
  id,
  nome,
  quantidade,
  isCompleted,
}) {
  let className = isCompleted ? "completed" : "incomplete";

  function alterarCss() {
    alert("Voce clicou!");
  }

  return (
    <div onClick={alterarCss}>
      <li class={className}>
        {nome} - {quantidade} unidades
      </li>
    </div>
  );
}
