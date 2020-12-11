import React from 'react';
import MessageList from '../containers/message_list'

const App = () => {

  

  return (
    <div className='messaging-wrapper'>
      <div className="logo-container"></div>
      <div className="channels-container"></div>
      <div className="channel-container">
        <MessageList />
        <MessageForm />
      </div>
    </div>
  );
};

export default App;
