import React from 'react';
import '../style.css'
const Todos = ({todos, deleteTask}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="todo collection-item indigo lighten-5" 
                onClick={() => {deleteTask(todo.id)}}
                key={todo.id}>
                <span>{todo.content}</span>
                <i className="material-icons right">cancel</i>
           
                
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left !</p>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
        
        
    ) 
}


export default Todos     