import "./Todo.css"
//recebdno um array de objetos, utilizando map para mapear e criar uma lista com seus itens
function List(props){
    
    return(
        <ul>
            {props.items.map(item => <li className={item.done ? "done" : ""} key={item.id}>
                {item.text}
                <button onClick={()=>{props.onItemDelleted(item)}}>DEL</button>
                <input type="checkbox" onClick={()=>{props.onItemChecked(item)}}></input>
                
            </li>)} 
        </ul>
    )
}

export default List;