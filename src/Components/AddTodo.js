import React, { Component } from 'react'


class AddTodo extends Component{
    state = {
        content: ""
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        // Cancle auto refreshing
        e.preventDefault();

        // Checks duplicates
        const isExesits = this.props.todos.filter(todo => todo.content === this.state.content).length !== 0

        // Adding content (avoid empty/duplicate)
        if(!(!this.state.content.replace(/\s/g, '').length) && !isExesits){
            this.props.addTodo(this.state)
        }

        // Clean content field
        this.setState({
            content: ""
        })
    }

    render(){
        return(
            <div>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <label className="grey-text text-darken-1">Add new todo:</label>
                    <input type='text' onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}



export default AddTodo