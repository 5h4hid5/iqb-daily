import React, { Component } from 'react';

export default class AddTask extends Component {

  render(){
    return(
      <form className="task">
        <input type="text" ref="task" className="newTask" placeholder="Add task..."/>
        <span className="delete"><button><img src="img/check-mark.svg" alt=""/></button></span>
      </form>
    );
  }

}
