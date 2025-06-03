import {useState} from "react";

export default function Emojies(){
    let listaEmojies = ["😀","😁","😂","😃","😄","🥳","😆","🥰","😊","🤣","😋","😍","😝","🤠","😎","😺","😻","🤩","😇","😸"];

    const[emojies, setEmojies] = useState(["😄"])

    function addEmoji(){
        console.log("Clicou no add Emoji");
        let indiceEmoji = Math.floor(Math.random() * listaEmojies.length);
        emojies.push(listaEmojies[indiceEmoji]);
        setEmojies([...emojies]);
        console.log(emojies);
    }

    return (
        <div  >
            <span style={ {fontSize: 80} }>{emojies}</span>
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )

}