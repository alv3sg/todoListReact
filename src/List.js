import "./Todo.css"

function List(props){
    return(
        <ul>
            {props.items.map(item => <li>{item}</li>)}
        </ul>
    )
}//utilizando a funcao map para mapear os itens do array items e cada item retornar dentro de um lista

export default List;