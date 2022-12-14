import React, { useState } from "react"
import List from "./List"
import TodoForm from "./TodoForm"
import Item from "./Item"
import "./Todo.css"
function Todo(){    
    const [items, setItems] = useState([])

    function onAddItem(text){
        //receber estado de um filho atraves de uma funcao
        let item = new Item(text)
        //recebendo um objt
        setItems([...items, item])         
    }
    function onItemDelleted(item){
        //recebendo o item que vai ser deletado, salvando uma lista com todos os item menos o que sera deletado
        let filteredItems = items.filter(it=>it.id != item.id)
        //colocando os novos item na tela sem o item deletado
        setItems(filteredItems)
    
    }
    
    return (
    <div className="container">
        <h1>Todo</h1>
        <TodoForm onAddItem={onAddItem}></TodoForm>
        <List onItemDelleted={onItemDelleted} items={items}></List>        
    </div>
    )
}


export default Todo