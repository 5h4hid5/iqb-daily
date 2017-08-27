import React, { Component } from 'react';

export default class Task extends Component {

  toggleCompleted(id){
    console.log(id);
    let task = document.getElementById(id);
    task.className += " completed";
  }

  render(){
    return(
      <div className="task">
        <span className="done" id={this.props.todo.id}><input type="checkbox" id="done" onClick={this.toggleCompleted.bind(null, this.props.todo.id)}/><label htmlFor="done"></label></span>
        <span className="text">{this.props.todo.task}</span>
        <span className="delete"><button><img src="img/delete-button.svg" alt=""/></button></span>
      </div>
    );
  }

}
