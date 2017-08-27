import React, { Component } from 'react';

export default class Quote extends Component {
  render(){
    return(
      <div className="quoteBlock">
      <p className="quote">{this.props.data.quote}</p>
      <p className="author">{"[ "+this.props.data.source +" ]"}</p>
      <a href="https://islamicquotesbangla.com/" target="_blank" rel="noopener noreferrer">islamicquotesbangla.com</a>
      </div>
    );
  }
}
