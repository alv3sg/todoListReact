import React, { useState } from "react"
function TodoForm(props){    
    const [text, setText] = useState("")

    function handleChanger(event){
        let t = event.target.value //pegando o texto escrito no formulario
        setText(t)//setando/mudando de estado o texto
    }
    function addItem(event){
        event.preventDefault()//evita o comportamento padrao do botao
        if(text){
            //se tiver texto no formulario, chame a funcao e passe o texto
            props.onAddItem(text)
            setText("")
        }
    }
    return(
    <form>
        <input type="text" onChange={handleChanger} value={text}></input>
        <button onClick={addItem}>Add</button>
    </form>
    )
}
export default TodoForm