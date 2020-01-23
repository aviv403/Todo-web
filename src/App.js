import React, { Component } from 'react'
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'
import Navbar from './Components/Navbar'
import './style.css'


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTask = (id) => {
    let todos = this.state.todos.filter(task => task.id !== id)
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }


  render(){
    return (
      <div className='todo-app container'>
        <Navbar />
        <h1 className="todo-title center">Todo's</h1>
        <Todos todos={this.state.todos} deleteTask={this.deleteTask} />
        <AddTodo todos={this.state.todos} addTodo={this.addTodo}/>
      </div>
      
    )
  }
  
}

export default App;
