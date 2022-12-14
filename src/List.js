import React, { useState } from "react"
import "./Todo.css"

function List(props){
    return(
        <ul>
            {props.items.map(item => <li>{item}</li>)}
        </ul>
    )
}

export default List;