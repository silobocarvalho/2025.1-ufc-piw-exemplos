# PIW 01

Esse é o repositório que contém alguns dos principais assuntos abordados para a disciplina de Projeto de Interfaces Web (PIW), referente a turma 01.

## Conteúdo

### Props
Props são propriedades que podem ser passadas para componentes React, semelhante a parametros de funções. Elas permitem que você configure componentes de forma dinâmica e reutilizável.

Exemplo de uso de props:

Você pode criar um componente que recebe `nome` e `idade` como props e exibe uma mensagem personalizada.

```jsx
function Componente({ nome, idade }) {
  return (
    <div>
      <h1>Olá, {nome}!</h1>
      <p>Você tem {idade} anos.</p>
    </div>
  );
}

export default Componente;
```
Ao importar e usar esse componente, você pode passar diferentes valores para as props `nome` e `idade`:

``` jsx
import Componente from './Componente';
function App() {
  return (
    <div>
      <Componente nome="João" idade={30} />
      <Componente nome="Maria" idade={25} />
    </div>
  );
};
export default App;
```

### Eventos
Os eventos em React são ações que ocorrem no navegador, como cliques, teclas pressionadas, entre outros. Você pode adicionar manipuladores de eventos aos elementos JSX para responder a essas ações.

Exemplo de uso de eventos:
```jsx
function Botao () {
  function handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <button onClick={handleClick}>
      Clique aqui
    </button>
  );
};
export default Botao;
```

Ao clicar no botão, a função `handleClick` será chamada e exibirá um alerta. Note que para adicionar um evento, você usa a sintaxe `on<Evento>` no JSX, como `onClick`, `onChange`, etc.

### Estados
Os estados são conceitos fundamentais do React que permitem que você armazene e gerencie dados dentro de um componente. Eles são usados para criar componentes dinâmicos que podem responder a mudanças de dados.

#### Por que usar estados?
Os estados permitem que você crie interfaces de usuário interativas e dinâmicas. Quando o estado de um componente muda, o React re-renderiza automaticamente o componente para refletir as novas informações. 

> se for utilizadas apenas variáveis comuns, o React não saberá quando re-renderizar o componente, resultando em uma interface de usuário que não reflete as mudanças de dados. Ou seja a interface não será atualizada automaticamente.

Exemplo de uso de estados:
```jsx
function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};
export default Contador;
```
Neste exemplo, usamos o hook `useState` para criar um estado chamado `contador` com o valor inical 0. A função `setContador` é usada para atualizar o valor do contador. Quando o botão é clicado, a função `incrementar` é chamada, atualizando o estado e fazendo com que o componente seja re-renderizado com o novo valor do contador.