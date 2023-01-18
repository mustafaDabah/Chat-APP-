import React from 'react';
import { MessageType } from '../../../../utils/Types/registerTypes';
import useMessages from '../../hooks/useMessages';
import Message from '../Message/Message';

function MessagesList() {
  const messages = useMessages();
  // h-[78vh] lg:h-[725px]
  return (
    <div className=" h-[calc(100vh-140px)] overflow-auto">
      {messages.map((message: MessageType['message']) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
}

export default MessagesList;
