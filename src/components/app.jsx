import React from 'react';
import MessageList from '../containers/message_list'
import MessageForm from '../containers/message_form'

const App = () => {

  

  return (
    <div className='messaging-wrapper'>
      <div className="logo-container"></div>
      <div className="channels-container"></div>
      <div className="channel-container">
        <MessageList />
      </div>
    </div>
  );
};

export default App;
