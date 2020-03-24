import React, { Component } from 'react'
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'
import Navbar from './Components/Navbar'
import './style.css'


class App extends Component {
  state = {
    todos: []
  }
  deleteTask = (id) => {
    let todos = this.state.todos.filter(task => task.id !== id)
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = this.state.todos.length
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  clearList = () => {
    this.setState({
      todos: []
    })
  }

  render(){
    return (
      <div className='todo-app container'>
        <Navbar clearList={this.clearList} />
        <Todos todos={this.state.todos} deleteTask={this.deleteTask} />
        <AddTodo todos={this.state.todos} addTodo={this.addTodo} />
      </div>
      
    )
  }
  
}

export default App;
