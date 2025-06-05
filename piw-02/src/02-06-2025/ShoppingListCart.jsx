import ShoppingListItem from "./ShoppingListItem";

// recebe uma lista de produtos e renderiza uma lista de compras através do componente ShoppingListItem
export default function ShoppingListCart({ shoppingList }) {
  return (
    <div>
      <h2>Lista de Compras</h2>
      <ul>
        {shoppingList.map((item) => {
          return (
            <ShoppingListItem
              id={item.id}
              nome={item.nome}
              quantidade={item.quantidade}
              isCompleted={item.isCompleted}
            />
          );
        })}
      </ul>
    </div>
  );
}
