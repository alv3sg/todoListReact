import React, { useState } from "react"
import List from "./List"
import "./Todo.css"

function Todo(){

    const [text, setText] = useState("")
    const [items, setItems] = useState([])

    function handleChanger(event){
        let t = event.target.value
        setText(t)
    }
    function addItem(event){
        event.preventDefault()//evita o comportamento padrao do botao
        if(text){
            setItems([...items, text])
            setText("")
        }
    }
    return (
    <div className="container">
        <h1>Todo</h1>
        <form>
            <input type="text" onChange={handleChanger} value={text}></input>
            <button onClick={addItem}>Add</button>
        </form>
        <List items={items}></List>
    </div>
    )//utilizando a funcao map para mapear os itens do array items e cada item retornar dentro de um li
}

export default Todo