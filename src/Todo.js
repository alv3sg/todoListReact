import React, { useState } from "react"
import List from "./List"
import TodoForm from "./TodoForm"
import Item from "./Item"
import "./Todo.css"
function Todo(){    
    const [items, setItems] = useState([])

    function onAddItem(text){
        //receber estado de um filho atraves de uma funcao
        let it = new Item(text)
        //recebendo um objt
        setItems([...items, it])         
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