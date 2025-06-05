import { useState } from "react";

export default function Contador() {
  // cria um estado: contador, que inicia com o valor 0
  const [contador, setContador] = useState(0);

  // função que incrementa o contador em 1 e exibe o novo valor no console
  function incrementarContador() {
    setContador(contador + 1);
    console.log("Novo valor do contador: " + contador);
  }

  return (
    // ao clicar no botão, a função incrementarContador é chamada
    <>
      <h2>Contador</h2>
      <h4>Valor do contador: {contador} </h4>
      <button onClick={incrementarContador}>Incrementar</button>
    </>
  );
}
