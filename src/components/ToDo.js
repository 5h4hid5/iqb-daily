import React, { Component } from'react';
import Task from './Task';
import AddTask from './AddTask';

export default class ToDo extends Component {

  render(){

    return(
      <div className="ToDo">
        <div className="ToDoList ToDoVisible">
          {this.props.todos.map((todo) => {
            return <Task key={todo.id} id={todo.id} todo={todo}/>;
          })}
          <AddTask />
        </div>
        <button className="toggleToDo"><img src="img/list.svg" alt=""/></button>
      </div>
    );
  }

}
