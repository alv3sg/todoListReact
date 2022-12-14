import React, { useState } from "react"
import List from "./List"
import TodoForm from "./TodoForm"
import "./Todo.css"
function Todo(){    
    const [items, setItems] = useState([])

    function onAddItem(item){
        setItems([...items, item])
        //receber estado de um filho atraves de uma funcao 
    }
    
    return (
    <div className="container">
        <h1>Todo</h1>
        <TodoForm onAddItem={onAddItem}></TodoForm>
        <List items={items}></List>        
    </div>
    )
}


export default Todo