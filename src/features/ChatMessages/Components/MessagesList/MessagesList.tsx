import React from 'react';
import { MessageType } from '../../../../utils/Types/registerTypes';
import useMessages from '../../hooks/useMessages';
import Message from '../Message/Message';

function MessagesList() {
  const messages = useMessages();

  return (
    <div className="h-[720px] overflow-auto">
      {messages.map((message: MessageType['message']) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
}

export default MessagesList;
