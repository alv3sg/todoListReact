import "../Todo.css"
import Card from "./Card"
//recebdno um array de objetos, utilizando map para mapear e criar uma lista com seus itens
function ListItems(props){    
    return(
        <li >
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button onClick={()=>{props.onItemDelleted(props.item)}}>DEL</button>
                    <input type="checkbox" onClick={()=>{props.onItemChecked(props.item)}}></input>
                </div>
            </Card>
        </li>) 
        
}

export default ListItems;