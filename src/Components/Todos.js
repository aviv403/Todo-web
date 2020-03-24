import React, { Component } from 'react';
import '../style.css'

class Todos extends Component{
    handleClick = (event) => {
        event.target.style.textDecoration === "line-through" ? 
        (event.target.style.textDecoration = "none") : 
        (event.target.style.textDecoration = "line-through")
    }

    render(){
        const todoList = this.props.todos.length ? (
            this.props.todos.map(todo => {
                return(
                    <div className="todo collection-item indigo lighten-5" key={todo.id} onClick={this.handleClick}>
                        <span>{todo.content}</span>
                        <i className="delIcon material-icons right" onClick={() => {this.props.deleteTask(todo.id)}}>
                            delete
                        </i>
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
    
}


export default Todos     