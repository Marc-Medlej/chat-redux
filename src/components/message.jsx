import React, { Component } from 'react';

class Message extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className='message-container'>
        <i>
        <span>{this.props.author}</span>
        <small>{this.props.time}</small>
        </i>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Message;