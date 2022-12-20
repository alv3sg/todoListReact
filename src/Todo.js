import React, { useEffect, useState } from "react"
import List from "./components/List"
import TodoForm from "./components/TodoForm"
import Item from "./components/Item"
import "./Todo.css"
import Modal from "./components/Modal"

const SAVED_ITEMS = "savedItems"

function Todo(){    
    const [items, setItems] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        
        if(savedItems) {
            setItems(savedItems)                     
        }
    }, [])    

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items]) 

    function onAddItem(text){
        //receber estado de um filho atraves de uma funcao
        let item = new Item(text)
        //recebendo um objt
        setItems([...items, item]) 
        onHideModal()               
    }
   
    function onItemDelleted(item){
        //recebendo o item que vai ser deletado, salvando uma lista com todos os item menos o que sera deletado
        let filteredItems = items.filter(it=>it.id !== item.id)
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
    function onHideModal(e){
        setShowModal(false)       
    }
    
    return (
    <div className="container">
        <header className="header">
            <h1>Todo</h1><button onClick={()=>{
                setShowModal(true)
            }} className="addButton">+</button>
        </header>
        <List onItemDelleted={onItemDelleted} onItemChecked={onItemChecked} items={items}></List> 
        
        <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>       
        
    </div>
    )
}


export default Todo