import "../Todo.css"
import Card from "./Card"
import ListItems from "./ListItems";
//recebdno um array de objetos, utilizando map para mapear e criar uma lista com seus itens
function List(props){
    
    return(
        <ul>
            {props.items.map(item => <ListItems key={item.id} item={item} onItemDelleted={props.onItemDelleted} onItemChecked={props.onItemChecked}></ListItems>)} 
        </ul>
    )
}

export default List;