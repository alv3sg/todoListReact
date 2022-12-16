import React, { useEffect, useState } from "react"
import List from "./components/List"
import TodoForm from "./components/TodoForm"
import Item from "./components/Item"
import "./Todo.css"

const SAVED_ITEMS = "savedItems"

function Todo(){    
    const [items, setItems] = useState([])

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if(savedItems) {
            setItems(savedItems)
        }
    }, [])

    useEffect(() => {        
        if(items != ""){    
            localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
        }
    }, [items])

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
    function onItemChecked(item){        
        //recebendo um item que vai ser alterado
        let updateditems = items.map(it => {
            if(it.id === item.id){
                item.done = !item.done
            }
            return it;
        })
        setItems(updateditems)        
    }
    
    return (
    <div className="container">
        <h1>Todo</h1>
        <TodoForm onAddItem={onAddItem}></TodoForm>
        <List onItemDelleted={onItemDelleted} onItemChecked={onItemChecked} items={items}></List>        
    </div>
    )
}


export default Todo