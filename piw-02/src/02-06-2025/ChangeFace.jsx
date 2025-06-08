import { useState } from "react";

export default function ChangeFace() {
  // cria dois estados: um para o emoji (feliz ou triste) e outro para o contador
  const [isHappy, setIsHappy] = useState(false);
  const [contador, setContador] = useState(0);

  // função que alterna o emoji entre feliz e triste e incrementa o contador
  function changeHumor() {
    console.log("Entrou na funcao...");
    setIsHappy(!isHappy);
    setContador(contador + 1);
  }

  return (
    <div>
      {/* clicando no h1, chama a função changeEmoji */}
      <h1 onClick={changeHumor} style={{ fontSize: 80 }}>
        {isHappy ? "😄" : "😢"}{" "}
      </h1>
      <h2>Contador: {contador}</h2>
    </div>
  );
}
