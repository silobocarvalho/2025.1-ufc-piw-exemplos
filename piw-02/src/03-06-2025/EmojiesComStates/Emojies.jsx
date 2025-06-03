import {useState} from "react"

export default function Emojies(){
    const listaDeEmojis = ["😀", "👍", "🚀", "💡", "🎉", "❤️", "🌟", "😎", "🌈", "🔥", "💯", "✅", "🥳", "✨", "👏", "😊", "🌸", "🍔", "💻", "📚"];
    
    const[emojies, setEmojies] = useState(["😀"])

    function addEmoji(){
        let posicaoNovoEmoji = Math.floor(Math.random() * listaDeEmojis.length);
        let novoEmoji = listaDeEmojis[posicaoNovoEmoji];
        emojies.push(novoEmoji);
        setEmojies([...emojies]);
        console.log(emojies);
    }
    
    return(
        <div>
            <span style={ {fontSize: 60} }>{emojies}</span>
            <br />
            <button onClick={addEmoji}>Adicionar Emoji</button>
        </div>
    )

}