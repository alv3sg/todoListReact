import React, { useState } from "react"
import "./Todo.css"

function Todo(){

    const [text, setText] = useState("")

    function handleChanger(event){
        let t = event.target.value
        setText(t)
    }
    return (
    <div className="container">
        <h1>Todo</h1>
        <form>
            <input type="text" onChange={handleChanger}></input>
            <button>Add</button>
        </form>
        <ul>
            <li>{text}</li>
        </ul>
    </div>
    )
}

export default Todo