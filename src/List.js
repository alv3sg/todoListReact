import "./Todo.css"
//recebdno um array de objetos, utilizando map para mapear e criar uma lista com seus itens
function List(props){
    return(
        <ul>
            {props.items.map(item => <li key={item.id}>{item.text}</li>)}
        </ul>
    )
}

export default List;