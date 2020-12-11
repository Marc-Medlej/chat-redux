import React, { Component } from 'react';
import Message from '../components/message'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions/index'


class MessageList extends Component {

    componentWillMount() {
        this.fetchMessages();
    }
    
    componentDidMount() {
        this.refresher = setInterval(this.fetchMessages, 5000);
      }

      componentWillUnmount() {
        clearInterval(this.refresher);
      }

      fetchMessages = () => {
        this.props.fetchMessages(this.props.selectedChannel);
      }

    renderList = () => {
        if (this.props.messages === []) {
            return null;
        } else { 
            return this.props.messages.map((message) => {
              return (
                <Message
                  author={message.author}
                  key={message.author}
                  time={message.created_at}
                  content={message.content}
                />
              );
            });        
        }
    };

    render() {
        return (
            <div className="channel-content">
                 {this.renderList()}
            </div>
            );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { fetchMessages: fetchMessages },
        dispatch
    );
   }

function mapStateToProps(state) {
    return {
        messages: state.messages,
        selectedChannel: state.selectedChannel
    };
} 
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
   